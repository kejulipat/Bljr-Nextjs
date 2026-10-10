import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  YouTubeIcon,
} from "@/components/Icons";
import Container from "@/components/Container";
import { school } from "@/data/school";

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy text-white">
      <Container className="grid gap-8 py-10 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-bold">
            {school.identity.nameFull}
          </h2>
          <address className="mt-3 space-y-2 not-italic leading-relaxed text-white/90">
            <p>{school.contact.address.full}</p>
            <p className="flex items-center gap-2">
              <PhoneIcon className="size-4 shrink-0 text-accent" />
              <a
                href={`tel:${school.contact.phone.replace(/[^\d+]/g, "")}`}
                className="rounded underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {school.contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0 text-accent" />
              <a
                href={`mailto:${school.contact.email}`}
                className="rounded underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {school.contact.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="font-heading font-bold">Media Sosial</h2>
          <ul className="mt-3 flex gap-3">
            <li>
              <a
                href={school.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube SMAN 3 Kota Serang"
                className="flex size-11 items-center justify-center rounded-full border-2 border-white transition hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <YouTubeIcon className="size-5" />
              </a>
            </li>
            <li>
              <a
                href={school.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SMAN 3 Kota Serang"
                className="flex size-11 items-center justify-center rounded-full border-2 border-white transition hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <InstagramIcon className="size-5" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/30">
        <Container className="py-4 text-center text-sm text-white/90">
          <p>© 2026 {school.identity.nameFull}</p>
        </Container>
      </div>
    </footer>
  );
}
