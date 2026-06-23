"use client"
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function B2BPage() {
  const { register, handleSubmit, reset } = useForm();

  const blueColor = "#3b5998";
  const redColor = "#c1272d";

  const onSubmit = (data: any) => {
    console.log("B2B Application Data:", data);
    alert("Application Submitted Successfully! Our team will review your agency details.");
    reset();
  };

  const formFields = [
    { name: "agencyName",    label: "Agency Name",                   placeholder: "Enter Agency Name" },
    { name: "ownerName",     label: "Owner Name",                    placeholder: "Full Name of Owner" },
    { name: "agencyEmail",   label: "Agency Email",                  placeholder: "official@agency.com" },
    { name: "city",          label: "City",                          placeholder: "Your Business City" },
    { name: "agencyAddress", label: "Agency Address",                placeholder: "Full Office Address" },
    { name: "licenseNo",     label: "Agency License No.",            placeholder: "Enter License Number" },
    { name: "contactNo",     label: "Agency Contact No.",            placeholder: "03XX-XXXXXXX" },
    { name: "experience",    label: "Years of Business Experience",  placeholder: "e.g. 5 Years" },
    { name: "repName",       label: "Name of Representative",        placeholder: "Representative Name" },
    { name: "repContact",    label: "Contact No of Representative",  placeholder: "WhatsApp Number" },
    { name: "repEmail",      label: "Representative Email",          placeholder: "rep@agency.com" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24 flex flex-col items-center px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl w-full"
        >
          <span className="font-black tracking-[5px] text-[10px] uppercase opacity-40 block mb-4" style={{ color: blueColor }}>
            Grow your business with us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[90px] font-black tracking-tighter mt-4 mb-6 md:mb-8 leading-[0.85] uppercase">
            <span style={{ color: blueColor }}>AGENT PORTAL</span> <br />
            <span style={{ color: redColor }}>REGISTRATION.</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Join our network of 500+ successful agents across Pakistan. Get exclusive B2B rates, premium inventory, and dedicated 24/7 support.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-14 md:mt-24 w-full max-w-5xl rounded-[30px] sm:rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_30px_100px_rgba(59,89,152,0.15)] border border-slate-100"
        >
          <div className="px-6 sm:px-10 md:px-16 lg:px-20 py-7 md:py-10" style={{ backgroundColor: blueColor }}>
            <p className="text-white font-black text-lg sm:text-xl md:text-2xl uppercase tracking-widest">Agency Application Form</p>
            <p className="text-white/60 text-xs sm:text-sm font-medium mt-1">All fields are required. Reviewed within 24–48 hours.</p>
          </div>
          <div className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 blur-[80px]" style={{ backgroundColor: redColor }} />

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-8">

              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[2px] ml-1" style={{ color: blueColor }}>
                    {field.label}
                  </label>
                  <input
                    {...register(field.name, { required: true })}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 md:p-5 rounded-2xl text-slate-800 outline-none placeholder:text-slate-400 font-bold text-sm
                               focus:border-[#3b5998] focus:bg-white transition-all duration-300"
                  />
                </div>
              ))}
              <div className="space-y-3 sm:col-span-2 mt-2">
                <label className="text-[10px] font-black uppercase tracking-[2px] ml-1" style={{ color: blueColor }}>
                  Services Required
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                  {["Umrah Packages", "Ticket Booking", "Hajj Packages", "Visa", "Transportation"].map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 bg-slate-50 border-2 border-slate-100 p-3 md:p-4 rounded-xl cursor-pointer hover:border-[#3b5998] hover:bg-blue-50/40 transition-all duration-300"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        className="w-4 h-4 rounded accent-[#c1272d] shrink-0"
                      />
                      <span className="text-[10px] font-black text-slate-600 uppercase">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="sm:col-span-2 mt-8 md:mt-10 text-white py-5 md:py-7 rounded-[20px] md:rounded-[30px] font-black tracking-[4px] uppercase text-xs
                           shadow-xl transition-all duration-500 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{ backgroundColor: redColor }}
              >
                Submit Your Request
              </button>

              <p className="sm:col-span-2 text-center text-slate-400 text-[9px] font-bold tracking-[2px] uppercase mt-2 md:mt-4">
                All applications are reviewed within 24–48 business hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
