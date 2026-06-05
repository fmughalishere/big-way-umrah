"use client"
import { motion } from 'framer-motion';

export default function B2BForm() {
  return (
    <section id="b2b-form" className="py-24 px-10 bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto bg-white/5 border border-white/10 p-16 rounded-[60px]"
      >
        <h2 className="text-5xl font-black tracking-tighter text-center mb-12 uppercase">Big Way Umrah <br/> <span className="text-amber-600">Agent Portal Form</span></h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Agency Name", "Owner Name", "Agency Email", "City", 
            "Agency Address", "Agency License No", "Agency Contact No", 
            "Years of Business Experience", "Name of Representative", 
            "Contact No of Representative", "Representative Email"
          ].map((field) => (
            <div key={field}>
              <label className="text-[10px] font-black uppercase tracking-[2px] ml-2 mb-2 block text-gray-500">{field}</label>
              <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-amber-600 transition" />
            </div>
          ))}
          
          <div className="md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-[2px] ml-2 mb-2 block text-gray-500">Services Required</label>
            <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-gray-400 outline-none">
              <option>Umrah Packages / Ticket Booking / Visa / Transport</option>
            </select>
          </div>

          <button className="md:col-span-2 bg-amber-600 text-white py-6 rounded-2xl font-black tracking-widest hover:bg-white hover:text-black transition-all mt-6 uppercase">
            Submit Your Request
          </button>
        </form>
      </motion.div>
    </section>
  );
}