"use client"
import { motion } from 'framer-motion';
import { ALL_PACKAGES } from '../../data/packages';
import PackageCard from '../../components/ui/PackageCard';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';

export default function PackagesPage() {
    const blueColor = "#3b5998";
    const redColor = "#c1272d";

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-20 lg:mb-24 space-y-3 md:space-y-4"
                >
                    <span className="text-[10px] font-black tracking-[5px] uppercase opacity-40 ml-1">Season 2026 Collection</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none uppercase">
                        <span style={{ color: blueColor }}>ALL UMRAH</span> <br />
                        <span style={{ color: redColor }}>PACKAGES.</span>
                    </h1>
                    <p className="text-slate-500 mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        Find the perfect spiritual plan. From budget-friendly savers to 5-star executive experiences, we have tailored everything for your comfort.
                    </p>
                    <div className="w-24 md:w-32 h-[6px] md:h-2 rounded-full mt-6 md:mt-8" style={{ backgroundColor: redColor }} />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {ALL_PACKAGES.map((pkg: any, index: number) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/contact" className="block transition-transform duration-500 hover:scale-[1.02]">
                                <PackageCard
                                    pkg={pkg}
                                    index={index}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-32 p-8 sm:p-10 md:p-16 rounded-[30px] sm:rounded-[40px] lg:rounded-[60px] text-center bg-slate-50 border border-slate-100 shadow-sm"
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 md:mb-6 uppercase" style={{ color: blueColor }}>
                        Need a Customized <span style={{ color: redColor }}>Package?</span>
                    </h3>
                    <p className="text-slate-500 mb-7 md:mb-10 text-base md:text-lg font-medium">
                        If our standard deals don't fit your needs, we can create a bespoke itinerary for you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#3b5998] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black tracking-widest text-xs hover:bg-[#c1272d] transition-all duration-500 shadow-2xl uppercase"
                    >
                        Get a Custom Quote
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
