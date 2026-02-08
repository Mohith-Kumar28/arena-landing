"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

import { motion } from "framer-motion";

export default function Button({ 
  children, 
  className = "", 
  variant = "primary", 
  fullWidth = false,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "w-92 py-2 rounded-[20px] text-[20px] font-bebas tracking-wider uppercase transition-all duration-300 outline-none relative flex items-center justify-center";
  
  const variants = {
    primary: "bg-black border border-l-[0.5px] border-t-[0.5px] border-r-[3px] border-b-[3px] border-primary-blue text-text-main shadow-[2px_2px_10px_rgba(56,189,248,0.2)] active:scale-95",
    secondary: "bg-white text-black hover:bg-gray-100", 
    outline: "border border-white/20 text-text-main hover:bg-white/10"
  };

  return (
    <motion.button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? "w-full" : ""} 
        ${className}
      `}
      whileHover={{ scale: 1.05, boxShadow: "2px 2px 20px rgba(56,189,248,0.6)" }}
      whileTap={{ scale: 0.95 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
