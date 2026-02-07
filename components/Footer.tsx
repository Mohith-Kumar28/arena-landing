import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-main py-52 px-8 md:px-24 lg:px-32 relative overflow-hidden border-t border-white/5">
      
      {/* Watermark - Fixed opacity and sizing to be visible */}
      <div className="absolute inset-0 z-0 top-32 opacity-100 pointer-events-none mix-blend-screen">
         <Image src="/footer-bg.svg" alt="Footer Background" fill className="object-contain " />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 max-w-7xl mx-auto w-full text-center md:text-left">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start justify-between h-full gap-8 md:gap-0">
            <div className="flex items-center gap-3 mb-8 md:mb-8">
                <div className="relative size-40">
                    <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
                </div>

            </div>
            <p className="text-gray-400 font-manrope text-sm mt-auto">© Copyright Arena 2026</p>
        </div>

        {/* Links Column 1: Arena */}
        <div className="md:col-span-2 md:col-start-7 flex flex-col gap-6 items-center md:items-end md:text-right">
             <h3 className="text-text-main font-bebas text-[24px] mb-2 tracking-wide">Arena</h3>
             <div className="flex flex-col gap-3">
                <Link href="#" className="text-gray-400 hover:text-text-main transition-colors font-manrope font-normal text-[20px]">God&apos;s Eye View</Link>
                <Link href="#" className="text-gray-400 hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Background</Link>
             </div>
        </div>

         {/* Links Column 2: Information */}
        <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-end md:text-right">
             <h3 className="text-white font-bebas text-[24px] mb-2 tracking-wide">Information</h3>
             <div className="flex flex-col gap-3">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors font-manrope font-normal text-[20px]">Sign In</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors font-manrope font-normal text-[20px]">Activate License</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors font-manrope font-normal text-[20px]">FAQ</Link>
             </div>
        </div>

         {/* Links Column 3: Legal */}
        <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-end md:text-right">
             <h3 className="text-text-main font-bebas text-[24px] mb-2 tracking-wide">Legal</h3>
             <div className="flex flex-col gap-3">
                <Link href="#" className="text-gray-400 hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Contact Us</Link>
                <Link href="#" className="text-gray-400 hover:text-text-main transition-colors font-manrope font-normal text-[20px]">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-text-main transition-colors font-manrope font-normal text-[20px]">License Agreement</Link>
             </div>
        </div>
      </div>
    </footer>
  );
}
