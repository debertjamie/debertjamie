import { getWakatimeData, getWakatimeWeeklyData } from "@/lib/wakatime";
import { Counter } from "@/ui/components";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function Wakatime() {
  const data = await getWakatimeData();
  const weeklyData = await getWakatimeWeeklyData();
  const totalHours = Math.ceil(data.total_seconds / 3600);
  const averageHours = Math.floor(data.daily_average / 3600);
  const averageMinutes = Math.floor((data.daily_average % 3600) / 60);
  const language = data.languages.map((l: { name: string }) => l.name)[0];

  let percent = 0;
  for (let i = 0; i < 5; i++) {
    const l = data.languages[i];
    percent += l.percent;
  }
  return (
    <div className="grid sm:grid-cols-2 sm:gap-2 *:bg-porcelain-dark *:dark:bg-steel-grey">
      <div className="rounded-t-lg sm:rounded-lg px-4 py-2">
        <p>Best Day of the Week</p>
        <p className="text-2xl font-semibold text-center">
          {weeklyData.best_day
            ? `${formatDate(weeklyData.best_day.date)} (${Math.floor(weeklyData.best_day.total_seconds / 3600)}h ${Math.floor((weeklyData.best_day.total_seconds % 3600) / 60)}min)`
            : "No Data"}
        </p>
      </div>
      <div className="sm:rounded-lg px-4 py-2">
        <p>Average Time Coding</p>
        <p className="text-2xl font-semibold text-center">
          {averageHours} hours {averageMinutes} minutes
        </p>
      </div>
      <div className="sm:rounded-lg px-4 py-2">
        <p>Total Time Coding</p>
        <p className="text-center">
          <Counter num={totalHours} className="font-bold text-6xl" />{" "}
          <span className="text-2xl">Hours</span>{" "}
        </p>
      </div>
      <div className="rounded-b-lg sm:rounded-lg pb-4 px-4 pt-2 sm:pb-2">
        <p>All Time Most Used Language</p>
        <p className="text-4xl mt-3 font-bold text-center">{language}</p>
      </div>
    </div>
  );
}
