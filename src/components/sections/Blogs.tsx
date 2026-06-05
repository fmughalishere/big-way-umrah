"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    title: "Virtues of Umrah in Ramadan",
    date: "June 2026",
    img: "/images/blogs/b1.jpg",
  },
  {
    title: "How to Prepare for Hajj 2026",
    date: "May 2026",
    img: "/images/blogs/b2.jpg",
  },
  {
    title: "Makkah to Madina Journey Guide",
    date: "April 2026",
    img: "/images/blogs/b3.jpg",
  },
  {
    title: "Essential Duas for Umrah",
    date: "March 2026",
    img: "/images/blogs/b4.jpg",
  },
  {
    title: "Best Time to Visit Madinah",
    date: "February 2026",
    img: "/images/blogs/b5.jpg",
  },
];

export default function Blogs({ showAll = false }) {
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <section id="blog" className="py-32 px-6 md:px-10 bg-slate-50">
      <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span style={{ color: redColor }} className="text-[10px] font-black uppercase tracking-[5px] ml-1 block">
              Spiritual Knowledge
            </span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              <span style={{ color: blueColor }}>SPIRITUAL</span> <br />
              <span style={{ color: redColor }}>INSIGHTS.</span>
            </h2>
            <div className="w-24 h-2 rounded-full mt-6" style={{ backgroundColor: blueColor }} />
          </motion.div>

          {!showAll && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/blogs"
                className="group flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black tracking-widest text-[10px] hover:bg-[#c1272d] transition-all duration-500 shadow-xl uppercase"
              >
                Read All Articles
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayedBlogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[40px] h-80 mb-8 shadow-lg relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="px-2">
                <p style={{ color: redColor }} className="font-black text-[10px] uppercase tracking-[3px] mb-3">
                  {blog.date}
                </p>

                <h4 className="text-2xl font-black leading-tight text-slate-800 group-hover:text-[#3b5998] transition-colors duration-300 uppercase tracking-tighter">
                  {blog.title}
                </h4>
                
                <div className="mt-6 flex items-center gap-2 text-slate-400 group-hover:text-[#c1272d] transition-colors font-bold text-[10px] uppercase tracking-widest">
                  Read Experience <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}