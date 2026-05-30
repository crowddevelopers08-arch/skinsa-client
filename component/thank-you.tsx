import Link from "next/link";

const GOLD = "#C9A96E";

const nextSteps = [
  {
    title: "Our team will call you",
    description:
      "A Skinsa Aesthetic coordinator will contact you shortly to confirm your details and preferred appointment time.",
  },
  {
    title: "Keep your phone nearby",
    description:
      "Please stay available on the number you shared so we can complete your booking without delay.",
  },
  {
    title: "Visit the clinic",
    description:
      "Our clinic is located at Shop no 101,102, B wing, Shubh Gateway, Opp. Symbiosis Law School, Viman Nagar, Pune, MH 411014.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="bg-white text-[#0F3F37]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16 xl:px-10">
        <div data-reveal="left">
          <p
            data-reveal="top"
            className="text-xs font-bold uppercase tracking-[0.35em]"
            style={{ color: GOLD }}
          >
            Skinsa Aesthetic
          </p>
          <h1 data-reveal="left" data-delay="100" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Thank You
          </h1>
          <p data-reveal="left" data-delay="200" className="mt-5 max-w-xl text-sm leading-7 text-black/65 sm:text-base">
            Your enquiry has been received. Our team will connect with you soon
            to help you with consultation details and appointment confirmation.
          </p>

          <div data-reveal="bottom" data-delay="300" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex cursor-pointer justify-center bg-[#C9A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:bg-[#2d726d] hover:text-white active:scale-95"
            >
              Back to Home
            </Link>
            <Link
              href="tel:+918446444858"
              className="inline-flex cursor-pointer justify-center border border-[#0F3F37]/25 px-6 py-2.5 text-sm font-semibold tracking-wide text-[#0F3F37] transition-all duration-200 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-black active:scale-95"
            >
              Call +91 8446444858
            </Link>
          </div>
        </div>

        <div data-reveal="right" data-delay="150" className="border border-[#C9A96E]/35 bg-[#0F3F37]/[0.04] p-5 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-semibold" style={{ color: GOLD }}>
            What Happens Next?
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
            {nextSteps.map((step, index) => (
              <article key={step.title} data-reveal="bottom" data-delay={String(index * 120)} className="border border-[#0F3F37]/10 bg-white p-4">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-black"
                    style={{ backgroundColor: GOLD }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#0F3F37]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
