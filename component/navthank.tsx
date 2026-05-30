import Image from "next/image";
import Link from "next/link";

// Logo gold colour - matches the SKINSA wordmark
const GOLD = "#C9A96E";
const GREEN = "#2d726d";


export default function Navbared() {
  return (
    <header style={{ backgroundColor: GREEN }} className="w-full border-b border-[#C9A96E]/25">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 lg:px-8 xl:grid xl:grid-cols-[auto_1fr_auto] xl:px-10">
        {/* Left: Logo */}
        <Link href="/" aria-label="Skinsa Aesthetic Home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Skinsa Aesthetic"
            width={230}
            height={72}
            priority
            className="h-auto w-[145px] object-contain sm:w-[180px] lg:w-[205px] xl:w-[230px]"
          />
        </Link>

        {/* Right: CTA Button */}
        <div className="shrink-0 flex items-center justify-end">
          <Link
            href="tel: +91 8446444858"
            className="bg-[#C9A96E] group cursor-pointer border px-4 py-2 text-[12px] font-semibold tracking-wide text-black transition-all duration-200 hover:bg-white hover:border-white hover:text-black active:scale-95 sm:px-5 sm:text-[13px] xl:px-7 xl:py-2.5 xl:text-[13.5px]"
          >
            <span className="sm:hidden">+91 8446444858</span>
            <span className="hidden sm:inline">+91 8446444858</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
