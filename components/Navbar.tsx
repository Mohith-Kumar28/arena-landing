import Link from "next/link";
import Image from "next/image";
import { LogOut } from "lucide-react"; // Placeholder icon if needed

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-8 px-8 md:px-24 lg:px-32 flex items-center justify-between mix-blend-difference text-white">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="relative size-36">
            <Image src="/main-logo.svg" alt="Arena Logo" fill className="object-contain" />
        </div>

      </div>
      
      {/* Menu omitted for simplicity based on image, or maybe it's just the logo? 
          The image shows "See It All" buttons etc, but header usually has nav.
          The provided design images show a very clean header. 
          Image 1 top left: Logo + ARENA. 
          Image 4 bottom right: Menu links.
          I'll assume a minimal header for now.
      */}
    </nav>
  );
}
