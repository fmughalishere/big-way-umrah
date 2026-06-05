"use client"
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/hero-banner.png"
          alt="Hero Banner"
          fill
          priority
          quality={100}
          className="object-cover scale-105 transition-transform duration-1000 hover:scale-110 opacity-40 grayscale-[20%]"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/30 via-transparent to-white" />

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-20 text-center px-6 max-w-6xl pt-20"
      >
        <motion.div variants={itemVars}>
          <span className="text-[#3b5998] font-black tracking-[6px] text-[11px] uppercase mb-6 block">
            TRUSTED SINCE 1998 • PREMIUM SERVICES
          </span>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="text-6xl md:text-[120px] font-black leading-[0.8] tracking-tighter mb-8"
        >
          <span className="text-[#3b5998]">BIG WAY</span> <br />
          <span className="text-[#c1272d]">UMRAH.</span> 
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="text-gray-600 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          Experience a journey that transcends boundaries. Premium Umrah 2026
          packages tailored for your ultimate spiritual peace.
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link 
            href="/packages" 
            className="inline-block text-center bg-[#c1272d] text-white px-12 py-5 rounded-full font-black tracking-widest hover:bg-[#3b5998] transition-all duration-300 shadow-xl shadow-red-600/20 uppercase text-xs"
          >
            View Packages
          </Link>
          
          <Link 
            href="/b2b" 
            className="inline-block text-center bg-white text-[#3b5998] px-12 py-5 rounded-full font-black tracking-widest border-2 border-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-all duration-300 uppercase text-xs"
          >
            B2B Umrah
          </Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#c1272d] to-[#3b5998] opacity-30" />
    </section>
  );
}