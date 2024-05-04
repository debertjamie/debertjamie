import "dotenv/config";

export async function getGithubData() {
  const token = process.env.GITHUB_TOKEN!;
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
            user(login: "debertjamie") {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
    next: { revalidate: 86400 },
  });
  const data = await response.json();
  return data.data;
}
