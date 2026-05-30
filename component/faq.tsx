'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG = '#2d726d'

const faqs = [
  {
    q: 'ARE THE TREATMENTS NON-SURGICAL?',
    a: 'Yes, our fat-reduction and body-contouring solutions are non-invasive and designed for minimal discomfort.',
  },
  {
    q: 'IS THERE ANY DOWNTIME?',
    a: 'Most treatments require little to no downtime, allowing you to continue your routine comfortably.',
  },
  {
    q: 'WILL I SEE VISIBLE RESULTS?',
    a: 'Results vary by individual body type and concerns, but many clients notice gradual, visible improvements over time.',
  },
  {
    q: 'HOW MANY SESSIONS WILL I NEED?',
    a: 'Your treatment plan will depend on your goals, target areas, and body assessment during consultation.',
  },
  {
    q: 'ARE THESE TREATMENTS SAFE?',
    a: 'Yes, all procedures are performed using advanced technologies under professional supervision.',
  },
  {
    q: 'CAN I TARGET SPECIFIC PROBLEM AREAS?',
    a: 'Yes, targeted fat reduction solutions are available for areas such as the abdomen, thighs, arms, back, and chin.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq"
      className="w-full scroll-mt-28 py-12 sm:py-16 lg:py-20 px-6 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/*
        Mobile  → flex-col : label, heading, accordion, images  (DOM order)
        Desktop → 2-col grid : images left | FAQ right
      */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-center">

          {/* ① Label — mobile: 1st  |  desktop: col-2 row-1 */}
          <div
            data-reveal="top"
            className="relative flex items-center gap-2.5 z-10
                       mb-2 lg:mb-3
                       lg:col-start-2 lg:row-start-1"
          >
                        <span className="h-[2px] w-10" style={{ backgroundColor: GOLD }} />

            <span
              className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase"
              style={{ color: GOLD }}
            >
              Frequently Asked Questions
            </span>
          </div>

          {/* ② Heading — mobile: 2nd  |  desktop: col-2 row-2 */}
          <h2
            data-reveal="right"
            data-delay="100"
            className="relative text-[26px] sm:text-[32px] lg:text-[38px] font-black text-white uppercase leading-[1.18] z-10
                       mb-6 lg:mb-8
                       lg:col-start-2 lg:row-start-2"
          >
            Answers to Your{' '}
            <span style={{ color: GOLD }}>Most</span>
            <br />
            <span style={{ color: GOLD }}>Common </span>
            Questions
          </h2>

          {/* ③ Images — mobile: 3rd  |  desktop: col-1 spans all rows */}
          <div
            data-reveal="left"
            data-delay="150"
            className="relative
                       h-[280px] sm:h-[380px] lg:h-[600px]
                       mb-6 lg:mb-0
                       lg:col-start-1 lg:row-start-1 lg:row-span-3"
          >

            {/* Top image — large, right-anchored */}
            <div className="absolute right-0 top-0 w-[80%] h-[90%] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/faq-imgs.png"
                alt="Skinsa Aesthetic Treatment"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom image — smaller, left-anchored, overlaps top */}
            <div
              className="absolute left-4 sm:left-8 bottom-0 w-[55%] sm:w-[58%] h-[48%] sm:h-[52%] rounded-xl lg:rounded-2xl overflow-hidden z-10"
              style={{ border: `4px solid ${BG}` }}
            >
              <Image
                src="/faq-imgs2.png"
                alt="Skinsa Aesthetic Clinic"
                fill
                className="object-cover"
              />
            </div>

            {/* Dot grid — bottom right, hidden on mobile to avoid clutter */}
            <div className="hidden sm:grid absolute bottom-5 right-0 grid-cols-6 gap-[5px] lg:gap-[6px] z-0">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[4px] h-[4px] lg:w-[5px] lg:h-[5px] rounded-full"
                  style={{ backgroundColor: GOLD, opacity: 0.65 }}
                />
              ))}
            </div>
          </div>

          {/* ④ Accordion — mobile: 4th  |  desktop: col-2 row-3 */}
          <div
            data-reveal="right"
            data-delay="220"
            className="relative z-10 space-y-[8px] sm:space-y-[10px]
                       lg:col-start-2 lg:row-start-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} data-reveal="bottom" data-delay={String(i * 80)} className="overflow-hidden">

                  {/* Question row */}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`w-full cursor-pointer flex items-center justify-between px-4 sm:px-5 py-[12px] sm:py-[14px] text-left text-[11px] sm:text-[12px] font-bold tracking-[0.09em] uppercase transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#C9A96E] text-black'
                        : 'bg-white text-black hover:bg-[#C9A96E] hover:text-black'
                    }`}
                    style={{
                      border: isOpen ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <span className="leading-snug">{faq.q}</span>

                    {/* Chevron */}
                    <span className="ml-3 sm:ml-4 shrink-0">
                      {isOpen ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                          className="sm:w-4 sm:h-4">
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                          className="sm:w-4 sm:h-4">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer panel */}
                  {isOpen && faq.a && (
                    <div className="px-4 sm:px-5 py-3 sm:py-4 bg-white text-gray-600 text-[13px] sm:text-[14px] leading-relaxed text-black">
                      {faq.a}
                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>

        {/* ── Bottom CTA — centred ── */}
        <div data-reveal="bottom" data-delay="300" className="flex justify-center mt-5 sm:mt-12 lg:mt-14">
          <BookingButton
            ariaLabel="Book your consultation"
            className="inline-flex items-center gap-3 border px-9 sm:px-12 py-3.5 text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase transition-all duration-200 active:scale-95"
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#ffffff',
              color: '#000000',
            }}
          >
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Book Your Consultation
          </BookingButton>
        </div>

      </div>
    </section>
  )
}
