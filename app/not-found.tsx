import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-5xl font-bold">404 Page Not Found</h1>
      <div className="text-lg">
        <p>What are you even looking for 🤨?</p>
        <p>This place doesn&#39;t hold any secrets... yet. Check back later.</p>
      </div>
      <Link
        className="block w-fit px-4 py-2 bg-blue-800 text-zinc-100 font-semibold text-lg rounded-lg"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
