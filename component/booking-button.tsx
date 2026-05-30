"use client";

import Image from "next/image";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const GOLD  = "#C9A96E";
const BG    = "#0F3F37";
const GREEN = "#0F3F37";

type BookingButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  ariaLabel?: string;
};

export default function BookingButton({
  children,
  className,
  style,
  hoverStyle,
  ariaLabel,
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      source: "Website Popup Form",
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      concern: String(formData.get("concern") || ""),
      treatment: String(formData.get("treatment") || ""),
      pageUrl: window.location.href,
    };

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to submit the form");
      }

      window.location.href = "/thank-you";
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsTriggerHovered(true)}
        onMouseLeave={() => setIsTriggerHovered(false)}
        aria-label={ariaLabel}
        className={`cursor-pointer ${className || ""}`}
        style={{
          ...style,
          borderRadius: 0,
          ...(isTriggerHovered
            ? hoverStyle || { backgroundColor: GOLD, borderColor: GOLD, color: "#000000" }
            : {}),
        }}
      >
        {children}
      </button>

      {isMounted && isOpen &&
        createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-3 py-5 sm:px-5">
          <style>{`
            @keyframes bookingOfferIn {
              from { opacity: 0; transform: translateY(12px) scale(0.98); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }

            @keyframes bookingOfferShine {
              from { transform: translateX(-130%) skewX(-18deg); }
              to { transform: translateX(130%) skewX(-18deg); }
            }

            .booking-offer-card {
              position: relative;
              overflow: hidden;
              animation: bookingOfferIn 520ms cubic-bezier(0.22,1,0.36,1) both;
              transition: transform 220ms ease, border-color 220ms ease, background-color 220ms ease;
            }

            .booking-offer-card:nth-child(2) {
              animation-delay: 90ms;
            }

            .booking-offer-card::after {
              content: '';
              position: absolute;
              inset: -30% auto -30% 0;
              width: 38%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
              animation: bookingOfferShine 2600ms ease-in-out 850ms infinite;
              pointer-events: none;
            }

            .booking-offer-card:hover {
              transform: translateY(-3px);
              border-color: rgba(201,169,110,0.8);
              background-color: rgba(255,255,255,0.09);
            }

            @media (prefers-reduced-motion: reduce) {
              .booking-offer-card,
              .booking-offer-card::after {
                animation: none;
              }
            }
          `}</style>
          <div
            style={{ backgroundColor: BG }}
            className="relative my-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[10px] border border-white/30 text-white shadow-2xl lg:grid-cols-[1fr_0.95fr] lg:rounded-20"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close booking form"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center text-white transition"
              style={{ backgroundColor: GREEN, border: `1px solid ${GOLD}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = GOLD; (e.currentTarget as HTMLButtonElement).style.color = '#000'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = GREEN; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                &times;
              </span>
            </button>

            <form
              onSubmit={handleSubmit}
              className="order-1 flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-8 lg:min-h-[560px] lg:px-10 lg:py-8"
            >
              <div className="w-full max-w-[520px] lg:mx-auto">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.35em]"
                      style={{ color: GOLD }}
                    >
                      Book Appointment
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-2xl">
                      Request a Consultation
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Fill in your details. We will contact you shortly.
                    </p>
                  </div>

                  <div className="grid shrink-0 grid-cols-2 gap-2 sm:w-[150px] sm:grid-cols-1">
                    <div className="booking-offer-card border border-[#C9A96E]/45 bg-white/[0.06] px-3 py-2.5 text-center">
                      <p className="text-[18px] font-black leading-none text-[#C9A96E]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                        45% OFF
                      </p>
                      <p className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/75">
                        Overall Fat Loss
                      </p>
                    </div>
                    <div className="booking-offer-card border border-[#C9A96E]/45 bg-white/[0.06] px-3 py-2.5 text-center">
                      <p className="text-[18px] font-black leading-none text-[#C9A96E]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                        35% OFF
                      </p>
                      <p className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/75">
                        Fat Reduction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3.5">
                  <label className="grid gap-2 text-sm font-medium text-white/80">
                    Full Name
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-white/10 bg-white px-4 py-2.5 text-sm text-black outline-none transition focus:border-[#C9A96E]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-white/80">
                    Phone Number
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+91 80070 70530"
                      className="w-full border border-white/10 bg-white px-4 py-2.5 text-sm text-black outline-none transition focus:border-[#C9A96E]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-white/80">
                    Concern
                    <select
                      required
                      name="concern"
                      className="w-full border border-white/10 bg-white px-4 py-2.5 text-sm text-black outline-none transition focus:border-[#C9A96E]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select concern
                      </option>
                      <option>Stubborn belly fat</option>
                      <option>Post-pregnancy weight gain</option>
                      <option>Thighs, arms, back, or chin fat</option>
                      <option>Overall inch loss</option>
                      <option>Body shaping and definition</option>
                      <option>Metabolism and wellness support</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-white/80">
                    Treatment
                    <select
                      required
                      name="treatment"
                      className="w-full border border-white/10 bg-white px-4 py-2.5 text-sm text-black outline-none transition focus:border-[#C9A96E]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select treatment
                      </option>
                      <option>Overall Fat Loss Programs</option>
                      <option>Targeted Fat Reduction</option>
                      <option>Body Sculpting &amp; Contouring</option>
                      <option>Wellness &amp; Metabolism Support</option>
                    </select>
                  </label>

                  {error && (
                    <p className="border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm leading-6 text-red-100">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 w-full cursor-pointer bg-[#C9A96E] px-6 py-3 text-sm font-bold tracking-[0.14em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </div>
            </form>

            <div className="order-2 relative min-h-[250px] overflow-hidden sm:min-h-[300px] lg:min-h-[560px]">
              <Image
                src="/banner.png"
                alt="Skinsa Aesthetic consultation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-black/70 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: GOLD }}>
                  Consultation
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Share your details and our team will call you to confirm the
                  best treatment plan and appointment slot.
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
