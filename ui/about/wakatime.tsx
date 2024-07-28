import { getWakatimeData } from "@/lib/wakatime";
import { Counter } from "../components";

export async function Wakatime() {
  const data = await getWakatimeData();
  const totalHours = Math.round(data.total_seconds / 3600);
  const language = data.languages.map((l: { name: string }) => l.name)[0];
  return (
    <>
      <div className="rounded-xl bg-neutral-300 dark:bg-neutral-800 px-4 py-2">
        <p>Total Time Coding</p>
        <p>
          <Counter num={totalHours} className="font-bold text-6xl" />{" "}
          <span className="text-2xl">Hours*</span>
        </p>
      </div>
      <div className="rounded-xl bg-neutral-300 dark:bg-neutral-800 px-4 py-2">
        <p>Most Used Language</p>
        <p className="text-4xl mt-3 font-bold">{language}</p>
      </div>
    </>
  );
}
