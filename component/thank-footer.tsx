import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/component/booking-button";

const GOLD = "#C9A96E";
const BG   = "#2d726d";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

const contactDetails = [
  {
    label: "Location",
    value:
      "Shop no 101,102, B wing, shubh gateway, Opp.Symbiosis law school, viman Nagar, pune, Mh 411014.",
  },
  { label: "Phone", value: "+91 8446444858" },
];

export default function Footers() {
  return (
    <footer style={{ backgroundColor: BG }} className="text-white">
      <div className="mx-auto grid max-w-7xl gap-8 max-sm:gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.4fr] lg:px-8 xl:px-10">
        <div className="space-y-5">
          <Link href="/" aria-label="Skinsa Aesthetic Home" className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Skinsa Aesthetic"
              width={210}
              height={86}
              className="h-auto w-[160px] object-contain sm:w-[180px]"
            />
          </Link>
          <p className="max-w-sm text-sm leading-7 text-white/100">
            Premium aesthetic skincare clinic focused on personalised care,
            advanced treatments, and refined results.
          </p>
          <BookingButton
            ariaLabel="Book appointment"
            className="inline-flex bg-[#C9A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:bg-[#0F3F37] hover:text-white active:scale-95"
            hoverStyle={{
              backgroundColor: 'WHITE',
              borderColor: '#2d726d',
              color: 'BLACK',
            }}
          >
            Book Appointment
          </BookingButton>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/90 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: GOLD }}
          >
            Contact Us
          </h2>
          <ul className="mt-5 space-y-1">
            {contactDetails.map((detail) => (
              <li key={detail.label} className="text-sm leading-6 text-white/100">
                <span className="block font-semibold text-white">
                  {detail.label}
                </span>
                <span>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
            Visit Us
          </h2>
          <div className="mt-5 overflow-hidden rounded-tl-[32px] rounded-br-[32px] border border-white/15 bg-white/5">
            <iframe
              title="Skinsa Aesthetic Clinic location map"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d42017.06488967416!2d73.89896950179276!3d18.583703416770764!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20no%20101%2C102%2C%20B%20wing%2C%20shubh%20gateway%2C%20Opp.Symbiosis%20law%20school%2C%20viman%20Nagar%2C%20pune%2C%20Mh%20411014!5e0!3m2!1sen!2sus!4v1779885414989!5m2!1sen!2sus"
              className="h-[240px] w-full border-0 sm:h-[280px] lg:h-[260px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-sm:mb-15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-10">
          <p>&copy; {new Date().getFullYear()} Skinsa Aesthetic. All rights reserved.</p>
          <Link
            href="/privacy-policy"
            className="text-sm text-white/90 transition-colors duration-200 hover:text-[#C9A96E]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
