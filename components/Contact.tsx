"use client";

import { useState } from "react";
import Button from "./Button";

export default function Contact() {
  const [type, setType] = useState<"business" | "consumer">("business");

  return (
    <section className="py-24 px-8 md:px-24 lg:px-32 bg-background-main relative overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-bebas mb-12 text-text-main uppercase">Contact Us</h2>
        
        <form className="max-w-2xl space-y-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-main">Name*</label>
              <input type="text" placeholder="Your Name" className="w-full bg-[#494C72]/[0.02] border border-[#494C72] rounded-lg px-4 py-3.5 text-text-main focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-500" />
            </div>
             <div className="space-y-2">
              <label className="text-sm font-semibold text-text-main">Email ID*</label>
              <input type="email" placeholder="Your Email ID" className="w-full bg-[#494C72]/[0.02] border border-[#494C72] rounded-lg px-4 py-3.5 text-text-main focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-500" />
            </div>
             <div className="space-y-2">
              <label className="text-sm font-semibold text-text-main">Mobile*</label>
              <input type="text" placeholder="Your Mobile Number" className="w-full bg-[#494C72]/[0.02] border border-[#494C72] rounded-lg px-4 py-3.5 text-text-main focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-500" />
            </div>
             <div className="space-y-2">
              <label className="text-sm font-semibold text-text-main">Company Name*</label>
              <input type="text" placeholder="Your Company Name" className="w-full bg-[#494C72]/[0.02] border border-[#494C72] rounded-lg px-4 py-3.5 text-text-main focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4 py-4">
             <button 
                type="button"
                onClick={() => setType("business")}
                className={`px-8 py-2 rounded-full text-sm font-manrope font-semibold transition-all ${type === 'business' ? 'bg-gradient-to-r from-[#5FB4F5] to-[#C061CB] text-text-main shadow-lg border-none' : 'bg-[#1A1F2E] text-gray-400 border border-gray-800 hover:text-text-main'}`}
             >
               Business
             </button>
              <button 
                type="button"
                onClick={() => setType("consumer")}
                className={`px-8 py-2 rounded-full text-sm font-manrope font-semibold transition-all ${type === 'consumer' ? 'bg-gradient-to-r from-[#5FB4F5] to-[#C061CB] text-text-main shadow-lg border-none' : 'bg-[#1A1F2E] text-gray-400 border border-gray-800 hover:text-text-main'}`}
             >
               Consumer
             </button>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-48">
              SUBMIT
            </Button>
          </div>
        </form>
    </section>
  );
}
