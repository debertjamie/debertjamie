import { format } from "date-fns";
import { getGithubData } from "@/lib/githubStats";
import { getWakatimeData } from "@/lib/wakatimeStats";
import { Lanyard } from "@/wrapper";

function ordinalSuffix(num: number) {
  const unitsDigit = num % 10;
  const tensDigit = Math.floor(num / 10) % 10;
  if (tensDigit === 1 && unitsDigit !== 0 && unitsDigit !== 1) {
    return "th";
  } else {
    switch (unitsDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

function formatDateString(str: string) {
  const parts = str.split(" ");
  return `${parts[1]} ${parts[2]}${ordinalSuffix(parseInt(parts[2]))}, ${parts[3]}`;
}

export async function Extras() {
  const githubData = await getGithubData();
  const wakatimeData = await getWakatimeData();

  const wakatimeUsername = wakatimeData.username;
  const startedTime = wakatimeData.human_readable_range;
  const language = wakatimeData.languages[0];

  const time = parseInt(wakatimeData.total_seconds);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">More From Me</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-6">
          <Lanyard />
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Learning More About</h4>
            <div className="flex flex-wrap gap-y-2 gap-x-2 text-base *:bg-brand-200 dark:*:bg-brand-600 *:px-2 *:py-1 *:rounded-lg *:font-semibold">
              <p>React</p>
              <p>Remix</p>
              <p>NextJS</p>
              <p>Vite</p>
              <p>Tanstack</p>
              <p>NodeJS</p>
              <p>Deno</p>
              <p>MongoDB</p>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="pb-4">
            <p className="text-lg font-semibold">GitHub</p>
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
            <p className="text-lg font-semibold">Wakatime</p>
            <p className="text-base">
              {wakatimeUsername} has logged{" "}
              <span className="font-semibold">{`${hours} hour${hours > 1 ? "s" : ""}${minutes ? ` and ${minutes} minute${minutes > 1 ? "s" : ""}` : ""}`}</span>{" "}
              of coding since {formatDateString(startedTime)}, primarily in{" "}
              <span className="font-semibold">{language.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
