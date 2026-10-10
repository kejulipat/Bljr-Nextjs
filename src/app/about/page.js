import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";
import { school } from "@/data/school";

export default function AboutPage() {
  const tahunBerdiri = school.highlights.find(
    (highlight) => highlight.key === "founded",
  );
  const penghargaan = school.highlights.filter(
    (highlight) => highlight.key !== "founded",
  );

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-6 py-12 sm:py-16">
      <header className="space-y-4">
        <p className="font-semibold text-green-700">{school.identity.type}</p>
        <h1 className="text-3xl font-bold text-green-950 sm:text-4xl">
          Tentang {school.identity.name}
        </h1>
      </header>

      <section aria-labelledby="profil-title" className="space-y-6">
        <SectionTitle judul="Profil Sekolah" />
        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          {school.profile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="sejarah-title" className="space-y-6">
        <SectionTitle judul="Sejarah Singkat" />
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border border-green-100 bg-green-50 p-5">
            <p className="font-semibold text-green-950">Didirikan</p>
            <p className="mt-2 text-gray-700">
              {tahunBerdiri?.value} ({school.identity.founded})
            </p>
          </li>
          <li className="rounded-xl border border-green-100 bg-green-50 p-5">
            <p className="font-semibold text-green-950">Kepala Sekolah</p>
            <p className="mt-2 text-gray-700">{school.identity.principal}</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="pengakuan-title" className="space-y-6">
        <SectionTitle judul="Prestasi & Pengakuan" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {penghargaan.map((item) => (
            <li
              key={item.key}
              className="rounded-xl border border-green-100 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-green-950">{item.value}</p>
              {item.year !== "-" ? (
                <p className="mt-2 text-sm text-green-800">
                  {item.year === "since 2017" ? "Sejak 2017" : item.year}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionTitle judul="Visi" />
        <p className="rounded-2xl bg-green-50 p-6 text-lg leading-relaxed text-green-950">
          {school.vision}
        </p>
      </section>

      <section className="space-y-6">
        <SectionTitle judul="Misi" />
        <ol className="list-inside list-decimal space-y-4 text-base leading-relaxed text-gray-700 marker:font-semibold marker:text-green-800">
          {school.mission.map((mission) => (
            <li key={mission} className="rounded-xl border border-green-100 p-4">
              {mission}
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6">
        <SectionTitle judul="Alamat & Kontak" />
        <address className="space-y-3 rounded-2xl border border-green-100 bg-white p-6 not-italic leading-relaxed text-gray-700">
          <p>{school.contact.address.full}</p>
          <p>
            Telepon:{" "}
            <a
              className="font-medium text-green-800 underline underline-offset-4 hover:text-green-600"
              href={`tel:${school.contact.phone.replace(/[^\d+]/g, "")}`}
            >
              {school.contact.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="font-medium text-green-800 underline underline-offset-4 hover:text-green-600"
              href={`mailto:${school.contact.email}`}
            >
              {school.contact.email}
            </a>
          </p>
        </address>
      </section>
    </div>
  );
}
