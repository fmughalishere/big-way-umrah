export default function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter">{title}</h2>
      <div className="w-20 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
      <p className="mt-4 text-gray-500 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}