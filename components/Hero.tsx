import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 pt-32 relative overflow-hidden">
      {/* Background Gradient/Glow - Centered */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Text Content */}
      <div className="z-10 flex flex-col items-star pt max-w-xl">
        <h1 className="text-6xl md:text-[100px] leading-[0.9] mb-6 font-bebas text-text-main">
          YOUR <br />
          GOD’S EYE VIEW
        </h1>
        <p className="text-gray-400 mb-10 font-manrope text-lg">See It All</p>
        
        <Button>
          Download App Now
        </Button>
      </div>

      {/* Isometric Cube Visualization */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10">
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
      {/* Background Gradient/Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Added Left Side Purple Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
