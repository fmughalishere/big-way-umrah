"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';

export default function B2BPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-44 flex flex-col items-center px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-3xl"
        >
          <span className="text-amber-600 font-black tracking-[4px] text-xs uppercase">Partner with us</span>
          <h1 className="text-7xl font-black tracking-tighter mt-4 mb-8 leading-none">AGENT PORTAL <br/>REGISTRATION</h1>
          <p className="text-gray-500 text-xl leading-relaxed">Join our network of 500+ successful agents across Pakistan. Get exclusive B2B rates and dedicated support.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-20 w-full max-w-4xl bg-black rounded-[50px] p-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-white/50 text-[10px] font-black tracking-widest ml-2 uppercase">Agency Name</label>
              <input className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-amber-600" />
            </div>
            <div className="space-y-2">
              <label className="text-white/50 text-[10px] font-black tracking-widest ml-2 uppercase">Owner Name</label>
              <input className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-amber-600" />
            </div>
            <div className="space-y-2">
              <label className="text-white/50 text-[10px] font-black tracking-widest ml-2 uppercase">Business City</label>
              <input className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-amber-600" />
            </div>
            <div className="space-y-2">
              <label className="text-white/50 text-[10px] font-black tracking-widest ml-2 uppercase">WhatsApp Number</label>
              <input className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-amber-600" />
            </div>
            <button className="md:col-span-2 mt-6 bg-amber-600 text-white py-6 rounded-2xl font-black tracking-[3px] hover:bg-white hover:text-black transition-all">SUBMIT APPLICATION</button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}