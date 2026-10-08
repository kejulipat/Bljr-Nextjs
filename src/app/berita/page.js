import Link from "next/link";

export default function BeritaPage() {
    return (
        <main className="p-8 max-w-lg mx-auto space-y-4">
            <h1 className="text-3xl font-bold">Berita Terbaru</h1>
            <p className="text-gray-600">
                Halaman ini menampilkan berita terbaru dari berbagai sumber.
            </p>
            <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                Kembali ke halaman utama 
            </Link>
        </main>
    )
}
