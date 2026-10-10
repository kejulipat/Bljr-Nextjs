import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/berita";
import { school } from "@/data/school";

export default function Home() {
  const beritaTerbaru = berita.slice(0, 3);

  return (
    <>
      <Hero
        judul={school.identity.name}
        tagline={school.tagline}
        gambar={school.images.hero}
        logo={school.images.logo}
        tombol={{ href: "/about", label: "Mengenal Sekolah" }}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-6 py-14 sm:py-20">
        <section
          aria-labelledby="sambutan-title"
          className="rounded-2xl border border-green-100 bg-green-50 p-6 sm:p-10"
        >
          <SectionTitle id="sambutan-title" judul="Sambutan Kepala Sekolah" />
          <p
            className="mt-5 max-w-3xl whitespace-pre-line leading-relaxed text-gray-700"
          >
            {school.sambutan.split("\n\n")[0]}
          </p>
          <p className="mt-4 font-semibold text-green-950">
            {school.identity.principal}
          </p>
        </section>

        <section aria-labelledby="informasi-title" className="space-y-7">
          <SectionTitle id="informasi-title" judul="Informasi Singkat" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {school.highlights.map((highlight) => (
              <article
                key={highlight.key}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-green-950">
                  {highlight.value}
                </h3>
                {highlight.year !== "-" ? (
                  <p className="mt-2 text-sm text-green-800">
                    {highlight.year === "since 2017"
                      ? "Sejak 2017"
                      : highlight.year}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="berita-title" className="space-y-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle id="berita-title" judul="Berita Terbaru" />
            <Link
              href="/berita"
              className="inline-flex w-fit rounded-lg border border-green-800 px-4 py-2 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Lihat Semua Berita
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-green-900 p-7 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Informasi Sekolah</h2>
            <p className="mt-2 text-green-100">
              Kenali profil, visi, dan misi sekolah.
            </p>
          </div>
          <Link
            href="/about"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-green-900 transition hover:bg-green-100"
          >
            Tentang Sekolah
          </Link>
        </section>
      </div>
    </>
  );
}