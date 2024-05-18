import Link from "next/link";

export const tag: Record<string, string> = {
  LIFE: "LIFE",
  PSYCHOLOGY: "PSYCHOLOGY",
  SOFTWARE: "SOFTWARE ENGINEERING",
  DESIGN: "DESIGN & STYLING",
  WEBDEV: "WEB DEVELOPMENT",
  DATABASE: "DATABASE",
  "AI & ML": "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "ALGO & DS": "ALGORITHMS AND DATA STRUCTURES",
  CYBERSECURITY: "CYBERSECURITY",
};

export function Tags() {
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-2 text-base font-semibold select-none *:bg-emerald-900 *:text-cyan-50 *:px-2 *:py-1 *:rounded-lg">
      <Link href="?tag=life">LIFE</Link>
      <Link href="?tag=psychology">PSYCHOLOGY</Link>
      <Link href="?tag=software">SOFTWARE</Link>
      <Link href="?tag=design">DESIGN</Link>
      <Link href="?tag=webdev">WEBDEV</Link>
      <Link href="?tag=database">DATABASE</Link>
      <Link href="?tag=ai%20%26%20ml">AI & ML</Link>
      <Link href="?tag=algo%20%26%20ds">ALGO & DS</Link>
      <Link href="?tag=cybersecurity">CYBERSECURITY</Link>
    </div>
  );
}
