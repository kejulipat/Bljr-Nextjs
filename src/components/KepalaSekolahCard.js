import Image from "next/image";
import { school } from "@/data/school";

export default function KepalaSekolahCard() {
  return (
    <article className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
      <div className="relative aspect-[3/4] overflow-hidden rounded bg-surface">
        <Image
          src={school.images.kepalaSekolah}
          alt={`Foto ${school.identity.principal}, Kepala Sekolah`}
          fill
          sizes="(max-width: 1024px) 80vw, 300px"
          className="object-cover"
          unoptimized={school.images.kepalaSekolah.endsWith(".svg")}
        />
      </div>
      <h2 className="mt-5 text-center font-heading text-lg font-bold uppercase text-navy">
        {school.identity.principal}
      </h2>
      <p className="mt-2 text-center text-brand">- Kepala Sekolah -</p>
    </article>
  );
}
