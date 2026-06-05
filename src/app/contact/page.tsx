"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-44 pb-24 px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-8xl font-black tracking-tighter leading-none">GET IN <br/><span className="text-amber-600">TOUCH.</span></h1>
            <p className="text-xl text-gray-500 max-w-md leading-relaxed">Have questions about our packages or visa processing? Our team is here to help you 24/7.</p>
            
            <div className="space-y-6 pt-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all"><Phone size={24}/></div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Call Us</p><p className="text-xl font-bold">0302 6177555</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all"><Mail size={24}/></div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Email Us</p><p className="text-xl font-bold">info@nooralsamatours.com</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all"><MapPin size={24}/></div>
                <div><p className="text-xs font-bold text-gray-400 uppercase">Visit Us</p><p className="text-xl font-bold">Shimla Tower, Davis Road, Lahore</p></div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-amber-600 outline-none text-sm font-bold shadow-sm" />
                <input type="text" placeholder="Last Name" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-amber-600 outline-none text-sm font-bold shadow-sm" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-amber-600 outline-none text-sm font-bold shadow-sm" />
              <textarea rows={5} placeholder="How can we help you?" className="w-full p-5 rounded-2xl bg-white border-none focus:ring-2 focus:ring-amber-600 outline-none text-sm font-bold shadow-sm"></textarea>
              <button className="w-full bg-black text-white py-6 rounded-2xl font-black tracking-widest hover:bg-amber-600 transition-all">SEND MESSAGE</button>
            </form>
          </motion.div>

        </div>
      </div>
      <Footer />
    </main>
  );
}