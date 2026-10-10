import { school } from "@/data/school";

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-green-950 text-green-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">{school.identity.nameFull}</h2>
          <address className="mt-3 not-italic leading-relaxed text-green-100">
            <p>{school.contact.address.full}</p>
            <p>
              Telepon:{" "}
              <a
                className="underline decoration-green-400 underline-offset-4 hover:text-white"
                href={`tel:${school.contact.phone.replace(/[^\d+]/g, "")}`}
              >
                {school.contact.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                className="underline decoration-green-400 underline-offset-4 hover:text-white"
                href={`mailto:${school.contact.email}`}
              >
                {school.contact.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="font-semibold">Media sosial</h2>
          <ul className="mt-3 flex flex-wrap gap-4 text-green-100">
            <li>
              <a
                href={school.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded underline decoration-green-400 underline-offset-4 hover:text-white"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={school.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded underline decoration-green-400 underline-offset-4 hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-green-800 px-6 py-4 text-center text-sm text-green-100">
        © 2026 {school.identity.nameFull}
      </p>
    </footer>
  );
}
