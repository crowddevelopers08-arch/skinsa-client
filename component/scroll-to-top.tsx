'use client'

const GOLD = '#C9A96E'

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed right-3 bottom-35 translate-y-1/2 z-50 hidden flex-col items-center gap-3 cursor-pointer group md:flex"
      style={{ paddingLeft: '10px' }}
    >
      {/* Rotated label */}
      <span
        className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/70 group-hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Scroll to top
      </span>

      {/* Vertical line */}
      <span
        className="w-[1.5px] h-10 rounded-full transition-all duration-200 group-hover:h-14"
        style={{ backgroundColor: GOLD, opacity: 1.5 }}
      />
    </button>
  )
}
