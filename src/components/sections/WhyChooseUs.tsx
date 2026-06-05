import { ShieldCheck, Headphones, BadgePercent, MapPin } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-yellow-500" />,
    title: "Authorized Agent",
    desc: "We are a fully licensed travel agency recognized by the Ministry of Hajj & Umrah."
  },
  {
    icon: <Headphones size={40} className="text-yellow-500" />,
    title: "24/7 Support",
    desc: "Our dedicated ground team is available in Makkah and Madinah to assist you at every step."
  },
  {
    icon: <BadgePercent size={40} className="text-yellow-500" />,
    title: "Best Price Guarantee",
    desc: "Transparent pricing with no hidden charges. We provide the best value for your money."
  },
  {
    icon: <MapPin size={40} className="text-yellow-500" />,
    title: "Prime Locations",
    desc: "We select hotels that are within walking distance or provide efficient shuttle services to the Harams."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tight">Why Travel With Us?</h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto font-light">
            We prioritize your comfort and spiritual peace above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition duration-300">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}