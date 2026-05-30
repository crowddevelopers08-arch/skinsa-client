import Image from 'next/image'
import BookingButton from '@/component/booking-button'

const GOLD = '#C9A96E'
const BG   = '#FFFFFF'
const DARK = '#0F3F37'

const offers = [
  { tag: '01', img: '/offer-img.png', discount: '45' },
  { tag: '02', img: '/offer-img-2.png', discount: '35' },
]

export default function Offers() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full py-8 sm:py-16 lg:py-10 px-6">
      <div className="mx-auto max-w-5xl">

        {/* ── Section Header ── */}
        <div data-reveal="top" className="flex flex-col items-center text-center mb-8 lg:mb-10">
          <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase"
              style={{ color: GOLD }}
            >
              Offers
            </span>
            <span className="h-[1px] w-10 lg:w-16" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-[#0F3F37] uppercase tracking-[0.04em] leading-tight mb-2 lg:mb-3">
            Limited Time Offers
          </h2>
          <p className="text-[12.5px] sm:text-[14px] text-black/55 tracking-wide">
            Exclusive deals this month — don&apos;t miss out
          </p>
        </div>

        {/* ── Offer Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 lg:mb-14">
          {offers.map((offer) => (
            <div
              key={offer.tag}
              data-reveal={offer.tag === '01' ? 'left' : 'right'}
              data-delay={String(Number(offer.tag) * 120)}
              className="relative overflow-hidden h-[280px] sm:h-[400px] md:h-[540px]" style={{ borderRadius: '10px' }}
            >
              <Image
                src={offer.img}
                alt={`Offer ${offer.tag}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div data-reveal="bottom" data-delay="300" className="flex justify-center">
          <BookingButton
            ariaLabel="Book free consultation"
            className="inline-flex items-center gap-2.5 sm:gap-3 border px-8 sm:px-10 py-3 sm:py-3.5 text-[12px] sm:text-[13.5px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#0F3F37] hover:border-[#0F3F37] hover:text-white active:scale-95"
            style={{ borderColor: GOLD, color: 'black' }}
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

      </div>
    </section>
  )
}
