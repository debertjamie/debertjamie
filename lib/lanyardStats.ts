import "dotenv/config";

export async function getDiscordData() {
  const response = await fetch(
    "https://api.lanyard.rest/v1/users/755773452756975646",
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data.data;
}
