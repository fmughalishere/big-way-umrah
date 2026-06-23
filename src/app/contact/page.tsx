"use client";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Country } from 'country-state-city';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const countries = Country.getAllCountries();
  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  const onSubmit = (data: any) => {
    const message =
      `*New Inquiry from Big Way Umrah*%0A` +
      `*Name:* ${data.fullName}%0A` +
      `*WhatsApp:* ${data.whatsapp}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Country:* ${data.country}%0A` +
      `*Package:* ${data.package}%0A` +
      `*Days & Nights:* ${data.daysNights}%0A` +
      `*Adults:* ${data.adults}%0A` +
      `*Kids:* ${data.kids}%0A` +
      `*Travel Dates:* ${data.arrivalDate} to ${data.departureDate}%0A` +
      `*Departure Airport:* ${data.departureAirport}%0A` +
      `*Arrival Airport (Saudi):* ${data.arrivalAirport}`;

    window.open(`https://wa.me/923026177555?text=${message}`, "_blank");
    reset();
  };

  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center space-y-5 md:space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none" style={{ color: blueColor }}>
                GET IN <span style={{ color: redColor }}>TOUCH.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
                Have questions about our premium packages or visa processing? Our team is here to help you 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4 text-left">
              {[
                { icon: <Phone size={18} />, label: "Call Us",   val: "+92 317 317 6483",                href: "tel:+923173176483" },
                { icon: <Mail size={18} />,  label: "Email Us",  val: "info@bigwayumrah.com",            href: "mailto:info@bigwayumrah.com" },
                { icon: <MapPin size={18} />,label: "Visit Us",  val: "101-Tipu Block, Garden Town Lahore", href: "#" }
              ].map((item, idx) => (
                <a
                  href={item.href}
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all group w-full"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:text-white transition-all duration-300"
                    style={{ color: redColor, border: `1px solid ${redColor}20` }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = redColor)}
                    onMouseOut={(e)  => (e.currentTarget.style.backgroundColor = '#ffffff')}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs sm:text-sm font-black text-slate-800 truncate">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-8">
                <Image
                  src="/images/Logo.png"
                  alt="Logo"
                  width={120}
                  height={50}
                  className="mx-auto mb-3 h-10 sm:h-12 w-auto object-contain"
                />
                <h2 className="text-sm sm:text-base md:text-lg font-black tracking-widest uppercase" style={{ color: blueColor }}>
                  Plan Your Sacred Journey
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Full Name *</label>
                  <input
                    {...register("fullName", { required: true })}
                    placeholder="Enter your full name"
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">WhatsApp No. *</label>
                  <input
                    {...register("whatsapp", { required: true })}
                    placeholder="+92 3XX XXX XXXX"
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Email Address *</label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="your@email.com"
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Country</label>
                  <select
                    {...register("country")}
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm text-slate-500"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.name}>{country.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Select Package</label>
                  <select
                    {...register("package")}
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm text-slate-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Economy">Economy Saver</option>
                    <option value="Premium">Premium Executive</option>
                    <option value="Deluxe">Royal Deluxe</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">No. of Days & Nights</label>
                  <select
                    {...register("daysNights")}
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm text-slate-500"
                  >
                    <option value="">Select Duration</option>
                    <option value="15 Days / 14 Nights">15 Days / 14 Nights</option>
                    <option value="20 Days / 19 Nights">20 Days / 19 Nights</option>
                    <option value="21 Days / 20 Nights">21 Days / 20 Nights</option>
                    <option value="22 Days / 21 Nights">22 Days / 21 Nights</option>
                    <option value="Custom">Custom Duration</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Adults (12+)</label>
                    <input
                      type="number"
                      {...register("adults")}
                      placeholder="0"
                      className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none font-bold text-sm focus:ring-2 focus:ring-[#3b5998]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">No. of Kids</label>
                    <input
                      type="number"
                      {...register("kids")}
                      placeholder="0"
                      className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none font-bold text-sm focus:ring-2 focus:ring-[#3b5998]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Date of Arrival</label>
                    <input
                      type="date"
                      {...register("arrivalDate")}
                      className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none font-bold text-sm text-slate-400 focus:ring-2 focus:ring-[#3b5998]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Date of Departure</label>
                    <input
                      type="date"
                      {...register("departureDate")}
                      className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none font-bold text-sm text-slate-400 focus:ring-2 focus:ring-[#3b5998]"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Departure Airport (Pakistan) *</label>
                  <select
                    {...register("departureAirport", { required: true })}
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm text-slate-500"
                  >
                    <option value="">Select Departure Airport</option>
                    <option value="Lahore — Allama Iqbal International (LHE)">Lahore — Allama Iqbal (LHE)</option>
                    <option value="Islamabad — Islamabad International (ISB)">Islamabad International (ISB)</option>
                    <option value="Karachi — Jinnah International (KHI)">Karachi — Jinnah International (KHI)</option>
                    <option value="Peshawar — Bacha Khan International (PEW)">Peshawar — Bacha Khan (PEW)</option>
                    <option value="Multan — Multan International (MUX)">Multan International (MUX)</option>
                    <option value="Quetta — Quetta International (UET)">Quetta International (UET)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2 text-slate-400">Arrival Airport (Saudi Arabia) *</label>
                  <select
                    {...register("arrivalAirport", { required: true })}
                    className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#3b5998] font-bold text-sm text-slate-500"
                  >
                    <option value="">Select Saudi Arrival Airport</option>
                    <option value="Jeddah — King Abdulaziz International (JED)">Jeddah — King Abdulaziz (JED)</option>
                    <option value="Madinah — Prince Mohammad bin Abdulaziz (MED)">Madinah — Prince Mohammad (MED)</option>
                    <option value="Riyadh — King Khalid International (RUH)">Riyadh — King Khalid (RUH)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 rounded-2xl font-black tracking-[3px] text-white shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all uppercase mt-4 md:mt-6"
                  style={{ backgroundColor: blueColor }}
                >
                  Submit Inquiry via WhatsApp
                </button>

                <div className="text-center pt-3 md:pt-4 opacity-40 text-[9px] font-bold tracking-widest uppercase">
                  <p>Privacy Policy | Terms of Service</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
