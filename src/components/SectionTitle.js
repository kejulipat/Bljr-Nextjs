export default function SectionTitle({ judul, id }) {
  return (
    <div className="space-y-3">
      <h2 id={id} className="font-heading text-2xl font-bold text-navy sm:text-3xl">
        {judul}
      </h2>
      <div className="relative h-1 bg-line" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-40 bg-accent" />
      </div>
    </div>
  );
}
