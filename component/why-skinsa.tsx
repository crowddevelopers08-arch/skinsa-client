'use client'

import { useEffect, useRef } from 'react'

const GOLD = '#C9A96E'
const BG   = '#FFFFFF'

const reasons = [
  'Personalised weight management solutions',
  'Advanced aesthetic and wellness technologies',
  'Minimal downtime procedures',
  'Comfortable treatment experience',
  'Expert-led consultations',
  'Trusted clinic in Viman Nagar, Pune',
]

export default function WhySkinsa() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const animRef   = useRef<number>(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += 0.6                          // speed — lower = slower
        // seamless loop: when half-way through duplicated list, jump to start
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    const pause   = () => { pausedRef.current = true  }
    const resume  = () => { pausedRef.current = false }

    el.addEventListener('touchstart', pause,  { passive: true })
    el.addEventListener('touchend',   resume, { passive: true })
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animRef.current)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend',   resume)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section id="why-us"
      className="w-full scroll-mt-28 overflow-hidden px-6 py-6 sm:py-12 lg:py-14"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div data-reveal="top" className="relative mb-8 sm:mb-10 lg:mb-12">
          <div className="relative z-10 flex items-center gap-2.5 mb-3 lg:mb-4">
            <span className="h-[2px] w-10" style={{ backgroundColor: GOLD }} />
            <span
              className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              Why Us
            </span>
          </div>
          <h2 className="relative z-10 text-[26px] sm:text-[32px] lg:text-[38px] font-black uppercase leading-[1.15] text-[#0F3F37] md:text-[46px]">
            Why <span style={{ color: GOLD }}>SKINSA?</span>
          </h2>
        </div>

        {/* ══════════════════════════════
            MOBILE — auto-scrolling carousel
        ══════════════════════════════ */}
        <div data-reveal="bottom" data-delay="150" className="md:hidden -mx-6">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-6"
            style={{ scrollBehavior: 'auto' }}   /* keep 'auto' so JS scrollLeft works smoothly */
          >
            {/* duplicate for seamless loop */}
            {[...reasons, ...reasons].map((reason, index) => (
              <div
                key={index}
                className="shrink-0 w-[78vw]"
              >
                <ReasonCard number={(index % reasons.length) + 1} title={reason} />
              </div>
            ))}
          </div>

          {/* Subtle gradient edges to hint more content */}
          <div className="relative pointer-events-none -mt-[92px] h-[92px]">
            <div
              className="absolute inset-y-0 left-0 w-8"
              style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
            />
            <div
              className="absolute inset-y-0 right-0 w-8"
              style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
            />
          </div>
        </div>

        {/* ══════════════════════════════
            TABLET / DESKTOP — grid (unchanged)
        ══════════════════════════════ */}
        <div className="hidden md:block space-y-4 lg:space-y-5">

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-3 gap-4 lg:gap-5">
            {reasons.slice(0, 3).map((reason, index) => (
              <div key={reason} data-reveal="bottom" data-delay={String(index * 90)}>
                <ReasonCard number={index + 1} title={reason} />
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="mx-auto grid max-w-[850px] grid-cols-2 gap-4 lg:gap-5">
            {reasons.slice(3, 5).map((reason, index) => (
              <div key={reason} data-reveal="bottom" data-delay={String((index + 3) * 90)}>
                <ReasonCard number={index + 4} title={reason} />
              </div>
            ))}
          </div>

          {/* Row 3 — 1 card centred */}
          <div className="mx-auto max-w-[420px]">
            <div data-reveal="bottom" data-delay="450">
              <ReasonCard number={6} title={reasons[5]} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

function ReasonCard({ number, title }: { number: number; title: string }) {
  return (
    <div
      className="group flex h-full min-h-[80px]
                 items-center justify-between gap-3 sm:gap-5
                 border border-[#0F3F37]/15 bg-[#0F3F37]/[0.04]
                 px-5 sm:px-6 py-4 sm:py-0
                 transition-all duration-300
                 hover:border-[#C9A96E] hover:bg-[#0F3F37]/[0.07]"
    >
      <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold leading-snug text-[#0F3F37] md:text-[20px]">
        {title}
      </h3>
      <div className="shrink-0">
        <span
          className="flex h-9 w-9 items-center justify-center border text-[12px] font-bold tracking-[0.08em] text-[#0F3F37]"
          style={{ borderColor: GOLD,fontFamily: "'DM Serif Display', serif" }}
        >
          {String(number).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
