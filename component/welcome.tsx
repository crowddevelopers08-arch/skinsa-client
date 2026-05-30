import Image from 'next/image'
import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG = '#2d726d'

const stats = [
  { value: '98%', label: 'Client Satisfactory Rate' },
  { value: '120',  label: 'Projects Completed' },
  { value: '80',   label: 'Happy Employees'   },
]

export default function Welcome() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-28 overflow-hidden"
      style={{ backgroundColor: BG }}
    >

      {/* ══════════════════════════════
          TOP — Layout
          Mobile : flex-col  → label, heading, images, desc, cta (DOM order)
          Desktop: 2-col grid → images left | text right
      ══════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:pt-16 lg:pt-24 pb-6 lg:pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <span className="h-[2px] w-10 shrink-0" style={{ backgroundColor: GOLD }} />

          {/* ① Label — mobile: 1st  |  desktop: col-2 row-1 */}
          <p
            data-reveal="top"
            className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase
                       mb-3 lg:mb-4
                       lg:col-start-2 lg:row-start-1"
            style={{ color: GOLD }}
          >

            Why Choose SKINSA
          </p>

          {/* ② Heading — mobile: 2nd  |  desktop: col-2 row-2 */}
          <h2
            data-reveal="right"
            data-delay="100"
            className="text-[28px] sm:text-[34px] lg:text-[42px] font-black text-white leading-[1.1]
                       mb-5 lg:mb-6
                       lg:col-start-2 lg:row-start-2"
          >
            Push Beyond Your Limits<br />
            And Unlock Your Best Body
          </h2>

          {/* ③ Images — mobile: 3rd  |  desktop: col-1, spans all rows */}
          <div
            data-reveal="left"
            data-delay="150"
            className="relative flex gap-3 lg:gap-4
                       h-[240px] sm:h-[320px] lg:h-[420px]
                       mb-5 lg:mb-0
                       lg:col-start-1 lg:row-start-1 lg:row-span-4"
          >

            {/* Image A — left */}
            <div className="relative flex-1 overflow-hidden rounded-xl lg:rounded-2xl">
              <Image
                src="/welcom.png"
                alt="Skinsa Body Treatment"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(201,169,110,0.18) 0%, transparent 60%)' }}
              />
            </div>

            {/* Image B — right */}
            <div className="relative flex-1 overflow-hidden rounded-xl lg:rounded-2xl">
              <Image
                src="/welcome.png"
                alt="Skinsa Results"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(201,169,110,0.18) 0%, transparent 60%)' }}
              />
            </div>

            {/* Years badge centred over the gap */}
            <div
              className="absolute rounded-tl-[25px] rounded-br-[25px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                          flex flex-col items-center justify-center text-center
                          w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[148px] lg:h-[148px]"
              style={{ backgroundColor: GOLD }}
            >
              <span className="text-[32px] sm:text-[44px] lg:text-[35px] font-black text-black leading-none tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                5+
              </span>
              <span
                className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.12em] leading-snug mt-0.5 lg:mt-1"
                style={{ color: 'rgba(0,0,0,0.65)' }}
              >
                Years of<br />Experience
              </span>
            </div>

          </div>

          {/* ④ Description — mobile: 4th  |  desktop: col-2 row-3 */}
          <p
            data-reveal="right"
            data-delay="200"
            className="text-[13px] sm:text-[14px] text-white/95 leading-relaxed
                       mb-6 lg:mb-8 max-w-[460px]
                       lg:col-start-2 lg:row-start-3"
          >
            Whether you&apos;re dealing with stubborn belly fat, post-pregnancy weight gain,
            or specific problem areas that don&apos;t respond to workouts, our personalised
            body contouring solutions are designed to help you achieve visible inch loss
            safely and comfortably.
          </p>

          {/* ⑤ CTA — mobile: 5th  |  desktop: col-2 row-4 */}
          <div className="lg:col-start-2 lg:row-start-4">
            <div data-reveal="bottom" data-delay="300">
            <BookingButton
              ariaLabel="Open consultation form"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-3.5 text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase transition-all duration-200 bg-white text-black hover:bg-[#C9A96E]"
            >
              Yes, I&apos;m Ready!
            </BookingButton>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════
          BOTTOM — Stats Bar
      ══════════════════════════════ */}
      <div
        className="border-t mt-0 lg:mt-0"
        style={{ borderColor: 'rgba(201,169,110,0.14)' }}
      >
        <div className="mx-auto max-w-7xl px-6 py-5 sm:py-10 lg:py-14 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i} data-reveal="bottom" data-delay={String(i * 120)} className="flex flex-col items-center text-center">
              <div className="flex items-end leading-none mb-1 lg:mb-2">
                <span className="text-[32px] sm:text-[44px] lg:text-[58px] font-black text-white mr-1 leading-none tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {s.value}
                </span>
                <span
                  className="text-[28px] sm:text-[38px] lg:text-[52px] font-black leading-none mb-[2px]"
                  style={{ color: GOLD }}
                >
                  +
                </span>
              </div>
              <span className="text-[10px] sm:text-[12px] lg:text-[13.5px] text-white/100 tracking-wide leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
