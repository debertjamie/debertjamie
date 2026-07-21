import { spotifyId, spotifySecret, spotifyToken } from "@/app/env.mjs";

const tokenApi = "https://accounts.spotify.com/api/token";
const basic = Buffer.from(`${spotifyId}:${spotifySecret}`).toString("base64");

export class SpotifyAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SpotifyAuthError";
  }
}

let cachedAccessToken: string | null = null;
let tokenExpiresAt: number = 0;
let tokenRefreshPromise: Promise<string> | null = null;

async function fetchNewToken(): Promise<string> {
  const response = await fetch(tokenApi, {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: spotifyToken!,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    if (response.status === 400 && text.includes("invalid_grant")) {
      throw new SpotifyAuthError(
        "Spotify refresh token was revoked or expired. Re-authorize the app and replace SPOTIFY_REFRESH_TOKEN."
      );
    }

    throw new Error("Failed to get access token" + (text ? `: ${text}` : ""));
  }

  const data = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!data.access_token) {
    throw new Error("Spotify token response did not include an access token.");
  }

  // Calculate expiration time (Spotify tokens typically last 3600s).
  // Subtract 60 seconds (60,000 ms) as a buffer to refresh BEFORE it officially expires.
  const expiresInMs = (data.expires_in ?? 3600) * 1000;
  tokenExpiresAt = Date.now() + expiresInMs - 60000;
  cachedAccessToken = data.access_token;

  return data.access_token;
}

export async function getAccessToken(): Promise<{ access_token: string }> {
  if (cachedAccessToken && Date.now() < tokenExpiresAt) {
    return { access_token: cachedAccessToken };
  }

  if (tokenRefreshPromise) {
    const token = await tokenRefreshPromise;
    return { access_token: token };
  }

  try {
    tokenRefreshPromise = fetchNewToken();
    const access_token = await tokenRefreshPromise;
    return { access_token };
  } finally {
    tokenRefreshPromise = null;
  }
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
}

export async function getRecentlyPlayed() {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=6", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
}