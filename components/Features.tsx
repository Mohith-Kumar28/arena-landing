"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="features" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 py-24 bg-background-main overflow-hidden">
      {/* Text Content */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="w-full md:w-[50%] mb-12 md:mb-0 flex flex-col items-center md:items-start text-left mt-12 md:mt-0"
      >
        <motion.h2 variants={item} className="text-5xl md:text-7xl font-bebas mb-8 text-text-main w-full text-center md:text-left">
          GOD’S EYE VIEW
        </motion.h2>
        
        <div className="space-y-2 font-bebas text-2xl md:text-3xl tracking-wide flex flex-col items-start w-full max-w-md md:max-w-none mx-auto md:mx-0">
          <motion.div variants={item} className="flex items-center gap-3 group cursor-default">
             <motion.div 
                whileHover={{ x: 10, filter: "drop-shadow(0 0 8px rgba(95,180,245,0.6))" }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             </motion.div>
             <span className="text-text-main transition-colors group-hover:text-feature-1 duration-300"> <span className="text-feature-1 group-hover:underline decoration-feature-1 decoration-2 underline-offset-4"> LIVE X, Y</span> CO-ORDINATES</span>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center gap-3 group cursor-default">
             <motion.div 
                whileHover={{ x: 10, filter: "drop-shadow(0 0 8px rgba(255,100,255,0.6))" }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             </motion.div>
             <span className="text-text-main transition-colors group-hover:text-feature-2 duration-300">LIVE <span className="text-feature-2 group-hover:underline decoration-feature-2 decoration-2 underline-offset-4">LINE/LENGTH</span> MAP</span>
          </motion.div>
          
           <motion.div variants={item} className="flex items-center gap-3 group cursor-default">
             <motion.div 
                whileHover={{ x: 10, filter: "drop-shadow(0 0 8px rgba(100,255,100,0.6))" }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             </motion.div>
             <span className="text-text-main transition-colors group-hover:text-feature-3 duration-300">LIVE <span className="text-feature-3 group-hover:underline decoration-feature-3 decoration-2 underline-offset-4">WAGON WHEEL</span></span>
          </motion.div>
          
           <motion.div variants={item} className="flex items-center gap-3 group cursor-default">
             <motion.div 
                whileHover={{ x: 10, filter: "drop-shadow(0 0 8px rgba(255,200,50,0.6))" }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                <Image src="/double-arrow-right.svg" alt="arrow" width={46} height={46} className="size-10" />
             </motion.div>
             <span className="text-text-main transition-colors group-hover:text-feature-4 duration-300">LIVE <span className="text-feature-4 group-hover:underline decoration-feature-4 decoration-2 underline-offset-4">ARENA METRICS</span></span>
          </motion.div>
        </div>
        
        <motion.p variants={item} className="mt-8 text-text-main max-w-md font-manrope leading-relaxed text-left mx-auto md:mx-0 text-[18px]">
          A field overview, is overlayed with a live line/length map & wagon wheel. When coupled with Arena Metrics users are afforded a God’s Eye View
        </motion.p>
      </motion.div>

      {/* Phone Mockup Placeholder */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full md:w-[65%] flex justify-center items-center relative"
      >
         <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full"
         >
             <Image 
               src="/mockups.png" 
               alt="App Mockups" 
               width={800} 
               height={800} 
               className="w-full h-auto object-contain"
             />
         </motion.div>
         {/* Glow behind phone */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[80px] rounded-full -z-10"
          />
      </motion.div>
    </section>
  );
}
