"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Button from "./Button";

// Wait, I don't know if lib/utils exists. Standard shadcn init creates it. 
// But looking at file list, I didn't see lib folder.
// I will just use clsx and tailwind-merge directly or local helper.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("business"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
    companyName: z.string().min(2, "Company name is required"),
  }),
  z.object({
    type: z.literal("consumer"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
    // companyName is not present or optional
  }),
]);

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "business",
      name: "",
      email: "",
      mobile: "",
      companyName: "",
    },
  });

  const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = form;
  const type = watch("type");

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset({
        type: data.type, // Keep the current type
        name: "",
        email: "",
        mobile: "",
        companyName: "",
    });
  };

  const inputs = [
    { name: "name", label: "Name", placeholder: "Your Name", type: "text" },
    { name: "email", label: "Email ID", placeholder: "Your Email ID", type: "email" },
    { name: "mobile", label: "Mobile", placeholder: "Your Mobile Number", type: "tel" },
    { 
      name: "companyName", 
      label: "Company Name", 
      placeholder: "Your Company Name", 
      type: "text", 
      condition: type === "business" 
    },
  ];

  return (
    <section id="contact" className="py-24 section-padding bg-background-main relative overflow-hidden flex flex-col items-center md:items-start">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-bebas mb-12 text-text-main uppercase text-center md:text-left">PRE-REGISTER</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inputs.map((input) => (
                (input.condition === undefined || input.condition) && (
                  <div key={input.name} className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">
                      {input.label}*
                    </label>
                    <input
                      {...register(input.name as keyof FormValues)}
                      type={input.type}
                      placeholder={input.placeholder}
                      className={cn(
                        "w-full bg-[#494C72]/20 border rounded-lg px-4 py-3.5 text-text-main focus:outline-none focus:border-primary-blue transition-colors placeholder:text-gray-500",
                        errors[input.name as keyof FormValues] ? "border-red-500" : "border-[#494C72]"
                      )}
                    />
                    {errors[input.name as keyof FormValues] && (
                      <p className="text-red-500 text-xs">{errors[input.name as keyof FormValues]?.message}</p>
                    )}
                  </div>
                )
              ))}
            </div>

            <div className="flex items-center gap-4 py-4 justify-center md:justify-start">
               <button 
                  type="button"
                  onClick={() => setValue("type", "business")}
                  className={cn(
                    "px-8 py-2 rounded-full text-sm font-manrope font-semibold transition-all",
                    type === 'business' 
                      ? 'bg-gradient-to-r from-[#5FB4F5] to-[#C061CB] text-text-main shadow-lg border-none' 
                      : 'bg-[#1A1F2E] text-gray-400 border border-gray-800 hover:text-text-main'
                  )}
               >
                 Business
               </button>
                <button 
                  type="button"
                  onClick={() => setValue("type", "consumer")}
                  className={cn(
                    "px-8 py-2 rounded-full text-sm font-manrope font-semibold transition-all",
                    type === 'consumer' 
                      ? 'bg-gradient-to-r from-[#5FB4F5] to-[#C061CB] text-text-main shadow-lg border-none' 
                      : 'bg-[#1A1F2E] text-gray-400 border border-gray-800 hover:text-text-main'
                  )}
               >
                 Consumer
               </button>
            </div>

            <div className="pt-2 flex justify-center md:justify-start">
              <Button type="submit" className="w-48">
                SUBMIT
              </Button>
            </div>
          </form>
        </motion.div>
    </section>
  );
}
