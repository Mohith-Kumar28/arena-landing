"use client";

import { useState } from "react";
import Button from "./Button";

export default function Contact() {
  const [type, setType] = useState<"business" | "consumer">("business");

  return (
    <section className="py-24 px-8 md:px-24 lg:px-32 bg-background-main relative overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-bebas mb-12 text-white uppercase">Contact Us</h2>
        
        <form className="max-w-2xl space-y-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name*</label>
              <input type="text" placeholder="Your Name" className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-600" />
            </div>
             <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email ID*</label>
              <input type="email" placeholder="Your Email ID" className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-600" />
            </div>
             <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mobile*</label>
              <input type="text" placeholder="Your Mobile Number" className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-600" />
            </div>
             <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company Name*</label>
              <input type="text" placeholder="Your Company Name" className="w-full bg-input-bg border border-input-border rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-600" />
            </div>
          </div>

          <div className="flex items-center gap-2 py-2">
             <button 
                type="button"
                onClick={() => setType("business")}
                className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${type === 'business' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-input-bg text-gray-500 border border-input-border hover:text-white'}`}
             >
               Business
             </button>
              <button 
                type="button"
                onClick={() => setType("consumer")}
                className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${type === 'consumer' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-input-bg text-gray-500 border border-input-border hover:text-white'}`}
             >
               Consumer
             </button>
          </div>

          <div className="pt-4">
            <Button type="submit">
              Submit
            </Button>
          </div>
        </form>
    </section>
  );
}
