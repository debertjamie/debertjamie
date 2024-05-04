import "dotenv/config";
import { unstable_cache as cache } from "next/cache";

export const getWakatimeData = cache(async () => {
  const token = process.env.WAKATIME_KEY!;
  const headers = {
    Authorization: `Basic ${Buffer.from(token).toString("base64")}`,
  };
  const response = await fetch(
    "https://wakatime.com/api/v1/users/current/stats",
    {
      headers: headers,
    }
  );
  const data = await response.json();
  return data.data;
}, [], { revalidate: 3600 });
