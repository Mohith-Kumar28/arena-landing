"use client";

import Button from "./Button";
import { motion } from "framer-motion";

export default function Background() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="background" className="py-24 section-padding bg-background-secondary border-t border-white/5 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-4xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-left"
      >
        <motion.h2 variants={item} className="text-5xl md:text-6xl font-bebas mb-6 text-text-main w-full text-center md:text-left">
          BACKGROUND
        </motion.h2>
        <motion.p variants={item} className="text-text-main font-manrope text-[18px] leading-relaxed max-w-2xl mb-12 text-left">
          We approach sports analytics with a next-generational product developed in an academically certified methodology, strategic alliances with main actors and an agile operation process. This was acquired by pooling expertise in performance analysis, artificial intelligence & financial technology.
        </motion.p>
        
        <motion.div variants={item} className="pt-8">
          <Button>
            PRE-REGISTER
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
