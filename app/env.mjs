export const publicUrl = `https://${process.env.NODE_ENV === "development" ? process.env.VERCEL_URL : process.env.NEXT_PUBLIC_VERCEL_URL}`;

// DATABASE (POSTGRES)
export const dbUrl = process.env.DB_URL;

// AUTHENTICATION
export const discordId = process.env.DISCORD_CLIENT_ID;
export const discordSecret = process.env.DISCORD_CLIENT_SECRET;

// ADMIN EMAIL(S)
const email = process.env.ADMIN_EMAIL;
export const adminEmail = email.includes(",") ? email.split(",") : email;