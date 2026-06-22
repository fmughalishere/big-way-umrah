"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { blogs } from "../../data/blogData";

export default function Blogs({ showAll = false }: { showAll?: boolean }) {
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
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="overflow-hidden rounded-[40px] h-64 mb-6 shadow-lg relative shrink-0">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-[2px]"
                    style={{ backgroundColor: redColor }}
                  >
                    {blog.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>

              {/* Content */}
              <div className="px-2 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p style={{ color: redColor }} className="font-black text-[10px] uppercase tracking-[3px]">
                    {blog.date}
                  </p>
                  <span className="text-slate-300 text-xs">•</span>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                    {blog.readTime}
                  </p>
                </div>

                <h4 className="text-2xl font-black leading-tight text-slate-800 group-hover:text-[#3b5998] transition-colors duration-300 uppercase tracking-tighter mb-4">
                  {blog.title}
                </h4>

                <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-6 flex items-center gap-2 text-slate-400 group-hover:text-[#c1272d] transition-colors font-bold text-[10px] uppercase tracking-widest w-fit"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
