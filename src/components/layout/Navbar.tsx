"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[999] h-24 flex items-center bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-10 w-full flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/images/Logo.png" 
            alt="Logo" 
            width={180} 
            height={70} 
            className="h-16 w-auto object-contain" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 font-black text-[11px] tracking-[3px] text-slate-900">
          {['HOME', 'ABOUT', 'PACKAGES', 'HAJJ', 'UMRAH', 'BLOGS', 'B2B PORTAL'].map((item) => (
            <Link 
              key={item} 
              href={`/${item === 'HOME' ? '' : item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-amber-600 transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all shadow-lg text-[10px]">
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}