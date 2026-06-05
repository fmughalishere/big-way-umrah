"use client"
import { motion } from 'framer-motion';
import { Scissors, Shirt, Trees } from 'lucide-react';
import { GiRazor } from "react-icons/gi";
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const arkan = [
  { title: "Day 1: Mina", date: "8th Dhul Hijjah", desc: "Setting the intention and staying in Mina tents." },
  { title: "Day 2: Arafat", date: "9th Dhul Hijjah", desc: "The most important day. Praying at the plains of Arafat." },
  { title: "Night: Muzdalifah", date: "9th Dhul Hijjah", desc: "Collecting pebbles and spending the night under the open sky." },
  { title: "Day 3-5: Jamarat", date: "10th-12th Dhul Hijjah", desc: "Stoning the pillars, Sacrifice, and Halq." }
];

export default function HajjPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Intro Header */}
      <section className="pt-48 pb-20 px-10 text-center bg-slate-950 text-white">
        <motion.h1 initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-8xl font-black tracking-tighter uppercase italic">ARKAN-E-HAJJ</motion.h1>
        <p className="mt-6 text-2xl text-amber-500 font-bold uppercase tracking-widest">The Pillars of Your Pilgrimage</p>
      </section>

      {/* Ritual Timeline */}
      <section className="py-32 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {arkan.map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[60px] bg-slate-50 border border-slate-100 hover:bg-amber-600 hover:text-white transition-all duration-500 text-center"
          >
            <span className="text-xs font-black uppercase tracking-[3px] opacity-50">{step.date}</span>
            <h3 className="text-3xl font-black mt-4 mb-6 uppercase leading-tight">{step.title}</h3>
            <p className="text-sm font-medium opacity-80">{step.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Prohibitions (Ma'zoorat al-Ihram) */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-20">Prohibitions of <span className="text-amber-500">Ihram</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Scissors />, label: "No Hair Cutting" },
              { icon: <Shirt />, label: "No Stitched Clothes (Men)" },
              { icon: <GiRazor />, label: "No Shaving" },
              { icon: <Trees />, label: "No Killing Plants/Animals" }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto flex items-center justify-center text-amber-500 border border-white/10">
                  {item.icon}
                </div>
                <p className="font-bold text-xs uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}