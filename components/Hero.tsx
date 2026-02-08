"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 pt-32 relative overflow-hidden">
      {/* Background Gradient/Glow - Centered */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center md:items-start max-w-xl text-center md:text-left mt-12 md:mt-0">
        <h1 className="leading-[0.9] mb-6 font-bebas text-text-main flex flex-col items-center md:items-start space-y-6 md:space-y-0">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[66px] md:text-[100px]"
          >
            YOUR
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[86px] md:text-[100px]"
          >
            GOD&apos;S EYE
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[86px] md:text-[100px]"
          >
            VIEW
          </motion.span>
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 mb-8 md:mb-20 font-manrope text-[24px] md:text-lg"
        >
          See It All
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1 }}
        >
          <Button>
            CONTACT US
          </Button>
        </motion.div>
      </div>

      {/* Isometric Cube Visualization */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end z-10">
         <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center"
          >
            <Image 
              src="/hero-logo.svg" 
              alt="Arena Hero Logo" 
              width={600} 
              height={600} 
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
         </motion.div>
      </div>
      
      {/* Brand Logo - Top Left on Mobile, but part of Hero flow now if we remove navbar */}
      <div className="absolute top-0 left-8 md:top-12 md:left-32 z-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative size-40 flex items-center gap-2"
        >
            <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
           
        </motion.div>
      </div>
      {/* Background Gradient/Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Added Left Side Purple Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
