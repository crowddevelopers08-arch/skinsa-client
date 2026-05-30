"use client";

import BookingButton from "@/component/booking-button";

const PHONE_NUMBER = "+918446444858";
const DISPLAY_PHONE = "+91 8446444858";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#0F3F37]/15 bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label={`Call Skinsa Aesthetic at ${DISPLAY_PHONE}`}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 bg-[#C9A96E] py-4 text-sm font-semibold text-black transition hover:bg-white active:scale-95"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.67a16 16 0 0 0 6.24 6.24l1.19-1.19a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </a>

      <BookingButton
        ariaLabel="Book appointment"
        className="flex flex-1 items-center justify-center gap-2 border-l border-[#0F3F37]/15 bg-white py-4 text-sm font-semibold text-[#0F3F37] transition active:scale-95"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
        </svg>
        Book Now
      </BookingButton>
    </div>
  );
}
