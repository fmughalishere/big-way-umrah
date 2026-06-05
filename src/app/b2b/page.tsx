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
    { name: "agencyName", label: "Agency Name", placeholder: "Enter Agency Name" },
    { name: "ownerName", label: "Owner Name", placeholder: "Full Name of Owner" },
    { name: "agencyEmail", label: "Agency Email", placeholder: "official@agency.com" },
    { name: "city", label: "City", placeholder: "Your Business City" },
    { name: "agencyAddress", label: "Agency Address", placeholder: "Full Office Address" },
    { name: "licenseNo", label: "Agency License No.", placeholder: "Enter License Number" },
    { name: "contactNo", label: "Agency Contact No.", placeholder: "03XX-XXXXXXX" },
    { name: "experience", label: "Years of Business Experience", placeholder: "e.g. 5 Years" },
    { name: "repName", label: "Name of Representative", placeholder: "Representative Name" },
    { name: "repContact", label: "Contact No of Representative", placeholder: "WhatsApp Number" },
    { name: "repEmail", label: "Representative Email", placeholder: "rep@agency.com" },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-24 flex flex-col items-center px-6 md:px-10 max-w-[1440px] mx-auto">
                <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl"
        >
          <span className="font-black tracking-[5px] text-[10px] uppercase opacity-40 block mb-4" style={{ color: blueColor }}>
            Grow your business with us
          </span>
          <h1 className="text-6xl md:text-[90px] font-black tracking-tighter mt-4 mb-8 leading-[0.85] uppercase">
            <span style={{ color: blueColor }}>AGENT PORTAL</span> <br/>
            <span style={{ color: redColor }}>REGISTRATION.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Join our network of 500+ successful agents across Pakistan. Get exclusive B2B rates, premium inventory, and dedicated 24/7 support.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="mt-24 w-full max-w-5xl bg-slate-950 rounded-[60px] p-10 md:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.2)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c1272d] opacity-10 blur-[100px]" />
          
          <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            
            {formFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-[2px] ml-2">
                  {field.label}
                </label>
                <input 
                  {...register(field.name, { required: true })}
                  placeholder={field.placeholder}
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-[#c1272d] focus:ring-1 focus:ring-[#c1272d] transition-all text-sm font-bold" 
                />
              </div>
            ))}
            <div className="space-y-2 md:col-span-2 mt-2">
              <label className="text-white/40 text-[10px] font-black uppercase tracking-[2px] ml-2">
                Services Required
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Umrah Packages", "Ticket Booking", "Hajj Packages", "Visa", "Transportation"].map((service) => (
                  <label key={service} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl cursor-pointer hover:bg-white/10 transition border border-white/5">
                    <input type="checkbox" value={service} className="accent-[#c1272d] w-4 h-4" />
                    <span className="text-[10px] font-bold text-white/70 uppercase">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <button 
              type="submit"
              className="md:col-span-2 mt-10 text-white py-7 rounded-[30px] font-black tracking-[4px] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl uppercase text-xs"
              style={{ backgroundColor: redColor }}
            >
              Submit Your Request
            </button>

            <p className="md:col-span-2 text-center text-white/20 text-[9px] font-bold tracking-[2px] uppercase mt-4">
              All applications are reviewed within 24-48 business hours.
            </p>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}