"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { blogs, Blog } from "../data/blogData";

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  const otherBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-32 left-6 md:left-10 z-10">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-white/70 hover:text-white transition font-black text-[10px] uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-16 max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span
                className="px-4 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-[3px]"
                style={{ backgroundColor: redColor }}
              >
                {blog.tag}
              </span>
              <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                <Clock size={12} /> {blog.readTime}
              </div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {blog.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase text-white">
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </section>
      <article className="max-w-[860px] mx-auto px-6 md:px-10 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-16 border-l-4 pl-8"
          style={{ borderColor: redColor }}
        >
          {blog.content.intro}
        </motion.p>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] flex-1 bg-slate-100" />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: redColor }} />
          <div className="h-[2px] flex-1 bg-slate-100" />
        </div>
        <div className="space-y-16">
          {blog.content.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <h2
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6"
                style={{ color: blueColor }}
              >
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.body.split("\n").map((line, lIdx) => {
                  if (!line.trim()) return null;

                  const isArabic = /[\u0600-\u06FF]/.test(line);
                  if (isArabic) {
                    return (
                      <p
                        key={lIdx}
                        className="text-2xl md:text-3xl font-serif text-slate-800 leading-[2] text-right"
                        dir="rtl"
                      >
                        {line}
                      </p>
                    );
                  }

                  if (
                    line.startsWith("Transliteration:") ||
                    line.startsWith("Meaning:") ||
                    line.startsWith("Urdu:")
                  ) {
                    const colonIdx = line.indexOf(":");
                    const label = line.substring(0, colonIdx);
                    const rest = line.substring(colonIdx + 1);
                    return (
                      <p key={lIdx} className="text-base text-slate-500 font-bold leading-relaxed">
                        <span style={{ color: redColor }}>{label}: </span>
                        <span className="italic font-medium">{rest}</span>
                      </p>
                    );
                  }

                  return (
                    <p key={lIdx} className="text-lg text-slate-500 font-medium leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>

              {idx < blog.content.sections.length - 1 && (
                <div className="mt-12 h-px bg-slate-100" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[40px] border-2"
          style={{ borderColor: `${blueColor}20`, backgroundColor: `${blueColor}05` }}
        >
          <p
            className="text-[10px] font-black uppercase tracking-[4px] mb-4"
            style={{ color: redColor }}
          >
            Final Thoughts
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {blog.content.conclusion}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-block text-white px-12 py-5 rounded-2xl font-black tracking-widest text-xs uppercase shadow-xl hover:opacity-90 transition-all"
            style={{ backgroundColor: redColor }}
          >
            Book Your Umrah Package
          </Link>
        </motion.div>
      </article>
      <section className="bg-slate-50 py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="text-4xl font-black tracking-tighter uppercase mb-14"
            style={{ color: blueColor }}
          >
            More <span style={{ color: redColor }}>Articles</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {otherBlogs.map((b, idx) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/blogs/${b.slug}`}>
                  <div className="overflow-hidden rounded-[30px] h-52 mb-5 shadow relative">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-[2px]"
                      style={{ backgroundColor: redColor }}
                    >
                      {b.tag}
                    </span>
                  </div>
                  <p
                    style={{ color: redColor }}
                    className="text-[10px] font-black uppercase tracking-[3px] mb-2"
                  >
                    {b.date} · {b.readTime}
                  </p>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-800 group-hover:text-[#3b5998] transition-colors">
                    {b.title}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
