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
  
  const baseStyles = "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors duration-200 outline-none";
  
  const variants = {
    primary: "border border-primary-blue text-white hover:bg-primary-blue/10",
    secondary: "bg-white text-black hover:bg-gray-100", // Placeholder for potential secondary style
    outline: "border border-white/20 text-white hover:bg-white/10"
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
