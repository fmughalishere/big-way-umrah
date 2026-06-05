"use client"
import { motion } from 'framer-motion';

const reviews = [
  { name: "Ali Raza", text: "Excellent services, very near to Haram hotels. Highly recommended for families." },
  { name: "Sajid Khan", text: "The B2B portal is very fast. I've booked 10+ packages this year. Great support!" },
  { name: "Omar Farooq", text: "Truly a spiritual journey with full guidance. Big Way is the best." }
];

export default function Reviews() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10">
        <h2 className="text-6xl font-black tracking-tighter mb-16 uppercase">PILGRIM <span className="text-amber-600">REVIEWS.</span></h2>
        
        <div className="flex gap-10 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-10"
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="min-w-[400px] bg-slate-50 p-12 rounded-[50px] border border-slate-100">
                <p className="text-xl font-medium text-gray-700 italic mb-8">"{review.text}"</p>
                <div className="flex items-center gap-4 font-black tracking-widest text-xs uppercase">
                  <div className="w-10 h-1 bg-amber-600" /> {review.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}