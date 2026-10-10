import Container from "@/components/Container";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import SectionTitle from "@/components/SectionTitle";
import { school } from "@/data/school";

export default function PetaLokasi() {
  const { contact, identity } = school;

  return (
    <section aria-labelledby="lokasi-title">
      <Container className="space-y-6">
        <SectionTitle id="lokasi-title" judul="Lokasi Sekolah" />
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-1 size-6 shrink-0 text-brand" />
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {identity.nameFull}
                </h3>
                <p className="mt-2 leading-relaxed text-ink">
                  {contact.address.full}
                </p>
              </div>
            </div>
            <p className="flex items-center gap-2">
              <PhoneIcon className="size-5 shrink-0 text-brand" />
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="rounded text-link hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              >
                {contact.phone}
              </a>
            </p>
            <p className="flex min-w-0 items-center gap-2">
              <MailIcon className="size-5 shrink-0 text-brand" />
              <a
                href={`mailto:${contact.email}`}
                className="break-all rounded text-link hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              >
                {contact.email}
              </a>
            </p>
            {contact.googleMapsUrl ? (
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex rounded-md bg-accent px-5 py-3 font-bold text-navy transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
              >
                Buka di Google Maps
              </a>
            ) : null}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-line shadow-sm sm:aspect-[16/9]">
            {contact.googleMapsEmbedUrl ? (
              <iframe
                src={contact.googleMapsEmbedUrl}
                title={`Peta lokasi ${identity.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <p className="flex h-full items-center justify-center font-semibold text-ink">
                Peta segera hadir
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
