import Image from "next/image";
import Link from "next/link";

export default function Hero({ judul, tagline, gambar, logo, tombol }) {
  return (
    <section className="relative isolate aspect-[16/9] min-h-80 overflow-hidden bg-green-950 text-white sm:min-h-[28rem]">
      <Image
        src={gambar}
        alt={`Ilustrasi ${judul}`}
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized={gambar.endsWith(".svg")}
        priority
      />
      <div className="absolute inset-0 bg-green-950/65" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-5 px-6 py-12 text-center">
        {logo ? (
          <span className="relative aspect-square w-20 overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-lg sm:w-24">
            <Image
              src={logo}
              alt={`Logo ${judul}`}
              fill
              sizes="96px"
              className="object-cover"
              unoptimized={logo.endsWith(".svg")}
            />
          </span>
        ) : null}
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
          {judul}
        </h1>
        <p className="max-w-2xl text-base text-green-50 sm:text-xl">
          {tagline}
        </p>
        {tombol ? (
          <Link
            href={tombol.href}
            className="rounded-lg bg-white px-5 py-3 font-semibold text-green-900 transition hover:bg-green-100"
          >
            {tombol.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
