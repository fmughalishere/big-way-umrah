"use client"
import { useState } from 'react';

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<'b2c' | 'b2b'>('b2c');

  return (
    <section id="forms" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-inner flex border">
            <button 
              onClick={() => setActiveTab('b2c')}
              className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'b2c' ? 'bg-blue-900 text-white shadow-md' : 'text-gray-500'}`}
            >User Inquiry</button>
            <button 
              onClick={() => setActiveTab('b2b')}
              className={`px-8 py-3 rounded-full font-bold transition ${activeTab === 'b2b' ? 'bg-blue-900 text-white shadow-md' : 'text-gray-500'}`}
            >Agent Portal</button>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          {activeTab === 'b2c' ? (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Book Your Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="Full Name" />
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="WhatsApp Number" />
                <select className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900 md:col-span-2">
                  <option>Select Package</option>
                  <option>21 Days Economy</option>
                  <option>15 Days Premium</option>
                </select>
                <button className="md:col-span-2 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">Get Rates on WhatsApp</button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold text-blue-900">B2B Agent Registration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="Agency Name" />
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="Owner Name" />
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="City" />
                <input className="p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-900" placeholder="Contact Details" />
                <button className="md:col-span-2 bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition">Register as Agent</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}