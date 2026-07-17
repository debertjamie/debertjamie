/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { ReturnHome } from "@/ui/components";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <section>
      <div className="max-w-none w-screen h-screen sm:w-[90vw] mb-4 relative left-1/2 -translate-x-1/2">
        <NextStudio config={config} />
      </div>
      <ReturnHome />
    </section>
  );
}
