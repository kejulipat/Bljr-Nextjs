import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ berita }) {
  const tanggal = new Date(`${berita.tanggal}T12:00:00`).toLocaleDateString(
    "id-ID",
    { dateStyle: "long" },
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-green-50">
        <Image
          src={berita.gambar}
          alt={`Ilustrasi berita: ${berita.judul}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          unoptimized={berita.gambar.endsWith(".svg")}
        />
      </div>
      <div className="space-y-3 p-5">
        {berita.isDummy ? (
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-900">
            Contoh
          </span>
        ) : null}
        <h2 className="text-xl font-semibold text-green-950">{berita.judul}</h2>
        <time
          dateTime={berita.tanggal}
          className="block text-sm text-green-800"
        >
          {tanggal}
        </time>
        <p className="leading-relaxed text-gray-700">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="inline-flex rounded-lg bg-green-800 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
