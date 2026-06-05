"use client"
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="w-full mx-auto bg-white p-12 md:p-20 text-black shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
           <div className="space-y-8">
            <Image src="/images/Logo.png" alt="Logo" width={180} height={80} className="brightness-200 h-24 w-auto" />
            <div className="flex gap-6">
              <FaFacebook className="hover:text-amber-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-amber-500 cursor-pointer transition" />
              <FaYoutube className="hover:text-amber-500 cursor-pointer transition" />
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Mail size={16} /> info@bigwayumrah.com
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-white/20 pb-2">Pakistan Address</h4>
            <p className="text-sm opacity-80 leading-relaxed">101-Tipu Block Shakir Ali Museum Lane Garden Town Lahore Pakistan</p>
            <p className="font-bold text-amber-500">+92 317 317 6483</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-white/20 pb-2">UAE Address</h4>
            <p className="text-sm opacity-80 leading-relaxed">Office No 314, 3rd Floor, Dar Al Wuheida Building - Al Doha St - Hor Al Anz East - Dubai - United Arab Emirates</p>
            <p className="font-bold text-amber-500">+971 54 583 4874</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-white/20 pb-2">Saudi Arab Address</h4>
            <p className="text-sm opacity-80 leading-relaxed">1st floor, 17 number Flat, Building # 3319 Muhammad ibn Abd al Aziz Madi road, 7173 Al Qurtubah Area Riyadh</p>
            <p className="font-bold text-amber-500">+966 56 311 4674</p>
          </div>
        </div>
      </div>
    </footer>
  );
}