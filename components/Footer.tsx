import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-main pt-24 pb-12 px-8 md:px-24 lg:px-32 relative overflow-hidden border-t border-white/5">
      
      {/* Watermark */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[20vw] font-bebas text-white/[0.03] pointer-events-none select-none tracking-widest leading-none z-0 whitespace-nowrap">
        ARENA
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 max-w-7xl mx-auto w-full">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div className="flex items-center gap-3 mb-8">
                <div className="relative w-8 h-8">
                    <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
                </div>
                <span className="text-2xl font-bebas tracking-wide text-white">ARENA</span>
            </div>
            <p className="text-gray-600 text-[10px] mt-auto">© Copyright Arena 2026</p>
        </div>

        {/* Links Column 1: Arena */}
        <div className="md:col-span-2 md:col-start-7 flex flex-col gap-6">
             <h3 className="text-white font-manrope font-semibold text-2xl mb-4">Arena</h3>
             <div className="flex flex-col gap-4">
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">God's Eye View</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">Background</Link>
             </div>
        </div>

         {/* Links Column 2: Information */}
        <div className="md:col-span-2 flex flex-col gap-6">
             <h3 className="text-white font-manrope font-semibold text-2xl mb-4">Information</h3>
             <div className="flex flex-col gap-4">
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">Sign In</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">Activate License</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">FAQ</Link>
             </div>
        </div>

         {/* Links Column 3: Legal */}
        <div className="md:col-span-2 flex flex-col gap-6">
             <h3 className="text-white font-manrope font-semibold text-2xl mb-4">Legal</h3>
             <div className="flex flex-col gap-4">
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">Contact Us</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">Privacy Policy</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors font-manrope text-xl">License Agreement</Link>
             </div>
        </div>
      </div>
    </footer>
  );
}
