import Container from "@/components/Container";
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
    <div className="space-y-14 py-12 sm:py-16">
      <Container>
        <header className="space-y-4">
          <p className="font-semibold text-brand">{school.identity.type}</p>
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">
            Tentang {school.identity.name}
          </h1>
        </header>
      </Container>

      <section aria-labelledby="profil-title">
        <Container className="space-y-6">
          <SectionTitle id="profil-title" judul="Profil Sekolah" />
          <div className="max-w-3xl space-y-4 leading-relaxed text-ink">
            {school.profile.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="sejarah-title">
        <Container className="space-y-6">
          <SectionTitle id="sejarah-title" judul="Sejarah Singkat" />
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-lg bg-white p-5 shadow-sm">
              <p className="font-semibold text-navy">Didirikan</p>
              <p className="mt-2 text-ink">
                {tahunBerdiri?.value} ({school.identity.founded})
              </p>
            </li>
            <li className="rounded-lg bg-white p-5 shadow-sm">
              <p className="font-semibold text-navy">Kepala Sekolah</p>
              <p className="mt-2 text-ink">{school.identity.principal}</p>
            </li>
          </ul>
        </Container>
      </section>

      <section aria-labelledby="pengakuan-title">
        <Container className="space-y-6">
          <SectionTitle id="pengakuan-title" judul="Prestasi & Pengakuan" />
          <ul className="divide-y divide-line border-y border-line">
            {penghargaan.map((item) => (
              <li
                key={item.key}
                className="py-4 sm:flex sm:items-baseline sm:justify-between sm:gap-6"
              >
                <p className="font-semibold text-navy">{item.value}</p>
                {item.year !== "-" ? (
                  <p className="mt-1 text-sm text-ink sm:mt-0">{item.year}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="space-y-6">
          <SectionTitle judul="Visi" />
          <p className="max-w-3xl rounded-lg bg-navy p-6 text-lg leading-relaxed text-white">
            {school.vision}
          </p>
        </Container>
      </section>

      <section>
        <Container className="space-y-6">
          <SectionTitle judul="Misi" />
          <ol className="list-inside list-decimal space-y-4 leading-relaxed marker:font-semibold marker:text-brand">
            {school.mission.map((mission) => (
              <li
                key={mission}
                className="rounded-r-lg border-l-4 border-accent bg-white p-4 shadow-sm"
              >
                {mission}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="space-y-6">
          <SectionTitle judul="Alamat & Kontak" />
          <address className="max-w-3xl space-y-3 rounded-lg bg-white p-6 not-italic leading-relaxed text-ink shadow-sm">
            <p>{school.contact.address.full}</p>
            <p>
              Telepon:{" "}
              <a
                className="rounded font-medium text-link underline underline-offset-4 hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                href={`tel:${school.contact.phone.replace(/[^\d+]/g, "")}`}
              >
                {school.contact.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                className="rounded font-medium text-link underline underline-offset-4 hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                href={`mailto:${school.contact.email}`}
              >
                {school.contact.email}
              </a>
            </p>
          </address>
        </Container>
      </section>
    </div>
  );
}
