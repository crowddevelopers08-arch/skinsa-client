"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingButton from "@/component/booking-button";

// Logo gold colour - matches the SKINSA wordmark
const GOLD = "#C9A96E";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-3 px-4 py-3 sm:px-6 md:grid md:grid-cols-[auto_1fr_auto] lg:px-8 xl:px-10">
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

        {/* Center: Nav Links */}
        <ul
          className={`order-3 w-full flex-col items-center gap-3 border-t border-white/10 pt-3 md:order-none md:flex md:w-auto md:flex-row md:justify-center md:gap-x-7 md:border-t-0 md:pt-0 lg:gap-x-8 xl:gap-9 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="group relative py-1">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[12.5px] font-[450] tracking-[0.04em] text-white transition-colors duration-200 group-hover:text-white sm:text-[13.5px] xl:text-[14.5px]"
              >
                {link.label}
              </Link>
              {/* Gold underline slides in on hover */}
              <span
                className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full"
                style={{ backgroundColor: GOLD }}
              />
            </li>
          ))}
        </ul>

        {/* Right: CTA Button + Mobile Toggle */}
        <div className="shrink-0 flex items-center justify-end gap-2">
          <BookingButton
            ariaLabel="Book your appointment"
            className="bg-[#C9A96E] group border px-4 py-2 text-[12px] font-semibold tracking-wide text-black transition-all duration-200 hover:bg-white hover:border-white hover:text-black active:scale-95 sm:px-5 sm:text-[13px] xl:px-7 xl:py-2.5 xl:text-[13.5px]"
          >
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Book Your Appointment</span>
          </BookingButton>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black md:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
