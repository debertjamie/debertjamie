// PUBLIC URL (DEV && PROD)
export const publicUrl = `https://${process.env.NODE_ENV === "development" ? process.env.VERCEL_URL : "debertjamie.com"}`;

// DATABASE (POSTGRES)
export const dbUrl = process.env.DB_URL;

// AUTHENTICATION
export const discordId = process.env.DISCORD_CLIENT_ID;
export const discordSecret = process.env.DISCORD_CLIENT_SECRET;
export const googleId = process.env.GOOGLE_CLIENT_ID;
export const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

// SPOTIFY
export const spotifyId = process.env.SPOTIFY_CLIENT_ID;
export const spotifySecret = process.env.SPOTIFY_CLIENT_SECRET;
export const spotifyToken = process.env.SPOTIFY_REFRESH_TOKEN;

// WAKATIME
export const wakatimeKey = process.env.WAKATIME_KEY;

// EMAIL FORM API KEY
export const emailApiKey = process.env.EMAIL_API_KEY;

// SANITY CONFIG
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-13";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const mode = process.env.NODE_ENV || "development";

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}