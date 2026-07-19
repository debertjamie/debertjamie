import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";

export function Studio() {
  return (
    <div className="max-w-none w-screen h-screen sm:w-[90vw] mb-4 relative left-1/2 -translate-x-1/2">
      <NextStudio config={config} />
    </div>
  );
}
