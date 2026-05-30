import Image from 'next/image'
import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG   = '#FFFFFF'

const features = [
  { title: 'Non-invasive and comfortable procedures' },
  { title: 'Personalised body contouring programs'   },
  { title: 'Advanced fat reduction technologies.'    },
  { title: 'No surgery or extended downtime.'        },
  { title: 'Treatments designed for busy lifestyles.' },
  { title: 'Safe and expert-guided approach.'        },
]

export default function AboutUs() {
  return (
    <section id="about"
      style={{ backgroundColor: BG }}
      className="relative w-full scroll-mt-28 py-5 sm:py-16 lg:py-14 px-6 overflow-hidden"
    >
      {/*
        Mobile  → flex-col : label, heading, images, desc, features, cta  (DOM order)
        Desktop → 2-col grid : images left | text right
      */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">

          {/* ① Label — mobile: 1st  |  desktop: col-2 row-1 */}
          <div
            data-reveal="top"
            className="flex items-center gap-2.5
                       mb-3 lg:mb-4
                       lg:col-start-2 lg:row-start-1"
          >
            <span className="h-[2px] w-10" style={{ backgroundColor: GOLD }} />
            <span
              className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              About Us
            </span>
          </div>

          {/* ② Heading — mobile: 2nd  |  desktop: col-2 row-2 */}
          <h2
            data-reveal="right"
            data-delay="100"
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-black text-[#0F3F37] uppercase leading-[1.12]
                       mb-4 lg:mb-5
                       lg:col-start-2 lg:row-start-2"
          >
            Feel More Confident Every{' '}
            <span style={{ color: GOLD }}>Time You </span>
            <span style={{ color: GOLD }}>Look in </span> the Mirror
          </h2>

          {/* ③ Images — mobile: 3rd  |  desktop: col-1, spans all rows */}
          <div
            data-reveal="left"
            data-delay="150"
            className="relative
                       h-[340px] sm:h-[440px] lg:h-[540px] w-full
                       mb-6 lg:mb-0
                       lg:col-start-1 lg:row-start-1 lg:row-span-6"
          >

            {/* Image 1 — large, bottom-left */}
            <div
              className="absolute bottom-0 left-0 w-[62%] h-[75%] lg:h-[420px] overflow-hidden"
              style={{
                borderRadius: '20px 20px 20px 20px',
                border: `1.5px solid rgba(201,169,110,0.3)`,
                zIndex: 1,
              }}
            >
              <Image src="/abt-img-3.jpg" alt="Skinsa Treatment 1" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-black/15" />
            </div>

            {/* Image 2 — smaller, top-right */}
            <div
              className="absolute top-0 right-0 w-[48%] h-[44%] lg:h-[240px] overflow-hidden"
              style={{
                borderRadius: '20px 20px 20px 20px',
                border: `2.5px solid rgba(237,163,25,0.25)`,
                zIndex: 2,
              }}
            >
              <Image src="/abt-img-1.png" alt="Skinsa Treatment 2" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-black/15" />
            </div>

            {/* Image 3 — medium, bottom-right overlapping */}
            {/* <div
              className="absolute bottom-0 right-4 w-[46%] h-[52%] lg:h-[280px] overflow-hidden"
              style={{
                borderRadius: '0 60px 0 60px',
                border: `2.5px solid rgba(237,163,25,0.25)`,
                zIndex: 3,
              }}
            >
              <Image src="/abt-img-4.jpg" alt="Skinsa Treatment 3" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-black/15" />
            </div> */}

            {/* Gold dot grid — top left */}
            <div className="absolute top-4 left-0 grid grid-cols-5 gap-[6px] z-0 pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: GOLD, opacity: 0.3 }} />
              ))}
            </div>

            {/* Experience badge */}
            <div
              className="absolute bottom-6 left-[64%] -translate-x-1/2 z-10
                          flex flex-col items-center justify-center text-center px-4 py-3"
              style={{
                fontFamily: "'DM Serif Display', serif" ,
                borderRadius: '20px 0px 20px 0px',
                backgroundColor: GOLD,
                minWidth: '90px',
              }}
            >
              <span className="text-[26px] sm:text-[30px] lg:text-[34px] font-black text-black leading-none">5+</span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-black/70 uppercase tracking-[0.15em] mt-0.5 leading-tight">
                Years of<br />Excellence
              </span>
            </div>

          </div>

          {/* ④ Description — mobile: 4th  |  desktop: col-2 row-3 */}
          <div data-reveal="right" data-delay="200" className="mb-4 lg:mb-2 lg:col-start-2 lg:row-start-3">
            <p className="text-[13px] sm:text-[13.5px] text-black/60 leading-relaxed mb-2 max-w-[460px]">
              Weight management is not one-size-fits-all. At SKINSA, we understand that everybody responds differently. That&apos;s why our experts create customised treatment plans designed around your body goals, lifestyle, and concerns.
            </p>
            <p className="text-[13px] sm:text-[13.5px] text-black/60 leading-relaxed max-w-[460px]">
              Using advanced non-surgical technologies and wellness-focused approaches, we help target stubborn fat, improve body contour, and support visible inch loss, all without disrupting your daily routine!
            </p>
          </div>

          {/* ⑤ Feature grid — mobile: 5th  |  desktop: col-2 row-4 */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4
                       mb-6 lg:mb-8 lg:mt-2
                       lg:col-start-2 lg:row-start-4"
          >
            {features.map((f, i) => (
              <div
                data-reveal="bottom"
                data-delay={String(i * 90)}
                key={i}
                className="flex gap-3 p-3 lg:p-4"
                style={{
                  backgroundColor: 'rgba(15,63,55,0.04)',
                  border: '1px solid rgba(15,63,55,0.12)',
                }}
              >
                <div
                  className="shrink-0 w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full mt-0.5"
                  style={{ backgroundColor: 'rgba(201,169,110,0.12)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
                <h3 className="text-[12px] sm:text-[13px] lg:text-[13.5px] font-bold text-[#0F3F37] leading-snug pt-0.5">
                  {f.title}
                </h3>
              </div>
            ))}
          </div>

          {/* ⑥ CTA — mobile: 6th  |  desktop: col-2 row-5 */}
          <div data-reveal="bottom" data-delay="350" className="flex items-center gap-4 lg:col-start-2 lg:row-start-5">
            <BookingButton
              ariaLabel="Open consultation form"
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-3 text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.16em] uppercase transition-all duration-200 "
              style={{ backgroundColor: GOLD, color: '#000' }}
              hoverStyle={{
                backgroundColor: '#2d726d',
                borderColor: '#2d726d',
                color: 'white',
              }}
            >
              More About Us
            </BookingButton>
            <BookingButton
              ariaLabel="More about Skinsa"
              className="group w-11 h-11 lg:w-12 lg:h-12 cursor-pointer flex items-center justify-center border border-[#C9A96E]/40 bg-[#C9A96E]/10 transition-all duration-200 hover:bg-[#C9A96E] active:scale-95"
              hoverStyle={{
                backgroundColor: GOLD,
                borderColor: GOLD,
                color: '#000',
              }}
            >
              <svg className="transition-colors duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </BookingButton>
          </div>

        </div>
      </div>
    </section>
  )
}
