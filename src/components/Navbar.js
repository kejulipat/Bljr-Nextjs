import Image from "next/image";
import Link from "next/link";
import { school } from "@/data/school";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  return (
    <header className="border-b border-green-100 bg-white">
      <nav
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row"
        aria-label="Navigasi utama"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg text-green-900 transition hover:text-green-700"
        >
          <span className="relative aspect-square w-12 shrink-0 overflow-hidden rounded-full border border-green-100 bg-green-50">
            <Image
              src={school.images.logo}
              alt={`Logo ${school.identity.name}`}
              fill
              sizes="48px"
              className="object-cover"
              unoptimized={school.images.logo.endsWith(".svg")}
            />
          </span>
          <span className="font-bold">{school.identity.name}</span>
        </Link>
        <ul className="flex flex-col items-center gap-3 text-sm font-medium text-green-900 sm:flex-row sm:gap-6">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="rounded transition hover:text-green-700"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
