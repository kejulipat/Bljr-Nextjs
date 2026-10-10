import Link from "next/link";

function formatTanggal(tanggal) {
  const tanggalBerita = new Date(`${tanggal}T12:00:00`);

  return {
    date: tanggalBerita,
    day: tanggalBerita.getDate().toString().padStart(2, "0"),
    month: tanggalBerita
      .toLocaleDateString("id-ID", { month: "short" })
      .toUpperCase(),
    monthYear: tanggalBerita
      .toLocaleDateString("id-ID", { month: "long", year: "numeric" })
      .toUpperCase(),
    full: tanggalBerita.toLocaleDateString("id-ID", { dateStyle: "long" }),
  };
}

export default function InfoTerkiniCard({ item, variant }) {
  const tanggal = formatTanggal(item.tanggal);
  const utama = variant === "utama";

  if (utama) {
    return (
      <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex min-h-48 flex-col items-center justify-center bg-navy px-6 py-5 text-center text-white">
          <time dateTime={item.tanggal} className="sr-only">
            {tanggal.full}
          </time>
          <span className="font-heading text-6xl font-bold leading-none">
            {tanggal.day}
          </span>
          <span className="mt-2 text-sm font-semibold tracking-wide">
            {tanggal.monthYear}
          </span>
        </div>
        <div className="flex flex-1 flex-col items-start p-6">
          {item.isDummy ? (
            <span className="mb-3 inline-flex rounded-sm bg-accent px-2 py-1 text-xs font-semibold text-navy">
              Contoh
            </span>
          ) : null}
          <p className="text-xs font-bold tracking-wide text-ink/70">
            {item.kategori}
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
            <Link
              href={`/berita/${item.id}`}
              className="rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link after:absolute after:inset-0"
            >
              {item.judul}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-4 leading-relaxed text-ink">
            {item.ringkasan}
          </p>
          <span className="mt-auto pt-5 font-semibold text-link">
            Baca Selengkapnya →
          </span>
        </div>
      </article>
    );
  }

  return (
    <article className="relative flex h-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-l-2xl bg-brand px-2 py-4 text-center text-white">
        <time dateTime={item.tanggal} className="sr-only">
          {tanggal.full}
        </time>
        <span className="font-heading text-3xl font-bold leading-none">
          {tanggal.day}
        </span>
        <span className="mt-1 text-xs font-semibold">{tanggal.month}</span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start p-4">
        {item.isDummy ? (
          <span className="mb-2 inline-flex rounded-sm bg-accent px-2 py-1 text-xs font-semibold text-navy">
            Contoh
          </span>
        ) : null}
        <time dateTime={item.tanggal} className="text-sm text-ink/70">
          {tanggal.full}
        </time>
        <p className="mt-2 text-xs font-bold tracking-wide text-ink/70">
          {item.kategori}
        </p>
        <h3 className="mt-1 font-heading font-bold text-ink line-clamp-3">
          <Link
            href={`/berita/${item.id}`}
            className="rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link after:absolute after:inset-0"
          >
            {item.judul}
          </Link>
        </h3>
      </div>
    </article>
  );
}
