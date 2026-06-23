"use client"
import { motion } from 'framer-motion';
import { Scissors, Shirt, Trees } from 'lucide-react';
import { GiRazor } from "react-icons/gi";
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const arkan = [
  { title: "Day 1: Mina",       date: "8th Dhul Hijjah",    desc: "Setting the intention and staying in Mina tents." },
  { title: "Day 2: Arafat",     date: "9th Dhul Hijjah",    desc: "The most important day. Praying at the plains of Arafat." },
  { title: "Night: Muzdalifah", date: "9th Dhul Hijjah",    desc: "Collecting pebbles and spending the night under the open sky." },
  { title: "Day 3-5: Jamarat",  date: "10th-12th Dhul Hijjah", desc: "Stoning the pillars, Sacrifice, and Halq." }
];

export default function HajjPage() {
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-36 sm:pt-44 md:pt-52 lg:pt-56 pb-16 md:pb-24 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070')] bg-cover bg-center" />
        <div className="relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white"
          >
            ARKAN-E-<span style={{ color: redColor }}>HAJJ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-6 text-base sm:text-xl md:text-2xl font-black uppercase tracking-[3px] md:tracking-[5px]"
            style={{ color: blueColor }}
          >
            The Pillars of Your Pilgrimage
          </motion.p>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {arkan.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-7 md:p-10 rounded-[30px] md:rounded-[50px] bg-slate-50 border border-slate-100 transition-all duration-500 text-center shadow-sm hover:shadow-2xl group"
            >
              <span className="text-[10px] font-black uppercase tracking-[3px] opacity-30 group-hover:opacity-100 transition-opacity">
                {step.date}
              </span>
              <h3 className="text-2xl md:text-3xl font-black mt-3 md:mt-4 mb-4 md:mb-6 uppercase leading-tight group-hover:text-[#3b5998] transition-colors">
                {step.title}
              </h3>
              <div className="w-10 h-1 mx-auto mb-4 md:mb-6 rounded-full" style={{ backgroundColor: redColor }} />
              <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-800 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 blur-[120px] opacity-10 rounded-full" style={{ backgroundColor: blueColor }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 blur-[120px] opacity-10 rounded-full" style={{ backgroundColor: redColor }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-12 md:mb-20">
              Prohibitions of <span style={{ color: redColor }}>Ihram</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Scissors size={28} />, label: "No Hair Cutting" },
              { icon: <Shirt size={28} />,    label: "No Stitched Clothes" },
              { icon: <GiRazor size={28} />,  label: "No Shaving" },
              { icon: <Trees size={28} />,    label: "No Killing Plants" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="space-y-4 md:space-y-6"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto flex items-center justify-center border-2 shadow-2xl transition-transform"
                  style={{ color: redColor, borderColor: `${redColor}40`, backgroundColor: `${redColor}10` }}
                >
                  {item.icon}
                </div>
                <p className="font-black text-[9px] sm:text-[10px] uppercase tracking-[2px] md:tracking-[3px] opacity-70">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 md:mb-8" style={{ color: blueColor }}>
          Ready for Hajj <span style={{ color: redColor }}>2027?</span>
        </h3>
        <button
          className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-2xl text-white font-black tracking-widest text-xs hover:bg-[#3b5998] transition-all shadow-xl uppercase"
          style={{ backgroundColor: redColor }}
        >
          Register Your Interest
        </button>
      </section>

      <Footer />
    </main>
  );
}
