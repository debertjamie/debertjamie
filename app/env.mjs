// PUBLIC URL (DEV && PROD)
export const publicUrl = `https://${process.env.NODE_ENV === "development" ? process.env.VERCEL_URL : process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// DATABASE (POSTGRES)
export const dbUrl = process.env.DB_URL;

// AUTHENTICATION
export const discordId = process.env.DISCORD_CLIENT_ID;
export const discordSecret = process.env.DISCORD_CLIENT_SECRET;

// ADMIN EMAIL(S)
const email = process.env.ADMIN_EMAIL;
export const adminEmail = email.includes(",") ? email.split(",") : email;

// GIT COMMIT SHA
export const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? "9797610087981a0db4e1f6134a4f718501ba55c6";

// SPOTIFY
export const spotifyId = process.env.SPOTIFY_CLIENT_ID
export const spotifySecret = process.env.SPOTIFY_CLIENT_SECRET;
export const spotifyToken = process.env.SPOTIFY_REFRESH_TOKEN;