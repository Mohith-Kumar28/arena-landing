import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 py-24 bg-background-main">
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-5xl md:text-7xl font-bebas mb-8 text-white">GOD’S EYE VIEW</h2>
        
        <div className="space-y-4 font-bebas text-2xl md:text-3xl tracking-wide">
          <div className="flex items-center gap-3 cursor-default">
             <ChevronsRight className="text-white w-8 h-8" />
             <span className="text-white">LIVE <span className="text-feature-1">X, Y</span> CO-ORDINATES</span>
          </div>
          <div className="flex items-center gap-3 cursor-default">
             <ChevronsRight className="text-white w-8 h-8" />
             <span className="text-white">LIVE <span className="text-feature-2">LINE/LENGTH</span> MAP</span>
          </div>
           <div className="flex items-center gap-3 cursor-default">
             <ChevronsRight className="text-white w-8 h-8" />
             <span className="text-white">LIVE <span className="text-feature-3">WAGON WHEEL</span></span>
          </div>
           <div className="flex items-center gap-3 cursor-default">
             <ChevronsRight className="text-white w-8 h-8" />
             <span className="text-white">LIVE <span className="text-feature-4">ARENA METRICS</span></span>
          </div>
        </div>
        
        <p className="mt-8 text-gray-400 max-w-md font-manrope leading-relaxed">
          A field overview, is overlayed with a live line/length map & wagon wheel. When coupled with Arena Metrics users are afforded a God’s Eye View
        </p>
      </div>

      {/* Phone Mockup Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
         <Image 
           src="/mockups.png" 
           alt="App Mockups" 
           width={600} 
           height={600} 
           className="w-full h-auto object-contain relative z-10"
         />
         {/* Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[80px] rounded-full -z-10"></div>
      </div>
    </section>
  );
}
