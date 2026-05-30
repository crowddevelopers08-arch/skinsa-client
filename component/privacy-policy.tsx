import type { Metadata } from "next";
import Link from "next/link";

const GOLD = "#C9A96E";

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact Skinsa Aesthetic, book an appointment, or submit an enquiry, we may collect details such as your name, phone number, email address, preferred appointment time, and treatment interests.",
      "We may also collect basic website usage information, such as pages visited and device/browser details, to help us improve the website experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, confirm appointments, provide clinic updates, and improve our services.",
      "We may use your contact details to share relevant appointment reminders or service information. You can ask us to stop promotional communication at any time.",
    ],
  },
  {
    title: "Sharing Of Information",
    body: [
      "We do not sell your personal information.",
      "We may share limited information with trusted service providers only when needed to operate the website, manage appointments, or communicate with you.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable steps to protect your personal information from unauthorised access, misuse, loss, or disclosure.",
      "No website or online transmission is completely secure, so we recommend sharing sensitive medical details only through appropriate clinic channels.",
    ],
  },
  {
    title: "Cookies And Website Analytics",
    body: [
      "Our website may use cookies or analytics tools to understand visitor activity and improve performance.",
      "You can manage or disable cookies through your browser settings.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may request access, correction, or deletion of your personal information by contacting us.",
      "We may retain certain information when required for appointment records, legal compliance, or legitimate business purposes.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Skinsa Aesthetic",
  description: "Privacy policy for Skinsa Aesthetic Clinic.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-[#0F3F37]">
      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <p
          data-reveal="top"
          className="text-xs font-bold uppercase tracking-[0.35em]"
          style={{ color: GOLD }}
        >
          Skinsa Aesthetic
        </p>
        <h1 data-reveal="left" data-delay="100" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p data-reveal="left" data-delay="200" className="mt-5 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
          This Privacy Policy explains how Skinsa Aesthetic collects, uses, and
          protects information shared through our website, enquiries, and
          appointment requests.
        </p>
        <p data-reveal="bottom" data-delay="300" className="mt-4 text-sm text-black/55">Effective date: May 27, 2026</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-10">
        <div className="grid gap-5">
          {policySections.map((section, index) => (
            <article
              key={section.title}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              data-delay={String(index * 90)}
              className="border border-[#0F3F37]/10 bg-[#0F3F37]/[0.04] p-5 sm:p-6"
            >
              <h2 className="text-xl font-semibold" style={{ color: GOLD }}>
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-black/65">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div data-reveal="bottom" data-delay="240" className="mt-8 border border-[#0F3F37]/10 bg-[#0F3F37]/[0.04] p-5 sm:p-6">
          <h2 className="text-xl font-semibold" style={{ color: GOLD }}>
            Contact Us
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-7 text-black/65">
            <p>
              For privacy-related questions, please contact Skinsa Aesthetic
              Clinic.
            </p>
            <p>
              Location: Shop no 101,102, B wing, shubh gateway, Opp.Symbiosis
              law school, viman Nagar, pune, Mh 411014.
            </p>
            <p>Email: info@skinsaa.com.</p>
            <p>Phone: +91 8446444858</p>
          </div>
        </div>

        <Link
          href="/"
          data-reveal="bottom"
          data-delay="320"
          className="mt-8 inline-flex cursor-pointer bg-[#C9A96E] px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:bg-[#2d726d] hover:text-white active:scale-95"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
