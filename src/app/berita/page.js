import BeritaCard from "@/components/BeritaCard";
import Container from "@/components/Container";
import KepalaSekolahCard from "@/components/KepalaSekolahCard";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/berita";

export default function BeritaPage() {
  return (
    <Container className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_320px]">
      <div className="min-w-0">
        <header className="mb-8 space-y-4">
          <SectionTitle judul="Berita Terbaru" />
          <p className="max-w-2xl leading-relaxed text-ink">
            Informasi dan pengumuman untuk warga sekolah.
          </p>
        </header>
        <div className="space-y-6">
          {berita.map((item) => (
            <BeritaCard key={item.id} berita={item} layout="horizontal" />
          ))}
        </div>
      </div>
      <aside className="self-start lg:sticky lg:top-36">
        <KepalaSekolahCard />
      </aside>
    </Container>
  );
}
