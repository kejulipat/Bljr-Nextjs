"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi utama">
      <Container>
        <ul className="flex">
          {navigationLinks.map((link) => {
            const aktif =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <li key={link.href} className="flex flex-1 sm:flex-none">
                <Link
                  href={link.href}
                  aria-current={aktif ? "page" : undefined}
                  className={`flex flex-1 justify-center px-5 py-3 text-center font-heading font-bold text-white transition hover:bg-brand-dark focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent sm:flex-none ${
                    aktif ? "bg-brand-dark" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
