"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  className = "", 
  variant = "primary", 
  fullWidth = false,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "w-92 py-2 rounded-[20px] text-[20px] font-bebas tracking-wider uppercase transition-all duration-300 outline-none relative flex items-center justify-center";
  
  const variants = {
    primary: "bg-black border border-l-[1px] border-t-[1px] border-r-[3px] border-b-[3px] border-primary-blue text-white shadow-[2px_2px_10px_rgba(56,189,248,0.2)] hover:shadow-[2px_2px_15px_rgba(56,189,248,0.4)] active:scale-95",
    secondary: "bg-white text-black hover:bg-gray-100", 
    outline: "border border-white/20 text-text-main hover:bg-white/10"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? "w-full" : ""} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
