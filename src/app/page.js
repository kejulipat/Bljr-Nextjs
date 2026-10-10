import Link from "next/link";
import BeritaTerkini from "@/components/BeritaTerkini";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import KepalaSekolahCard from "@/components/KepalaSekolahCard";
import PetaLokasi from "@/components/PetaLokasi";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/berita";
import { school } from "@/data/school";

export default function Home() {
  return (
    <>
      <Hero
        judul={school.identity.name}
        tagline={school.tagline}
        gambar={school.images.hero}
        tombol={{ href: "/about", label: "Mengenal Sekolah" }}
      />
      <InfoBar />

      <div className="space-y-14 py-12 sm:py-16">
        <section
          aria-labelledby="sambutan-title"
        >
          <Container className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <KepalaSekolahCard />
            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <SectionTitle id="sambutan-title" judul="Sambutan Kepala Sekolah" />
              <p className="mt-6 whitespace-pre-line leading-relaxed text-ink">
                {school.sambutan.split("\n\n")[0]}
              </p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="informasi-title">
          <Container className="space-y-6">
            <SectionTitle id="informasi-title" judul="Informasi Singkat" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {school.highlights.map((highlight) => (
                <article
                  key={highlight.key}
                  className="rounded-lg border-t-4 border-brand bg-white p-5 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {highlight.value}
                  </h3>
                  {highlight.year !== "-" ? (
                    <p className="mt-2 text-sm text-ink">{highlight.year}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="min-w-0 bg-surface">
          <Container className="space-y-4">
            <BeritaTerkini items={berita} />
            <div className="flex justify-end">
              <Link
                href="/berita"
                className="inline-flex w-fit rounded px-4 py-2 font-semibold text-link transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              >
                Lihat Semua →
              </Link>
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex flex-col items-center justify-between gap-5 rounded-lg bg-navy p-7 text-center text-white sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold">Informasi Sekolah</h2>
              <p className="mt-2 text-white/90">
                Kenali profil, visi, dan misi sekolah.
              </p>
            </div>
            <Link
              href="/about"
              className="rounded bg-accent px-5 py-3 font-bold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Tentang Sekolah
            </Link>
          </Container>
        </section>

        <PetaLokasi />
      </div>
    </>
  );
}
