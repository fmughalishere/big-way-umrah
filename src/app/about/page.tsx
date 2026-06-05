"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-white">
            <Navbar />
            <section className="pt-44 pb-24 px-10 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <div className="relative h-[450px] w-full overflow-hidden rounded-[40px] shadow-2xl">
                            <Image
                                src="/images/about.jpg"
                                alt="About Big Way Travel"
                                fill
                                quality={100}
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="flex-1 space-y-8">
                        <h2 className="text-7xl font-black tracking-tighter leading-none uppercase">25 Years of <br /><span className="text-amber-600">Excellence.</span></h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">Big Way Travel & Tours has been a leader in spiritual tourism since 1998. We don't just provide tickets; we curate a life-changing experience for Allah's guests.</p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div><p className="text-5xl font-black text-black">15k+</p><p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">Happy Pilgrims</p></div>
                            <div><p className="text-5xl font-black text-black">500+</p><p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">Partner Agents</p></div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}