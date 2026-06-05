"use client"
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
  };

  const itemVars: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <Image
        src="/images/hero-banner.png"
        alt="Hero Banner"
        fill
        quality={100}
        className="absolute z-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
      >
      </Image>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-white" />
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-20 text-center px-6 max-w-6xl pt-20"
      >
        <motion.div variants={itemVars}>
          <span className="text-amber-600 font-black tracking-[6px] text-[11px] uppercase mb-6 block">
            TRUSTED SINCE 1998 • PREMIUM SERVICES
          </span>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="text-6xl md:text-[130px] font-black text-slate-900 leading-[0.8] tracking-tighter mb-8"
        >
          BIG WAY <br />
          <span className="text-amber-600">UMRAH.</span>
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="text-black-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          Experience a journey that transcends boundaries. Premium Umrah 2026
          packages tailored for your ultimate spiritual peace.
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-amber-600 text-white px-12 py-5 rounded-full font-black tracking-widest hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-amber-600/20">
            VIEW PACKAGES
          </button>
          <button className="bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-black tracking-widest border border-slate-200 hover:bg-white transition-all">
            B2B PORTAL
          </button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-20" />
    </section>
  );
}