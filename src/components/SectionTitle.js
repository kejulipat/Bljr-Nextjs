export default function SectionTitle({ judul, id }) {
  return (
    <div className="space-y-3">
      <h2 id={id} className="text-2xl font-bold text-green-950 sm:text-3xl">
        {judul}
      </h2>
      <div className="h-1 w-16 rounded-full bg-green-600" aria-hidden="true" />
    </div>
  );
}
