import { getFinalPackages } from "../../data/packages";
import PackageCard from "../ui/PackageCard";
import SectionHeader from "../ui/SectionHeader";

export default function Packages() {
  const packages = getFinalPackages();

  return (
    <section id="packages" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Exclusive Umrah Packages" 
          subtitle="Explore our carefully curated plans with +10,000 margin included. Choose the one that fits your budget and spiritual needs." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm">
            * All prices include visa processing, insurance, and transport services.
          </p>
        </div>
      </div>
    </section>
  );
}