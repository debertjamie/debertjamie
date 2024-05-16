export const publicUrl = `https://${process.env.NODE_ENV === "development" ? process.env.VERCEL_URL : process.env.NEXT_PUBLIC_VERCEL_URL}`;
