import { spotifyId, spotifySecret, spotifyToken } from "@/app/env.mjs";

const tokenApi = "https://accounts.spotify.com/api/token";
const basic = Buffer.from(`${spotifyId}:${spotifySecret}`).toString("base64");

export async function getAccessToken() {
  const response = await fetch(tokenApi, {
    method: "POST",
    next: { revalidate: 60 * 60 },
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: spotifyToken!,
    }),
  });

  return (await response.json()) as { access_token: string };
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      cache: "no-store",
    },
  });
};
