"use client"
import { motion } from 'framer-motion';
import { ALL_PACKAGES } from '../../data/packages';
import PackageCard from '../../components/ui/PackageCard';
import Navbar from '../../components/layout/Navbar';

export default function PackagesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-40 pb-20 px-10 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-7xl font-black tracking-tighter">ALL PACKAGES <span className="text-amber-600">2026</span></h2>
                    <p className="text-gray-500 mt-4 text-xl">Find the perfect plan for your spiritual journey.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">                       
                            {ALL_PACKAGES.map((pkg: any, index: any) => (
                            <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={pkg.id}
                        >
                                <PackageCard
                                    key={index}
                                    pkg={pkg}
                                    index={index}
                                />
                           </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}