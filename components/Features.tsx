import Image from "next/image";

export default function Features() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 py-24 bg-background-main">
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex flex-col items-center md:items-start text-left mt-12 md:mt-0">
        <h2 className="text-5xl md:text-7xl font-bebas mb-8 text-text-main w-full text-center md:text-left">GOD’S EYE VIEW</h2>
        
        <div className="space-y-2 font-bebas text-2xl md:text-3xl tracking-wide flex flex-col items-start w-full max-w-md md:max-w-none mx-auto md:mx-0">
          <div className="flex items-center gap-3 ">
             <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             <span className="text-text-main"> <span className="text-feature-1"> LIVE X, Y</span> CO-ORDINATES</span>
          </div>
          <div className="flex items-center gap-3 ">
             <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             <span className="text-text-main">LIVE <span className="text-feature-2">LINE/LENGTH</span> MAP</span>
          </div>
           <div className="flex items-center gap-3 ">
             <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             <span className="text-text-main">LIVE <span className="text-feature-3">WAGON WHEEL</span></span>
          </div>
           <div className="flex items-center gap-3 ">
             <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             <span className="text-text-main">LIVE <span className="text-feature-4">ARENA METRICS</span></span>
          </div>
        </div>
        
        <p className="mt-8 text-gray-400 max-w-md font-manrope leading-relaxed text-left mx-auto md:mx-0">
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
