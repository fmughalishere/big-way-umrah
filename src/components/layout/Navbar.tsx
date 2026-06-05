"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Hajj", href: "/hajj" },
    { name: "Umrah", href: "/umrah" },
    { name: "Blogs", href: "/blogs" },
    { name: "B2B Portal", href: "/b2b" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[999] border-b border-slate-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          <Link href="/" className="relative z-[1000]">
          <Image 
            src="/images/Logo.png" 
            alt="Big Way Umrah Logo" 
            width={130} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="font-black text-xs uppercase tracking-widest text-slate-600 hover:text-[#3b5998] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-8 py-3.5 text-white rounded-full font-black tracking-widest text-[10px] uppercase transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{ backgroundColor: redColor }}
          >
            Book Journey
          </Link>
        </div>
         <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-50 transition-colors relative z-[1000]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} style={{ color: redColor }} /> : <Menu size={28} style={{ color: blueColor }} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full bg-white shadow-2xl border-b border-slate-100 pt-28 pb-10 px-6 flex flex-col gap-6 md:hidden z-[998]"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-black text-lg uppercase tracking-wider text-slate-800 py-2 border-b border-slate-50 hover:text-[#3b5998]"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 text-white rounded-2xl font-black tracking-widest text-xs uppercase shadow-lg mt-4"
              style={{ backgroundColor: blueColor }}
            >
              Book Journey
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}