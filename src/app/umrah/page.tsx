"use client"
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

const umrahContent = [
  {
    title: "1. Niyyah (The Intention)",
    arabic: "اللَّهُمَّ إِنِّي أُرِيدُ العُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي",
    eng: "O Allah, I intend to perform Umrah. Make it easy for me and accept it from me.",
    urdu: "اے اللہ، میں عمرہ کی نیت کرتا ہوں۔ اسے میرے لیے آسان فرما اور اسے قبول فرما۔",
    desc: "Before entering the state of Ihram, make a sincere intention (Niyyah) in your heart to perform Umrah solely for the pleasure of Allah. The intention must be made at or before the Meeqat.",
    img: "/images/umrah/niyyah.jpg"
  },
  {
    title: "2. Ihram (The Sacred State)",
    arabic: "نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى",
    eng: "I intend to perform Umrah and have entered Ihram for the sake of Allah the Most High.",
    urdu: "میں نے عمرہ کی نیت کی اور اللہ تعالیٰ کے لیے احرام باندھا۔",
    desc: "Men wear two unstitched white sheets — one around the waist (izar) and one over the shoulders (rida). Women wear their regular modest clothing covering the entire body except face and hands. After Ghusl (ritual bath), wear Ihram garments and pray 2 Rakat Salah before crossing the Meeqat.",
    img: "/images/umrah/ihram.jpg"
  },
  {
    title: "3. The Talbiyah",
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ",
    eng: "Here I am O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner.",
    urdu: "حاضر ہوں اے اللہ میں حاضر ہوں۔ تیرا کوئی شریک نہیں، میں حاضر ہوں۔ بے شک تمام تعریفیں، نعمتیں اور بادشاہی تیری ہے۔ تیرا کوئی شریک نہیں۔",
    desc: "Recite the Talbiyah loudly and continuously from the moment you enter Ihram until you reach the Kaaba for Tawaf. Men recite aloud; women recite softly. Stop reciting Talbiyah when you begin Tawaf.",
    img: "/images/umrah/talbiyah.jpg"
  },
  {
    title: "4. Tawaf (The Seven Rounds)",
    arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اَللَّهُمَّ إِيمَاناً بِكَ وَتَصْدِيقاً بِكِتَابِكَ وَوَفَاءً بِعَهْدِكَ وَاتِّبَاعاً لِسُنَّةِ نَبِيِّكَ",
    eng: "In the name of Allah, Allah is the Greatest. O Allah, out of faith in You, belief in Your Book, in fulfilment of Your covenant and in emulation of the Sunnah of Your Prophet.",
    urdu: "اللہ کے نام سے شروع، اللہ سب سے بڑا ہے۔ اے اللہ تجھ پر ایمان کے ساتھ، تیری کتاب کی تصدیق کرتے ہوئے، تیرے عہد کو پورا کرتے ہوئے اور تیرے نبی کی سنت کی پیروی کرتے ہوئے۔",
    desc: "Perform 7 rounds around the Kaaba in an anti-clockwise direction, starting and ending at the Black Stone (Hajr-e-Aswad). Men perform Idtiba (right shoulder exposed) and Raml (brisk walk) in the first 3 rounds. Kiss or point to the Hajr-e-Aswad at the start of each round. Upon completing all 7 rounds, offer 2 Rakat Nafl behind Maqam-e-Ibrahim if possible.",
    img: "/images/umrah/twaf.jpg"
  },
  {
    title: "5. Sa'i — Safa to Marwa",
    arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ",
    eng: "Indeed, Safa and Marwa are among the symbols of Allah.",
    urdu: "بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔",
    desc: "After Tawaf and 2 Rakat prayer, proceed to Mount Safa to begin Sa'i. Walk 7 times between Safa and Marwa — Safa to Marwa counts as one round, Marwa back to Safa is the second, and so on until the 7th round ends at Marwa. Men walk briskly (Raml) between the green lights. Upon reaching Safa, face the Kaaba, raise your hands and make dua. This ritual commemorates Hajar (AS) searching for water for her son Ismail (AS).",
    img: "/images/umrah/safa-marwa.jpg",
    steps: [
      "Climb Safa, face Kaaba, recite the verse and make dua",
      "Walk toward Marwa — men jog between the green fluorescent lights",
      "Climb Marwa, face Kaaba, raise hands and make dua",
      "Return to Safa (Round 2 complete) — continue until 7th round ends at Marwa"
    ]
  },
  {
    title: "6. Halq or Taqsir (Hair Cutting)",
    arabic: "مُحَلِّقِينَ رُءُوسَكُمْ وَمُقَصِّرِينَ",
    eng: "With your heads shaved or your hair shortened.",
    urdu: "اپنے سروں کو مونڈواتے یا بالوں کو کٹواتے ہوئے۔",
    desc: "After completing Sa'i, men should shave the entire head (Halq) which is more virtuous, or cut hair from all parts of the head (Taqsir). Women cut a finger-tip length from their hair — they do NOT shave. After this step, the state of Ihram ends and all restrictions are lifted. Your Umrah is complete — Alhamdulillah!",
    img: "/images/umrah/halq.jpg"
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
            Complete Arkan-e-Umrah — Step by Step
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
                <span className="text-[10px] font-black uppercase tracking-[4px] opacity-30">Arkan-e-Umrah — Phase {i + 1}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 border-l-[12px] pl-6 uppercase tracking-tighter" style={{ borderColor: redColor }}>
                  {item.title}
                </h2>
              </div>

              {item.arabic && (
                <div className="relative group">
                  <div className="absolute -inset-2 bg-slate-100 rounded-3xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                  <p className="relative text-3xl md:text-5xl font-serif text-right text-slate-800 leading-[1.8] py-4 pr-2 dir-rtl">
                    {item.arabic}
                  </p>
                </div>
              )}

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p className="text-xl font-bold text-slate-600 italic leading-relaxed">
                  <span style={{ color: blueColor }}>English:</span> "{item.eng}"
                </p>
                {item.urdu && (
                  <p className="text-lg text-slate-500 font-bold leading-relaxed text-right dir-rtl">
                    <span style={{ color: redColor }}>اردو:</span> {item.urdu}
                  </p>
                )}
                {item.desc && (
                  <p className="text-lg text-slate-400 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border-l-4" style={{ borderColor: blueColor }}>
                    {item.desc}
                  </p>
                )}

                {/* Sa'i steps list */}
                {item.steps && (
                  <div className="mt-4 space-y-3">
                    {item.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-4">
                        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black mt-0.5" style={{ backgroundColor: redColor }}>
                          {sIdx + 1}
                        </span>
                        <p className="text-base text-slate-500 font-medium leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
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
