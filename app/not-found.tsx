import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-y-3 mx-auto max-w-2xl space-y-4">
      <h1 className="text-5xl font-bold">404: Not Found</h1>
      <p className="text-lg">What are you even looking for 🤨?</p>
      <p className="text-lg">This place doesn&#39;t hold any secrets... yet.</p>
      <Link
        className="w-fit mt-12 px-4 py-2 bg-accent font-semibold text-lg rounded-lg"
        href="/"
      >
        Return -&gt;
      </Link>
    </div>
  );
}
