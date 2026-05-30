'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const LIME = '#C9A96E'
const BG   = '#2d726d'

const features = [
  {
    no: '01',
    img: '/who-img-1.png',
    title: 'Overall Fat Loss Programs',
    desc: 'Comprehensive programs designed to support inch loss, improve body contour, and help manage stubborn weight gain concerns.',
  },
  {
    no: '02',
    img: '/who-img-2.png',
    title: 'Targeted Fat Reduction',
    desc: 'Focus on specific areas such as the abdomen, thighs, arms, back, or chin with advanced body contouring solutions.',
  },
  {
    no: '03',
    img: '/who-img-3.png',
    title: 'Body Sculpting & Contouring',
    desc: 'Enhance natural body shape and improve definition with non-surgical contouring treatments.',
  },
  {
    no: '04',
    img: '/who-img-4.png',
    title: 'Wellness & Metabolism Support',
    desc: 'Support your transformation journey with wellness-focused therapies designed to complement your body goals.',
  },
]

function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  return (
    <div
      data-reveal="bottom"
      data-delay={String(i * 80)}
      className="why-card flex flex-col overflow-hidden h-full"
      style={{
        '--why-delay': `${i * 90}ms`,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid rgba(255,255,255,0.1)',
      } as React.CSSProperties}
    >
      <div className="relative w-full h-[239px] sm:h-[300px] shrink-0 overflow-hidden">
        <Image
          src={f.img}
          alt={f.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute top-3 left-3 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[11px] sm:text-[12px] font-bold text-white z-10"
          style={{ backgroundColor: LIME }}
        >
          {f.no}
        </div>
      </div>
      <div className="h-[2px] w-full shrink-0" style={{ backgroundColor: LIME, opacity: 0.6 }} />
      <div className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4 flex-1">
        <h3 className="text-[12px] sm:text-[16px] font-bold text-white leading-snug">
          {f.title}
        </h3>
        <p className="text-[11px] sm:text-[14.5px] text-white/85 leading-relaxed">
          {f.desc}
        </p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        section.classList.add('why-us-visible')
        observer.disconnect()
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setCurrent(i)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const firstCard = el.children[0] as HTMLElement
    if (!firstCard) return
    const cardWidth = firstCard.offsetWidth
    const gap = 12
    const idx = Math.min(
      Math.round(el.scrollLeft / (cardWidth + gap)),
      features.length - 1,
    )
    setCurrent(idx)
  }

  return (
    <>
      <style>{`
        .why-anim {
          opacity: 0;
          filter: blur(10px);
          transform: translate3d(0, 34px, 0);
          transition:
            opacity 850ms ease,
            filter 850ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--why-delay, 0ms);
          will-change: opacity, filter, transform;
        }

        .why-card {
          opacity: 0;
          filter: blur(10px);
          transform: translate3d(0, 42px, 0);
          transition:
            opacity 850ms ease,
            filter 850ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 250ms ease,
            background-color 250ms ease;
          transition-delay: var(--why-delay, 0ms);
          will-change: opacity, filter, transform;
        }

        .why-us-visible .why-anim,
        .why-us-visible .why-card {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0, 0, 0);
        }

        .why-card:hover {
          border-color: rgba(201,169,110,0.55);
          background-color: rgba(255,255,255,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-anim,
          .why-card {
            opacity: 1;
            filter: none;
            transform: none;
            transition: none;
          }
        }
      `}</style>
      <section
        ref={sectionRef}
        id="treatments"
        style={{ backgroundColor: BG }}
        className="w-full scroll-mt-28 py-10 sm:py-16 lg:py-20 px-6 overflow-hidden"
      >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="why-anim mb-8 sm:mb-10 lg:mb-14">
          <div className="flex items-center gap-2.5 mb-3 lg:mb-4">
            <span className="h-[2px] w-10 shrink-0" style={{ backgroundColor: LIME }} />
            <span
              className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: LIME }}
            >
             Our Treatments
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-white uppercase leading-[1.15]">
            Explore Our Fat{' '}
            <span style={{ color: LIME }}>Reduction &</span>
            <br />
            <span style={{ color: LIME }}>Body </span>
            Sculpting Solutions
          </h2>
        </div>

        {/* ── Mobile / Tablet: Carousel (hidden on lg+) ── */}
        <div className="why-anim lg:hidden" style={{ '--why-delay': '160ms',borderRadius: '20px 20px 20px 20px', } as React.CSSProperties}>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' ,}}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[78%] sm:w-[44%]"
              >
                <FeatureCard f={f} i={i} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2.5 mt-5">
            {features.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === current ? '22px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? LIME : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: 4-column grid (hidden below lg) — NEVER TOUCH ── */}
        <div className="hidden lg:grid grid-cols-4 gap-5 " >
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>

      </div>
      </section>
    </>
  )
}
