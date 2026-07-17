import Link from "next/link";
import { jetbrainsMono } from "@/ui/fonts/fonts";

export function ReturnHome() {
  return (
    <section className="flex pb-6">
      <p className={`${jetbrainsMono.className} text-lg`}>
        &gt;{" "}
        <Link
          href="/"
          className="text-olivine-dark dark:text-olivine border-b border-b-olivine/30 dark:border-b-olivine-dark/30 hover:border-b-olivine-dark dark:hover:border-b-olivine duration-300"
        >
          cd ..
        </Link>
      </p>
    </section>
  );
}
