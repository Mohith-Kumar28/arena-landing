import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 pt-32 relative overflow-hidden">
      {/* Background Gradient/Glow - Centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center md:items-start max-w-xl text-center md:text-left mt-12 md:mt-0">
        <h1 className="leading-[0.9] mb-6 font-bebas text-text-main flex flex-col items-center md:items-start space-y-6 md:space-y-0">
          <span className="text-[66px] md:text-[100px]">YOUR</span>
          <span className="text-[86px] md:text-[100px]">GOD&apos;S EYE</span>
          <span className="text-[86px] md:text-[100px]">VIEW</span>
        </h1>
        <p className="text-gray-400 mb-10 font-manrope text-[24px] md:text-lg">See It All</p>
        
        <Button>
          CONTACT US
        </Button>
      </div>

      {/* Isometric Cube Visualization */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end z-10">
         <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            <Image 
              src="/hero-logo.svg" 
              alt="Arena Hero Logo" 
              width={600} 
              height={600} 
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
         </div>
      </div>
      
      {/* Brand Logo - Top Left on Mobile, but part of Hero flow now if we remove navbar */}
      <div className="absolute top-0 left-8 md:top-12 md:left-32 z-50">
        <div className="relative size-40 flex items-center gap-2">
            <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
           
        </div>
      </div>
      {/* Background Gradient/Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Added Left Side Purple Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
