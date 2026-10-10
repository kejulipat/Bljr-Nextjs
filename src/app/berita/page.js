import Link from "next/link";

import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/berita";

export default function BeritaPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-6 py-12 sm:py-16">
      <header className="space-y-4">
        <SectionTitle judul="Berita Terbaru" />
        <p className="max-w-2xl leading-relaxed text-gray-700">
          Informasi dan pengumuman untuk warga sekolah.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {berita.map((item) => (
          <BeritaCard key={item.id} berita={item} />
        ))}
      </div>
    </section>
  );
}
