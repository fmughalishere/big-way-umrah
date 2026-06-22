"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
    const blueColor = "#3b5998";
    const redColor = "#c1272d";

    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <section className="pt-52 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative h-[500px] w-full overflow-hidden rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                            <Image
                                src="/images/about.jpg"
                                alt="About Big Way Travel"
                                fill
                                className="object-cover object-center transition-all duration-1000 scale-105 group-hover:scale-100"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3b599820] to-transparent" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-[4px] uppercase opacity-40 ml-1">The Big Way Legacy</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                                <span style={{ color: blueColor }}>25 Years of</span> <br />
                                <span style={{ color: redColor }}>Excellence.</span>
                            </h2>
                        </div>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
                            Big Way Travel & Tours has been a leader in spiritual tourism since 1998. We don't just provide tickets; we curate a <span style={{ color: blueColor }} className="font-bold underline decoration-[#c1272d] underline-offset-4">life-changing experience</span> for Allah's guests.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-6 border-t border-slate-100">
                            <motion.div whileHover={{ y: -5 }}>
                                <p className="text-6xl font-black tracking-tighter" style={{ color: blueColor }}>15k+</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="w-8 h-[2px]" style={{ backgroundColor: redColor }} />
                                    <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[2px]">Happy Pilgrims</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }}>
                                <p className="text-6xl font-black tracking-tighter" style={{ color: blueColor }}>500+</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="w-8 h-[2px]" style={{ backgroundColor: redColor }} />
                                    <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[2px]">Partner Agents</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="pt-4">
                            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#c1272d] transition-all duration-500 shadow-xl uppercase">
                                Learn More About Our Mission
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}