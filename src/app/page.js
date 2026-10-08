import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-l mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
      <p className="text-gray-600">
        This is a simple Next.js application.
      </p>
      <Link
        href="/about"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded-lg transition"
      >
        Ke halaman About
      </Link>
    </main>
  );
}