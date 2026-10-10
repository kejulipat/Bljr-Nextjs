import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { school } from "@/data/school";
import { Lato, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "SMAN 3 Kota Serang",
  description: `${school.identity.type} di ${school.contact.address.city}, ${school.contact.address.province}.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${robotoSlab.variable} ${lato.variable} h-full scroll-pt-28 antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
