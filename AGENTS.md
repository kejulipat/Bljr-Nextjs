<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Aturan Proyek: Website SMAN 3 Kota Serang

- Sumber tunggal fakta sekolah: `content.md` (root repo). Jangan mengarang data; bagian `[TODO]` ditampilkan sebagai placeholder, bukan diisi karangan.
- Stack: Next.js App Router, JavaScript saja (DILARANG TypeScript: .ts, .tsx, tsconfig.json), Tailwind CSS, pure frontend (tanpa database, API, backend, login/register).
- Struktur: `src/app` (layout.js, page.js, about/page.js, berita/page.js, berita/[id]/page.js), `src/components` (nama file diawali huruf besar: Navbar.js, Footer.js, BeritaCard.js, Hero.js, SectionTitle.js), `src/data` (school.js, berita.js), aset di `public/`.
- Navbar dan Footer hanya dipasang sekali di `src/app/layout.js`, tidak di page mana pun.
- Navigasi internal wajib `import Link from "next/link"`, bukan tag `<a>`. Tag `<a>` hanya untuk link eksternal.
- Semua data sekolah diambil dari `src/data/school.js`, berita dari `src/data/berita.js`. Jangan menulis ulang teks sekolah di component atau halaman.
- Jangan menulis seluruh kode di `page.js`; pecah ke component.
- Sebelum menulis kode Next.js, baca panduan relevan di `node_modules/next/dist/docs/`. Jika panduan itu bertentangan dengan instruksi prompt soal sintaks Next.js, ikuti panduan.
- Jangan menghapus atau mengubah file asli di `public/`.
- Gunakan bahasa Indonesia untuk teks tampilan, alt text, dan komentar kode.