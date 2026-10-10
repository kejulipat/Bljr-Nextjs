import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function Hero({ judul, tagline, gambar, tombol }) {
  return (
    <Container className="pt-4">
      <div className="relative aspect-video overflow-hidden bg-line lg:aspect-[8/3]">
        <Image
          src={gambar}
          alt={`Pemandangan ${judul}`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          unoptimized={gambar.endsWith(".svg")}
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent px-5 pb-4 pt-12 text-white sm:px-8 sm:pb-6 sm:pt-16">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-heading text-xl font-bold sm:text-4xl">
                {judul}
              </h1>
              <p className="mt-1 text-xs text-white/90 sm:text-base">
                {tagline}
              </p>
            </div>
            {tombol ? (
              <Link
                href={tombol.href}
                className="shrink-0 rounded bg-accent px-3 py-2 text-sm font-bold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:text-base"
              >
                {tombol.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}
