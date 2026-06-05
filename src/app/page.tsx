import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import PackageCard from "../components/ui/PackageCard";
import Footer from "../components/layout/Footer";
import { ALL_PACKAGES } from "../data/packages";
import StatsSection from "../components/sections/Stats";
import Reviews from "../components/sections/Reviews";
import Blogs from "../components/sections/Blogs";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Link from "next/link";

export default function Home() {
  const packages = ALL_PACKAGES.slice(0, 3);

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <section id="packages" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black text-slate-900">
              OUR EXCLUSIVE <span className="text-amber-600">PACKAGES</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-600 mt-4" />
          </div>

          <Link
            href="/packages"
            className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              pkg={pkg}
              index={index}
            />
          ))}
        </div>
      </section>

      <StatsSection />
      <Blogs/>
      <Reviews />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}