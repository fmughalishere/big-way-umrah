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
            
            <div className="pt-48 pb-32 px-6 md:px-10 max-w-[1440px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 space-y-4"
                >
                    <span className="text-[10px] font-black tracking-[5px] uppercase opacity-40 ml-1">Season 2026 Collection</span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                        <span style={{ color: blueColor }}>ALL UMRAH</span> <br />
                        <span style={{ color: redColor }}>PACKAGES.</span>
                    </h1>
                    <p className="text-slate-500 mt-6 text-xl max-w-2xl font-medium leading-relaxed">
                        Find the perfect spiritual plan. From budget-friendly savers to 5-star executive experiences, we have tailored everything for your comfort.
                    </p>
                    <div className="w-32 h-2 rounded-full mt-8" style={{ backgroundColor: redColor }} />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">                       
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
                    className="mt-32 p-16 rounded-[60px] text-center bg-slate-50 border border-slate-100 shadow-sm"
                >
                    <h3 className="text-4xl font-black tracking-tight mb-6 uppercase" style={{ color: blueColor }}>
                        Need a Customized <span style={{ color: redColor }}>Package?</span>
                    </h3>
                    <p className="text-slate-500 mb-10 text-lg font-medium">If our standard deals don't fit your needs, we can create a bespoke itinerary for you.</p>
                    <Link href="/contact" className="bg-[#3b5998] text-white px-12 py-6 rounded-2xl font-black tracking-widest text-xs hover:bg-[#c1272d] transition-all duration-500 shadow-2xl uppercase">
                        Get a Custom Quote
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}