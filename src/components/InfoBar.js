import {
  InstagramIcon,
  PinIcon,
  YouTubeIcon,
} from "@/components/Icons";
import Container from "@/components/Container";
import { school } from "@/data/school";

const socialLinks = [
  {
    href: school.social.youtube,
    label: "YouTube SMAN 3 Kota Serang",
    Icon: YouTubeIcon,
  },
  {
    href: school.social.instagram,
    label: "Instagram SMAN 3 Kota Serang",
    Icon: InstagramIcon,
  },
].filter((link) => link.href);

export default function InfoBar() {
  return (
    <Container className="mt-6">
      <section className="grid gap-6 bg-navy px-5 py-7 text-white md:grid-cols-2 md:gap-8 md:px-8">
        <div className="flex items-start gap-4">
          <PinIcon className="mt-1 size-7 shrink-0 text-accent" />
          <div>
            <h2 className="font-heading text-lg font-bold">
              {school.identity.nameFull}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-white/90">
              {school.contact.address.full}
            </p>
          </div>
        </div>
        <div className="border-t border-white/30 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <h2 className="font-heading font-bold">Media Sosial</h2>
          <ul className="mt-3 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
