import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">404 Not Found</h1>
      <p>Could not find the requested podcast.</p>
      <Link
        href={"/podcasts"}
        className="bg-black text-white py-2 px-4 rounded"
      >
        Go back
      </Link>
    </main>
  );
}
