"use client";

import { motion } from "framer-motion";
import { Hotel, Plane, Clock } from "lucide-react";
import Image from "next/image";

import img1 from "../../../public/images/packages/img1.jpg";
import img2 from "../../../public/images/packages/img2.jpg";
import img3 from "../../../public/images/packages/img3.jpg";
import img4 from "../../../public/images/packages/img4.jpg";
import img5 from "../../../public/images/packages/img5.jpg";

const packageImages = [img1, img2, img3, img4, img5];

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

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
        <span className="bg-amber-600 text-white w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          {pkg.airline} • {pkg.category}
        </span>

        <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">
          {pkg.title}
        </h3>

        <div className="space-y-2 mb-8 opacity-80 text-sm">
          <div className="flex items-center gap-2 font-bold uppercase">
            <Hotel size={16} />
            Makkah: {pkg.makkah}
          </div>

          <div className="flex items-center gap-2 font-bold uppercase">
            <Hotel size={16} />
            Madina: {pkg.madina}
          </div>

          <div className="flex items-center gap-2 font-bold uppercase">
            <Clock size={16} />
            Duration: {pkg.days} Days
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-white/20">
          <div>
            <p className="text-[10px] font-bold uppercase text-amber-500 tracking-widest">
              Starting Price
            </p>

            <p className="text-3xl font-black tracking-tighter">
              Rs {pkg.price.toLocaleString()}
            </p>
          </div>

          <button className="bg-white text-black p-4 rounded-full hover:bg-amber-600 hover:text-white transition-all">
            <Plane size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}