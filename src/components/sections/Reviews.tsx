"use client"
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaPlay } from 'react-icons/fa';

const reviews = [
  { 
    name: "Amjad Ali", 
    text: "Highly recommended with Big Way Travel. Highly professional and experienced team that guided us at every step.", 
  },
  { 
    name: "Jameel Ahmed", 
    text: "The best experience I've had. The hotels were very close to the Haram and the staff was extremely helpful.", 
  },
  { 
    name: "Dr. Saima Chaudhary", 
    text: "Very nice view from hotel. Highly professional and experienced team. Truly a spiritual journey.", 
  }
];

export default function Reviews() {
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <section className="py-32 bg-white px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
                <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            <span style={{ color: blueColor }}>OUR CLIENTS</span> <br />
            <span style={{ color: redColor }}>REVIEWS.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Thousands of pilgrims have experienced their spiritual journey with us. 
            Here is what they have to say about our professional services.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[50px] shadow-2xl transition-all duration-500 flex flex-col items-center group overflow-hidden h-full"
              style={{ backgroundColor: blueColor }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[80px] rounded-full" />
              <div className="mb-8" style={{ color: redColor }}>
                <FaQuoteLeft size={40} className="opacity-80" />
              </div>
              <p className="text-white text-lg font-medium leading-relaxed mb-10 italic opacity-90">
                "{review.text}"
              </p>
              <div className="mt-auto space-y-4">
                <h4 className="text-white font-black uppercase tracking-widest text-sm">
                   {review.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}