import { ShieldCheck, Headphones, BadgePercent, MapPin } from "lucide-react";

const blueColor = "#3b5998";
const redColor = "#c1272d";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Authorized Agent",
    desc: "We are a fully licensed travel agency recognized by the Ministry of Hajj & Umrah."
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Support",
    desc: "Our dedicated ground team is available in Makkah and Madinah to assist you at every step."
  },
  {
    icon: <BadgePercent size={32} />,
    title: "Best Price Guarantee",
    desc: "Transparent pricing with no hidden charges. We provide the best value for your money."
  },
  {
    icon: <MapPin size={32} />,
    title: "Prime Locations",
    desc: "We select hotels that are within walking distance or provide efficient shuttle services to the Harams."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white text-slate-800 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b5998]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="font-black tracking-[6px] text-[11px] uppercase block" style={{ color: redColor }}>
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight" style={{ color: blueColor }}>
            Why Travel With Us?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-base">
            We prioritize your comfort and spiritual peace above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:shadow-2xl hover:shadow-slate-200/50 hover:bg-white transition-all duration-300 group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:text-white"
                style={{ color: redColor, border: `1px solid ${redColor}20`, backgroundColor: '#ffffff' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = redColor;
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = redColor;
                }}
              >
                {item.icon}
              </div>
              
              <h3 className="text-xl font-black mb-3 text-slate-800 tracking-tight group-hover:text-[#3b5998] transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}