"use client";

import { motion } from "framer-motion";
import { Hotel, Plane, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import img1 from "../../../public/images/packages/img1.jpg";
import img2 from "../../../public/images/packages/img2.jpg";
import img3 from "../../../public/images/packages/img3.jpg";
import img4 from "../../../public/images/packages/img4.jpg";
import img5 from "../../../public/images/packages/img5.jpg";

const packageImages = [img1, img2, img3, img4, img5];

const blueColor = "#3b5998";
const redColor = "#c1272d";

export default function PackageCard({
  pkg,
  index = 0,
}: {
  pkg: any;
  index?: number;
}) {
  const bgImage = packageImages[index % packageImages.length];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-[40px] bg-white shadow-2xl border border-gray-100 h-[500px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={pkg.title}
          fill
          priority={index < 3}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
        <span
          className="text-white w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
          style={{ backgroundColor: redColor }}
        >
          {pkg.airline} • {pkg.category}
        </span>
        <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-none">
          {pkg.title}
        </h3>
        <div className="space-y-2.5 mb-8 opacity-90 text-xs tracking-wider">
          <div className="flex items-center gap-2 font-black uppercase">
            <Hotel size={14} style={{ color: redColor }} />
            <span className="text-slate-300">Makkah:</span> {pkg.makkah}
          </div>

          <div className="flex items-center gap-2 font-black uppercase">
            <Hotel size={14} style={{ color: redColor }} />
            <span className="text-slate-300">Madina:</span> {pkg.madina}
          </div>

          <div className="flex items-center gap-2 font-black uppercase">
            <Clock size={14} style={{ color: redColor }} />
            <span className="text-slate-300">Duration:</span> {pkg.days} Days
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-white/10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: redColor }}>
              Starting Price
            </p>
            <p className="text-3xl font-black tracking-tighter mt-0.5">
              Rs {pkg.price.toLocaleString()}
            </p>
          </div>

          <Link
            href={`/contact?package=${pkg.title}`}
            className="bg-white text-slate-800 p-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg group-hover:text-white"
            style={{ border: `1px solid ${blueColor}10` }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = blueColor;
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#1e293b';
            }}
          >
            <Plane size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}