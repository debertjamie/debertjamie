import Link from "next/link";

export const tag: Record<string, string> = {
  LIFE: "LIFE",
  PSYCHOLOGY: "PSYCHOLOGY",
  SOFTWARE: "SOFTWARE ENGINEERING",
  DESIGN: "DESIGN & STYLING",
  FRONTEND: "FRONTEND DEVELOPMENT",
  BACKEND: "BACKEND DEVELOPMENT",
  DATABASE: "DATABASE",
  "AI & ML": "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "ALGO & DS": "ALGORITHMS AND DATA STRUCTURES",
  CYBERSECURITY: "CYBERSECURITY",
};

export function Tags() {
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-2 text-base font-semibold select-none">
      <Link
        href="?tag=life"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        LIFE
      </Link>
      <Link
        href="?tag=psychology"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        PSYCHOLOGY
      </Link>
      <Link
        href="?tag=software"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        SOFTWARE
      </Link>
      <Link
        href="?tag=design"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        DESIGN
      </Link>
      <Link
        href="?tag=frontend"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        FRONTEND
      </Link>
      <Link
        href="?tag=backend"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        BACKEND
      </Link>
      <Link
        href="?tag=database"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        DATABASE
      </Link>
      <Link
        href="?tag=ai%20%26%20ml"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        AI & ML
      </Link>
      <Link
        href="?tag=algo%20%26%20ds"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        ALGO & DS
      </Link>
      <Link
        href="?tag=cybersecurity"
        className="bg-brand-700 text-brand-50 px-2 py-1 rounded-lg"
      >
        CYBERSECURITY
      </Link>
    </div>
  );
}
