"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

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
    title: "3. Tawaf (The Seven Rounds)",
    desc: "Perform 7 rounds around the Kaaba starting from the Black Stone (Hajr-e-Aswad) in an anti-clockwise direction.",
    arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    eng: "In the name of Allah, Allah is the Greatest.",
    img: "/images/umrah/twaf.jpg"
  }
];

export default function UmrahPage() {
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
            <section className="relative h-[75vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <Image 
            src="/images/hero-banner.png" 
            alt="Umrah Journey" 
            fill 
            className="absolute inset-0 object-cover"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase"
          >
            <span style={{ color: blueColor }}>UMRAH</span> <span style={{ color: redColor }}>GUIDE</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-32 mx-auto my-6"
            style={{ backgroundColor: redColor }}
          />
          <p className="mt-4 text-xl md:text-2xl font-black uppercase tracking-[5px] opacity-80">
            Step-by-Step Spiritual Journey
          </p>
        </div>
      </section>
      <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto space-y-40">
        {umrahContent.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-24 items-center`}
          >
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[4px] opacity-30">Procedure Phase</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 border-l-[12px] pl-6 uppercase tracking-tighter" style={{ borderColor: redColor }}>
                  {item.title}
                </h2>
              </div>

              {item.arabic && (
                <div className="relative group">
                  <div className="absolute -inset-2 bg-slate-100 rounded-3xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                  <p className="relative text-4xl md:text-6xl font-serif text-right text-slate-800 leading-[1.6] py-4 pr-2 dir-rtl">
                    {item.arabic}
                  </p>
                </div>
              )}

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p className="text-xl font-bold text-slate-600 italic leading-relaxed">
                  <span style={{ color: blueColor }}>English:</span> "{item.eng}"
                </p>
                {item.urdu && (
                  <p className="text-lg text-slate-500 font-bold leading-relaxed">
                    <span style={{ color: redColor }}>اردو:</span> {item.urdu}
                  </p>
                )}
                {item.desc && (
                  <p className="text-lg text-slate-400 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border-l-4" style={{ borderColor: blueColor }}>
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-1 w-full relative">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="relative h-[500px] w-full rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
               >
                 <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    quality={100}
                    className="object-cover transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#3b599830] to-transparent" />
               </motion.div>
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
                  <p className="text-[10px] font-black uppercase tracking-[3px]" style={{ color: redColor }}>Ritual Step</p>
                  <p className="text-2xl font-black" style={{ color: blueColor }}>0{i + 1}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </section>
      <section className="py-32 bg-slate-50 text-center px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-8 uppercase" style={{ color: blueColor }}>
                Ready for Your <span style={{ color: redColor }}>Journey?</span>
              </h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
                Our guides and scholars are available 24/7 to ensure your Umrah is performed exactly according to the Sunnah.
              </p>
              <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black tracking-widest text-xs hover:bg-[#c1272d] transition-all duration-500 shadow-2xl uppercase">
                  Book Your Package Now
              </button>
          </motion.div>
      </section>

      <Footer />
    </main>
  );
}