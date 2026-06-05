"use client"
import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="relative py-40 overflow-hidden bg-black text-white">
            <div className="absolute inset-0">
        <img
          src="/images/office-splash.jpg"
          alt="Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-7xl font-black tracking-tighter leading-none mb-10">
              WHO WE <br />
              <span className="text-amber-600">ARE.</span>
            </h2>

            <p className="text-xl text-white/60 leading-loose max-w-lg mb-12">
              To become one of the most trusted and leading Umrah travel
              companies in Pakistan and Saudi Arabia by delivering exceptional
              customer service.
            </p>

            <button className="bg-white text-black px-12 py-5 rounded-full font-black tracking-widest hover:bg-amber-600 hover:text-white transition-all uppercase">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {[
              { val: "3", label: "Locations" },
              { val: "45", label: "Team Members" },
              { val: "150", label: "Umrah Trips" },
              { val: "144", label: "Satisfied Clients" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] text-center"
              >
                <p className="text-6xl font-black text-amber-500">
                  {stat.val}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[3px] mt-4 text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}