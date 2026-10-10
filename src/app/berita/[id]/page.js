import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@/components/Icons";
import Container from "@/components/Container";
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
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <Link
            href="/berita"
            className="inline-flex items-center gap-1 rounded text-sm font-semibold text-link transition hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
          >
            <ChevronLeftIcon className="size-4" />
            Kembali ke Berita
          </Link>
          {item.isDummy ? (
            <span className="block w-fit rounded-sm bg-accent px-2 py-1 text-xs font-semibold text-navy">
              Contoh
            </span>
          ) : null}
          <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            {item.judul}
          </h1>
          <time dateTime={item.tanggal} className="block text-sm text-ink">
            {formatTanggal(item.tanggal)}
          </time>
        </header>

        <div className="relative aspect-video overflow-hidden rounded-lg bg-line">
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

        <div className="space-y-5 text-base leading-relaxed text-ink sm:text-lg">
          {item.isi.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
