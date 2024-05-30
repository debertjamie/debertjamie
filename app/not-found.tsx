import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <h1 className="text-5xl font-bold">404 Page Not Found</h1>
      <p className="text-lg">What are you even looking for 🤨?</p>
      <p className="text-lg">
        This place doesn&#39;t hold any secrets... yet. Check back later.
      </p>
      <Link
        className="block w-fit mt-12 px-4 py-2 bg-blue-800 text-zinc-100 font-semibold text-lg rounded-lg"
        href="/"
      >
        Return Home -&gt;
      </Link>
    </div>
  );
}
