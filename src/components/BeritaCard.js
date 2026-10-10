import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/Icons";

export default function BeritaCard({ berita, layout = "vertical" }) {
  const tanggalBerita = new Date(`${berita.tanggal}T12:00:00`);
  const tanggal = tanggalBerita.toLocaleDateString("id-ID", {
    dateStyle: "long",
  });
  const tanggalAngka = tanggalBerita
    .getDate()
    .toString()
    .padStart(2, "0");
  const bulan = tanggalBerita
    .toLocaleDateString("id-ID", { month: "short" })
    .toUpperCase();
  const horizontal = layout === "horizontal";

  return (
    <article
      className={`flex h-full overflow-hidden rounded-md bg-white shadow-sm ${
        horizontal ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 bg-line ${
          horizontal
            ? "aspect-[16/10] md:aspect-auto md:min-h-52 md:w-2/5"
            : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={berita.gambar}
          alt={`Ilustrasi berita: ${berita.judul}`}
          fill
          sizes={
            horizontal
              ? "(max-width: 768px) 100vw, 40vw"
              : "(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover"
          unoptimized={berita.gambar.endsWith(".svg")}
        />
        <div className="absolute left-0 top-0 min-w-16 bg-brand px-3 py-2 text-center text-white">
          <span className="block font-heading text-3xl font-bold leading-none">
            {tanggalAngka}
          </span>
          <span className="mt-1 block text-xs font-semibold">{bulan}</span>
        </div>
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col items-start p-5">
        <time dateTime={berita.tanggal} className="sr-only">
          {tanggal}
        </time>
        {berita.isDummy ? (
          <span className="mb-3 inline-flex rounded-sm bg-accent px-2 py-1 text-xs font-semibold text-navy">
            Contoh
          </span>
        ) : null}
        <h2 className="font-heading text-xl font-bold text-ink">
          {berita.judul}
        </h2>
        <p className="mt-3 line-clamp-3 text-ink">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-auto inline-flex items-center gap-1 pt-4 font-semibold text-link hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          Baca Selengkapnya
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}
