import { getGithubData } from "@/lib/githubStats";
import { getDiscordData } from "@/lib/lanyardStats";
import { getWakatimeData } from "@/lib/wakatimeStats";
import Image from "next/image";

export async function Extras() {
  const githubData = await getGithubData();
  const wakatimeData = await getWakatimeData();
  const discordData = await getDiscordData();

  const wakatimeUsername = wakatimeData.username;
  const totalTime = wakatimeData.human_readable_total_including_other_language;
  const startedTime = wakatimeData.human_readable_range;
  const language = wakatimeData.languages[0];

  const colors: { [key: string]: string } = {
    online: "text-[color:var(--green)]",
    idle: "text-[color:var(--yellow)]",
    dnd: "text-[color:var(--red)]",
    offline: "text-[color:var(--neutral)]",
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">More From Me</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-6">
          <div className="py-1 px-2 rounded-lg bg-secondary border-accent border-2 space-y-2">
            <div className="text-lg flex items-center">
              <Image
                src={
                  "https://cdn.discordapp.com/avatars/755773452756975646/" +
                  discordData.discord_user.avatar +
                  ".png"
                }
                height={50}
                width={50}
                alt="Discord avatar"
                className="rounded-full"
              />
              <div className="ml-2 text-sm">
                <p>{discordData.discord_user.username}</p>
                <p>
                  Status:{" "}
                  <span
                    className={
                      "font-semibold " + colors[discordData.discord_status]
                    }
                  >
                    {discordData.discord_status}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Currently Messing Around With</h4>
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-base">
              <p>React</p>
              <p>Remix</p>
              <p>NextJS</p>
              <p>Unified</p>
              <p>NodeJS</p>
              <p>Deno</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Statistics and whatnot</h4>
          <div className="pb-4">
            <p className="text-lg">GitHub</p>
            <p className="text-base">
              {githubData.user.name} has submitted{" "}
              <span className="font-semibold">
                {
                  githubData.user.contributionsCollection.contributionCalendar
                    .totalContributions
                }
              </span>{" "}
              contributions
            </p>
          </div>
          <div>
            <p className="text-lg">Wakatime</p>
            <p className="text-base">
              {wakatimeUsername} has logged{" "}
              <span className="font-semibold">{totalTime}</span> of coding since{" "}
              {startedTime}, primarily in{" "}
              <span className="font-semibold text-primary">
                {language.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
