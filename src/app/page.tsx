"use client"
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
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const packages = ALL_PACKAGES.slice(0, 3);

  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <section id="packages" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 lg:mb-20 gap-6"
        >
          <div className="space-y-3 md:space-y-4">
            <span className="text-[10px] font-black tracking-[4px] uppercase opacity-40 ml-1">Handpicked for you</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase">
              <span style={{ color: blueColor }}>OUR EXCLUSIVE</span> <br />
              <span style={{ color: redColor }}>PACKAGES.</span>
            </h2>
            <div className="w-20 md:w-24 h-2 rounded-full" style={{ backgroundColor: redColor }} />
          </div>

          <Link
            href="/packages"
            className="group flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start px-8 md:px-10 py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#c1272d] transition-all duration-500 shadow-xl uppercase"
          >
            See All Packages
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PackageCard pkg={pkg} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      <StatsSection />
      <WhyChooseUs />
      <Blogs />
      <Reviews />
      <Footer />
    </main>
  );
}
