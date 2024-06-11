import { spotifyId, spotifySecret, spotifyToken } from "@/app/env.mjs";

const tokenApi = "https://accounts.spotify.com/api/token";
const basic = Buffer.from(`${spotifyId}:${spotifySecret}`).toString("base64");

export async function getAccessToken() {
  let accessToken;
    
  const response = await fetch(tokenApi, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: spotifyToken!,
    }),
  }).then((res) => res.json());

  accessToken = {
    ...response,
    refresh_token: spotifyToken,
  }

  return accessToken;
}