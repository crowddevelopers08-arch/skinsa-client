'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import BookingButton from './booking-button'

const GOLD = '#C9A96E'
const BG = '#2d726d'
const DIR  = '/Before-after-statics'

const images = [
  // { src: `${DIR}/KRUPA FATLOSS PPT - 1.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/KRUPA FATLOSS PPT - 2.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/KRUPA FATLOSS PPT - 3.jpg`,   label: 'Fat Loss'           },
  // { src: `${DIR}/RAMESH DHANEKUL - 1.jpg`,     label: 'Body Transformation' },
  { src: `${DIR}/RAMESH DHANEKUL - 2.jpg`,     label: '' },
  // { src: `${DIR}/bfaf-img-1.png`,    label: ''    },
  // { src: `${DIR}/bfaf-img-2.png`,    label: ''    },
  // { src: `${DIR}/priyanka kalamkar - 1.jpg`,   label: 'Inch Loss'          },
  // { src: `${DIR}/bfaf-img-3.png`,   label: ''          },
  // { src: `${DIR}/shraddha ahwale - 1.jpg`,     label: 'Weight Management'  },
  // { src: `${DIR}/shraddha ahwale - 2.jpg`,     label: 'Weight Management'  },
  // { src: `${DIR}/somnath ahwale - 1.jpg`,      label: 'Sculpting'          },
  // { src: `${DIR}/somnath ahwale - 2.jpg`,      label: 'Sculpting'          },
  // { src: `${DIR}/anamika.jpg`,                 label: 'Transformation'     },
  // { src: `${DIR}/mangesh zombade.jpg`,          label: 'Transformation'     },
  // { src: `${DIR}/Minimalist Before After Salon & Makeup Instagram Post - 1.png`, label: 'Before & After' },
  { src: `${DIR}/Minimalist Before After Salon & Makeup Instagram Post - 2.png`, label: '' },
]

export default function BeforeAfter() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const animRef   = useRef<number>(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += 0.7
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    const pause  = () => { pausedRef.current = true  }
    const resume = () => { pausedRef.current = false }

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
    <section
      className="w-full py-6 lg:pb-10 overflow-hidden"
      // style={{ backgroundColor: BG }}
    >

      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal="top" className="flex flex-col items-center text-center mb-6 sm:mb-12 lg:mb-8">

          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: GOLD }}>
              Real Results
            </span>
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
          </div>

          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-[#0F3F37] uppercase tracking-[0.03em] leading-tight mb-1">
            Before & <span style={{ color: GOLD }}>After</span>
          </h2>

          <p className="text-[12.5px] sm:text-[14px] text-black/75 tracking-wide max-w-[440px]">
            Real client transformations achieved through our personalised non-surgical programs.
          </p>

        </div>
      </div>

      {/* ── Auto-scrolling Carousel ── */}
      <div data-reveal="bottom" data-delay="180" className="relative">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
        />

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide px-8 sm:px-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[314px] sm:w-[260px] lg:w-[450px] h-[262px] sm:h-[420px] lg:h-[400px] overflow-hidden group"
              style={{
                borderRadius: '10px',
                border: '1px solid rgba(201,169,110,0.18)',
                backgroundColor: '#111',
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-20"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}
              />

            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p data-reveal="bottom" data-delay="260" className="text-center text-[15.5px] text-black/80 mt-8 px-6 tracking-wide">
        Individual results may vary. All treatments performed under professional supervision.
      </p>
              {/* ── CTA Button ── */}
              <div data-reveal="bottom" data-delay="340" className="flex justify-center mt-4">
                <BookingButton
                  ariaLabel="Book free consultation"
                  className="inline-flex items-center gap-2.5 sm:gap-3 border bg-[#C9A96E] px-8 sm:px-10 py-3 sm:py-3.5 text-[12px] sm:text-[13.5px] font-semibold tracking-[0.12em] uppercase text-black transition-all duration-200 hover:bg-[#0F3F37] hover:border-[#0F3F37] hover:text-[#DCC48E] active:scale-95"
                  style={{
                    borderColor: GOLD,
                  }}
                  hoverStyle={{
                    backgroundColor: BG,
                    borderColor: BG,
                    color: 'white',
                  }}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="sm:w-4 sm:h-4"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book Your Consultation
                </BookingButton>
              </div>

    </section>
  )
}
