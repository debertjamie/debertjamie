import {getWakatimeData, getWakatimeWeeklyData} from "@/lib/wakatime";
import {Counter} from "../components";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export async function Wakatime() {
  const data = await getWakatimeData();
  const weeklyData = await getWakatimeWeeklyData();
  const totalHours = Math.floor(data.total_seconds / 3600);
  const totalMinutes = Math.floor((data.total_seconds % 3600) / 60);
  const averageHours = Math.floor(data.daily_average / 3600);
  const averageMinutes = Math.floor((data.daily_average % 3600) / 60);
  const language = data.languages.map((l: { name: string }) => l.name)[0];

  // const languageChart: (string | number)[][] = [["Language", "Percentage"]];
  let percent = 0;
  for(let i = 0; i < 5; i++) {
    const l = data.languages[i];
    percent += l.percent;
  }
  // languageChart.push(["Others", 100 - percent]);
  return (
    <div
      className="grid lg:grid-cols-2 gap-4 *:rounded-xl *:px-4 *:py-2 *:border-2 *:border-neutral-400 *:dark:border-neutral-700 *:bg-neutral-300 *:dark:bg-neutral-900">
      <div>
        <p>Best Day of the Week</p>
        <p className="text-2xl font-semibold">
          {formatDate(weeklyData.best_day.date)} ({Math.floor(weeklyData.best_day.total_seconds / 3600)} hours {Math.floor((weeklyData.best_day.total_seconds % 3600) / 60)} minutes)
        </p>
      </div>
      <div>
        <p>Average Time Coding for the Week</p>
        <p className="text-2xl font-semibold">
          {averageHours} hours {averageHours} minutes
        </p>
      </div>
      <div>
        <p>Total Time Coding</p>
        <p>
          <Counter num={totalHours} className="font-bold text-6xl"/>{" "}
          <span className="text-2xl">Hours</span>{" "}
          <Counter num={totalMinutes} speed={25} className="font-bold text-6xl"/>{" "}
          <span className="text-2xl">Minutes</span>
        </p>
      </div>
      <div>
        <p>All Time Most Used Language</p>
        <p className="text-4xl mt-3 font-bold">{language}</p>
      </div>
    </div>
  );
}
