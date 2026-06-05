"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const umrahContent = [
  {
    title: "1. Niyyah (The Intention)",
    arabic: "اللَّهُمَّ إِنِّي أُرِيدُ العُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي",
    eng: "O Allah, I intend to perform Umrah. Make it easy for me and accept it from me.",
    urdu: "اے اللہ، میں عمرہ کی نیت کرتا ہوں۔ اسے میرے لیے آسان فرما اور اسے قبول فرما۔",
    img: "/images/umrah/niyyah.jpg"
  },
  {
    title: "2. The Talbiyah",
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
    eng: "Labbayk Allahumma Labbayk. Labbayk la sharika laka Labbayk.",
    urdu: "حاضر ہوں اے اللہ میں حاضر ہوں۔ تیرا کوئی شریک نہیں، میں حاضر ہوں۔",
    img: "/images/umrah/talbiyah.jpg"
  },
  {
    title: "3. Tawaf (Circumambulating the Kaaba)",
    desc: "Perform 7 rounds around the Kaaba starting from the Black Stone (Hajr-e-Aswad).",
    arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    eng: "In the name of Allah, Allah is the Greatest.",
    img: "/images/umrah/twaf.jpg"
  }
];

export default function UmrahPage() {
  return (
    <main className="bg-white">
      <Navbar />
            <section className="relative h-[70vh] flex items-center justify-center bg-black text-white">
        <img src="/images/umrah-hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl font-black tracking-tighter uppercase italic">Umrah Guide</h1>
          <p className="mt-4 text-xl font-bold text-amber-500">Step-by-Step Spiritual Journey</p>
        </div>
      </section>
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-32">
        {umrahContent.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black text-slate-900 border-l-8 border-amber-600 pl-6 uppercase">{item.title}</h2>
              {item.arabic && <p className="text-4xl md:text-5xl font-serif text-right text-slate-800 leading-relaxed bg-slate-50 p-8 rounded-3xl">{item.arabic}</p>}
              <p className="text-xl font-bold text-slate-600 italic">"{item.eng}"</p>
              {item.urdu && <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.urdu}</p>}
              {item.desc && <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>}
            </div>
            <div className="flex-1 w-full">
              <img src={item.img} className="rounded-[50px] shadow-2xl h-[400px] w-full object-cover grayscale hover:grayscale-0 transition duration-700" alt="Ritual" />
            </div>
          </motion.div>
        ))}
      </section>
      <Footer />
    </main>
  );
}