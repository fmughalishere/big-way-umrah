"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StatsSection() {
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <section className="relative py-40 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/images/office-splash.jpg"
          alt="Office"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black tracking-[5px] uppercase opacity-50 block mb-6">
              Our Agency Legacy
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
              WHO WE <br />
              <span style={{ color: redColor }}>ARE.</span>
            </h2>

            <p className="text-xl text-white/70 leading-loose max-w-lg mb-12 font-medium">
              To become one of the most trusted and leading Umrah travel
              companies in Pakistan and Saudi Arabia by delivering exceptional
              customer service, transparent dealings, and unforgettable spiritual experiences.
            </p>

            <Link href="/contact">
                <button 
                  className="group relative overflow-hidden bg-white text-black px-12 py-5 rounded-full font-black tracking-widest transition-all uppercase text-xs"
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = blueColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
                </button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {[
              { val: "3", label: "Global Locations" },
              { val: "45+", label: "Professional Staff" },
              { val: "150+", label: "Successful Groups" },
              { val: "15k", label: "Satisfied Pilgrims" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[50px] text-center group transition-all duration-500 hover:bg-white/10"
              >
                <p className="text-7xl font-black tracking-tighter transition-colors duration-500" style={{ color: redColor }}>
                  {stat.val}
                </p>
                <div className="w-10 h-1 mx-auto my-4 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: blueColor }} />
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/40 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1272d] to-transparent opacity-20" />
    </section>
  );
}