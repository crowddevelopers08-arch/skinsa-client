import Image from 'next/image'
import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'

const services = [
  { no: '01', name: 'CoolSculpting'                    },
  { no: '02', name: 'Lipodissolve'                     },
  { no: '03', name: 'Weight Loss IV Drips'             },
  { no: '04', name: 'Customised Body Contouring Plans' },
]

const marqueeItems = [
  'Trusted by Clients Across Pune',
  'Customised Body Sculpting Solutions',
  'Advanced Aesthetic Technology',
  'Expert-Guided Programs',
  'Wellness Technology',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full scroll-mt-28 bg-black flex flex-col lg:flex-row overflow-hidden
                 lg:h-[calc(96vh-72px)]"
    >

      {/* ══════════════════════════════
          LEFT — Content
      ══════════════════════════════ */}
      <div
        className="
          w-full lg:w-[60%]
          flex flex-col justify-center relative
          pl-8 sm:pl-12 lg:pl-12 xl:pl-20
          pr-8 lg:pr-8
          pt-5 sm:pt-14 lg:pt-10
          pb-13 lg:pb-16
        "
      >

        {/* Gold vertical bar */}
        <div
          className="absolute left-0 top-12 bottom-14 hidden w-[3px] sm:block lg:top-20 lg:bottom-20"
          style={{ backgroundColor: GOLD }}
        />

        {/* ── Label ── */}
        <div data-reveal="bottom" className="relative z-10 flex min-h-5 items-center gap-2.5 mb-3 sm:mb-5 lg:mb-6">
          <svg className="h-2.5 w-2.5 shrink-0" viewBox="0 0 24 24" fill={GOLD}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span
            className="block text-[10px] font-bold tracking-[0.26em] uppercase leading-none sm:text-[11px] sm:tracking-[0.4em]"
            style={{ color: GOLD }}
          >
            Skinsa Aesthetic Clinic
          </span>
        </div>

        {/* ── Heading ── */}
        <h1
          data-reveal="left"
          data-delay="100"
          className="
            mb-5 lg:mb-6
            max-w-[620px]
            text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[68px]
            font-black uppercase
            leading-[0.92] tracking-tight text-white
          "
        >
          Shape{' '}
          <span
            className="inline-block rounded-tl-[26px] rounded-br-[26px] px-4 py-1 text-black"
            style={{ backgroundColor: GOLD }}
          >
            Your Body
          </span>
          <span className="block">With Ease</span>
        </h1>

        {/* ── Description ── */}
        <div data-reveal="left" data-delay="200" className="flex items-stretch gap-4 mb-5 lg:mb-6">
          <div
            className="w-[2.5px] rounded-full shrink-0"
            style={{ backgroundColor: GOLD }}
          />
          <p className="text-[13px] sm:text-[13.5px] text-white/50 leading-relaxed max-w-[380px]">
            Lose stubborn fat safely with advanced non-surgical treatments
            designed for visible inch loss and body contouring.
          </p>
        </div>

        {/* ── Services 2×2 ── */}
        {/* Mobile only: image comes after description */}
        <div data-reveal="bottom" data-delay="250" className="block sm:hidden relative w-full pb-5">
          <div
            className="relative w-full h-[300px] overflow-hidden"
            style={{
              borderRadius: '40px 0 40px 0',
              border: `1.5px solid rgba(201,169,110,0.4)`,
            }}
          >
            <Image
              src="/banner.png"
              alt="Skinsa Body Treatment"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid rgba(201,169,110,0.6)',
                    animation: 'waveRing 3.2s cubic-bezier(0,0,0.2,1) infinite',
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>

            <div
              className="absolute bottom-4 left-4 right-4 z-10 px-4 py-2.5 flex items-center gap-3"
              style={{
                backgroundColor: 'rgba(0,0,0,0.72)',
                borderRadius: '10px 0 10px 0',
                border: `1px solid rgba(201,169,110,0.3)`,
              }}
            >
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
              <span className="text-[11.5px] font-semibold text-white/80 tracking-wide">
                100% Non-Surgical - Advanced Body Contouring
              </span>
            </div>
          </div>
        </div>

        <div data-reveal="bottom" data-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-2.5 mb-7 lg:mb-8">
          {services.map((s) => (
            <div key={s.no} className="flex items-center gap-2.5">
              <span
                className="text-[11px] font-black shrink-0"
                style={{ color: GOLD }}
              >
                {s.no}
              </span>
              <span
                className="h-px w-4 shrink-0"
                style={{ backgroundColor: 'rgba(201,169,110,0.4)' }}
              />
              <span className="text-[12px] lg:text-[12.5px] text-white/65 font-medium leading-tight">
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div data-reveal="bottom" data-delay="400">
        <BookingButton
          ariaLabel="Book your consultation"
          className="inline-flex items-center self-start gap-3 px-8 sm:px-9 py-3.5 text-[11.5px] sm:text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200"
          style={{
            backgroundColor: GOLD,
            color: '#000',
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

      {/* ══════════════════════════════
          MOBILE / TABLET — Image below content
      ══════════════════════════════ */}
      <div data-reveal="bottom" data-delay="250" className="hidden sm:block lg:hidden relative w-full px-6 sm:px-10 pb-16 mt-2">
        <div
          className="relative w-full h-[300px] sm:h-[380px] overflow-hidden"
          style={{
            borderRadius: '40px 0 40px 0',
            border: `1.5px solid rgba(201,169,110,0.4)`,
          }}
        >
          <Image
            src="/banner.png"
            alt="Skinsa Body Treatment"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Wave rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '100px',
                  height: '100px',
                  border: '1px solid rgba(201,169,110,0.6)',
                  animation: 'waveRing 3.2s cubic-bezier(0,0,0.2,1) infinite',
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>

          {/* Floating label */}
          <div
            className="absolute bottom-4 left-4 right-4 z-10 px-4 py-2.5 flex items-center gap-3"
            style={{
              backgroundColor: 'rgba(0,0,0,0.72)',
              borderRadius: '10px 0 10px 0',
              border: `1px solid rgba(201,169,110,0.3)`,
            }}
          >
            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
            <span className="text-[11.5px] font-semibold text-white/80 tracking-wide">
              100% Non-Surgical · Advanced Body Contouring
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          RIGHT — Framed Image (desktop only)
      ══════════════════════════════ */}
      <div data-reveal="right" data-delay="180" className="relative hidden lg:flex items-center justify-center w-[40%] shrink-0 px-8 py-10 pb-14 lg:mr-15">

        {/* Gold dot grid — top right */}
        <div className="absolute top-6 right-4 grid grid-cols-5 gap-[6px] z-10 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="w-[4px] h-[4px] rounded-full"
              style={{ backgroundColor: GOLD, opacity: 0.35 }}
            />
          ))}
        </div>

        {/* Gold dot grid — bottom left */}
        <div className="absolute bottom-12 left-4 grid grid-cols-5 gap-[6px] z-10 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="w-[4px] h-[4px] rounded-full"
              style={{ backgroundColor: GOLD, opacity: 0.35 }}
            />
          ))}
        </div>

        {/* ── Main image card — brand diagonal shape ── */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            borderRadius: '60px 0 60px 0',
            border: `1.5px solid rgba(201,169,110,0.4)`,
          }}
        >
          <Image
            src="/banner.png"
            alt="Skinsa Body Treatment"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Wave rings — centred on image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width:  '140px',
                  height: '140px',
                  border: '1px solid rgba(201,169,110,0.6)',
                  animation: 'waveRing 3.2s cubic-bezier(0,0,0.2,1) infinite',
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>

          {/* Floating label — bottom inside card */}
          <div
            className="absolute bottom-5 left-5 right-5 z-10 px-4 py-3 flex items-center gap-3"
            style={{
              backgroundColor: 'rgba(0,0,0,0.72)',
              borderRadius: '10px 0 10px 0',
              border: `1px solid rgba(201,169,110,0.3)`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: GOLD }}
            />
            <span className="text-[12px] font-semibold text-white/80 tracking-wide">
              100% Non-Surgical · Advanced Body Contouring
            </span>
          </div>

        </div>

      </div>

      {/* ══════════════════════════════
          BOTTOM — Gold Marquee Ticker
      ══════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden"
        style={{ backgroundColor: GOLD }}
      >
        <div
          className="flex w-max items-center py-2.5"
          style={{ animation: 'heroMarquee 28s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="px-5 sm:px-6 text-[11px] sm:text-[13px] font-black uppercase tracking-[0.08em] text-black whitespace-nowrap">
                {item}
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="black" aria-hidden="true">
                <path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6-2.6 7.9-2.6-7.9-7.9-2.6 7.9-2.6L12 1.5z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
