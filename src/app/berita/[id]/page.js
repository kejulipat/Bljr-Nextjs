import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "@/data/berita";
import { school } from "@/data/school";

function formatTanggal(tanggal) {
  return new Date(`${tanggal}T12:00:00`).toLocaleDateString("id-ID", {
    dateStyle: "long",
  });
}

export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = berita.find((entry) => entry.id === id);

  return {
    title: item
      ? `${item.judul} | ${school.identity.name}`
      : `Berita tidak ditemukan | ${school.identity.name}`,
  };
}

export default async function BeritaDetailPage({ params }) {
  const { id } = await params;
  const item = berita.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-6 py-12 sm:py-16">
      <header className="space-y-4">
        <Link
          href="/berita"
          className="inline-flex rounded text-sm font-semibold text-green-800 transition hover:text-green-600"
        >
          Kembali ke Berita
        </Link>
        {item.isDummy ? (
          <span className="block w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-900">
            Contoh
          </span>
        ) : null}
        <h1 className="text-3xl font-bold text-green-950 sm:text-4xl">
          {item.judul}
        </h1>
        <time
          dateTime={item.tanggal}
          className="block text-sm text-green-800"
        >
          {formatTanggal(item.tanggal)}
        </time>
      </header>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-green-50">
        <Image
          src={item.gambar}
          alt={`Ilustrasi berita: ${item.judul}`}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
          unoptimized={item.gambar.endsWith(".svg")}
          priority
        />
      </div>

      <div className="space-y-5 text-base leading-relaxed text-gray-700 sm:text-lg">
        {item.isi.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
