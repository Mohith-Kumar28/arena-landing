import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-main py-52 section-padding relative overflow-hidden border-t border-white/5">
      
      {/* Watermark - Fixed opacity and sizing to be visible */}
      <div className="absolute inset-0 z-0 top-32 opacity-100 pointer-events-none mix-blend-screen">
         <Image src="/footer-bg.svg" alt="Footer Background" fill className="object-contain " />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-10 gap-12 md:gap-8 max-w-7xl mx-auto w-full text-center md:text-left">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start  h-full gap-8 md:gap-0">
            <div className="flex items-center gap-3 mb-8 md:mb-0">
                <div className="relative size-40">
                    <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
                </div>

            </div>
            <p className="text-text-main font-manrope text-md hidden md:block md:-mt-6">© Copyright Arena 2026</p>
        </div>

        {/* Links Column 1: Arena */}
        <div className="md:col-span-2 md:col-start-5 flex flex-col gap-6 items-center md:items-end md:text-right">
             <p className="text-text-main font-manrope font-semibold text-[24px] mb-2 tracking-wide">Arena</p>
             <div className="flex flex-col gap-3">
                <a href="#features" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">God&apos;s Eye View</a>
                <a href="#background" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Background</a>
             </div>
        </div>

         {/* Links Column 2: Information */}
        <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-end md:text-right">
             <p className="text-text-main font-manrope font-semibold text-[24px] mb-2 tracking-wide">Information</p>
             <div className="flex flex-col gap-3">
                <Link href="#" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Sign In</Link>
                <Link href="#" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Activate License</Link>
                <Link href="#" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">FAQ</Link>
             </div>
        </div>

         {/* Links Column 3: Legal */}
        <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-end md:text-right">
             <p className="text-text-main font-manrope font-semibold text-[24px] mb-2 tracking-wide">Legal</p>
             <div className="flex flex-col gap-3">
                <a href="#contact" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Pre-Register</a>
                <Link href="#" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Privacy Policy</Link>
                <Link href="#" className="text-text-main hover:text-text-main transition-colors font-manrope font-normal text-[20px]">License Agreement</Link>
             </div>
        </div>
        {/* Mobile Copyright */}
        <div className="md:hidden w-full text-center mt-4">
            <p className="text-text-main font-manrope text-sm">© Copyright Arena 2026</p>
        </div>
      </div>
    </footer>
  );
}
