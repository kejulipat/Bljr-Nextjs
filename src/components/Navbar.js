import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { MailIcon, PhoneIcon } from "@/components/Icons";
import NavLinks from "@/components/NavLinks";
import { school } from "@/data/school";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-navy py-3 text-white">
        <Container className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="relative aspect-square w-11 shrink-0 overflow-hidden rounded-full bg-white">
              <Image
                src={school.images.logo}
                alt={`Logo ${school.identity.name}`}
                fill
                sizes="44px"
                className="object-cover"
                unoptimized={school.images.logo.endsWith(".svg")}
              />
            </span>
            <span className="font-heading text-sm font-bold leading-tight sm:text-lg">
              {school.identity.nameFull}
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a
              href={`tel:${school.contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <PhoneIcon className="size-4" />
              <span>{school.contact.phone}</span>
            </a>
            <a
              href={`mailto:${school.contact.email}`}
              className="flex items-center gap-2 rounded hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <MailIcon className="size-4" />
              <span>{school.contact.email}</span>
            </a>
          </div>
        </Container>
      </div>
      <div className="border-b-4 border-accent bg-brand">
        <NavLinks />
      </div>
    </header>
  );
}
