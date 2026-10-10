import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { school } from "@/data/school";
import "./globals.css";

export const metadata = {
  title: "SMAN 3 Kota Serang",
  description: `${school.identity.type} di ${school.contact.address.city}, ${school.contact.address.province}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
