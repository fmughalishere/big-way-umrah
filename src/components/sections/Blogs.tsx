"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <section id="blog" className="py-32 px-10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl font-black tracking-tighter uppercase">
            Spiritual <span className="text-amber-600">Insights</span>
          </h2>

          {!showAll && (
            <Link
              href="/blogs"
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              See All
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayedBlogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[30px] h-72 mb-6">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <p className="text-amber-600 font-black text-xs tracking-widest mb-2">
                {blog.date}
              </p>

              <h4 className="text-2xl font-bold group-hover:text-amber-600 transition">
                {blog.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}