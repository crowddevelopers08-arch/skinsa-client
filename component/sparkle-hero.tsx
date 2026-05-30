'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Treatments", href: "/#treatments" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

export default function JewelryHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;500&display=swap');

        /* ── KEYFRAMES ── */
        @keyframes heroFromTop {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFromLeft {
          from { opacity: 0; transform: translateX(-52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFromRight {
          from { opacity: 0; transform: translateX(52px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFromBottom {
          from { opacity: 0; transform: translateY(52px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Initial hidden state for all animated elements */
        .jw-nav,
        .jw-badge,
        .jw-title,
        .jw-left,
        .jw-center,
        .jw-right,
        .jw-marquee,
        .jw-mobile-top {
          opacity: 0;
        }

        /* One-by-one stagger: each element starts after the previous finishes */
        .hero-loaded .jw-nav        { animation: heroFromTop    0.75s cubic-bezier(0.22,1,0.36,1) 0.1s  forwards; }
        .hero-loaded .jw-mobile-top { animation: heroFromTop    0.75s cubic-bezier(0.22,1,0.36,1) 0.1s  forwards; }
        .hero-loaded .jw-badge      { animation: heroFromTop    0.75s cubic-bezier(0.22,1,0.36,1) 0.7s  forwards; }
        .hero-loaded .jw-title      { animation: heroFromTop    0.75s cubic-bezier(0.22,1,0.36,1) 1.3s  forwards; }
        .hero-loaded .jw-left       { animation: heroFromLeft   0.85s cubic-bezier(0.22,1,0.36,1) 1.95s forwards; }
        .hero-loaded .jw-center     { animation: heroFromBottom 0.85s cubic-bezier(0.22,1,0.36,1) 1.95s forwards; }
        .hero-loaded .jw-right      { animation: heroFromRight  0.85s cubic-bezier(0.22,1,0.36,1) 2.65s forwards; }
        .hero-loaded .jw-marquee,
        .jw-marquee.hero-marquee-loaded { animation: heroFade 0.75s ease 3.3s forwards; }

        @media (prefers-reduced-motion: reduce) {
          .jw-nav, .jw-badge, .jw-title, .jw-left, .jw-center,
          .jw-right, .jw-marquee, .jw-mobile-top {
            opacity: 1 !important;
            animation: none !important;
          }
        }

        .jw {
          position: relative;
          isolation: isolate;
          background-image: url('/banner.png');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          color: #ffffff;
          overflow-x: hidden;
        }
        .jw::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background: inherit;
        }
        .jw::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(45,114,109,0.92) 0%, rgba(45,114,109,0.78) 48%, rgba(45,114,109,0.58) 100%),
            rgba(45,114,109,0.42);
        }

        /* ── DESKTOP / TABLET NAV ── */
        .jw-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 36px;
          padding: 18px 48px 14px;
        }
        .jw-nav a, .jw-nav-pages {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .jw-nav a:hover { color: #C9A96E; }

        /* ── MOBILE TOP BAR (logo + hamburger) ── */
        .jw-mobile-top {
          display: none; /* shown only on mobile via media query */
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px 8px;
        }

        /* ── HAMBURGER BUTTON ── */
        .jw-toggle {
          background: none;
          border: 1px solid rgba(201,169,110,0.55);
          padding: 8px 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .jw-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          background: #C9A96E;
          border-radius: 1px;
          transition: transform 0.25s, opacity 0.25s;
        }
        .jw-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .jw-toggle.open span:nth-child(2) { opacity: 0; width: 0; }
        .jw-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE DROPDOWN MENU ── */
        .jw-mobile-menu {
          position: absolute;
          top: 0; left: 0; right: 0;
          background: rgba(45,114,109,0.98);
          border-bottom: 1px solid rgba(201,169,110,0.3);
          padding: 12px 18px 18px;
          z-index: 200;
          backdrop-filter: blur(12px);
        }
        .jw-mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .jw-mobile-menu nav {
          display: flex;
          flex-direction: column;
        }
        .jw-mobile-menu nav a {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          text-transform: uppercase;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s;
        }
        .jw-mobile-menu nav a:last-child { border-bottom: none; }
        .jw-mobile-menu nav a:hover { color: #C9A96E; }

        /* ── LOGO BADGE ── */
        .jw-badge {
          display: flex;
          justify-content: center;
          margin: 8px auto 10px;
        }
        .jw-logo {
          width: 220px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        /* ── HERO TITLE ── */
        .jw-title {
          font-weight: 700;
          font-size: clamp(56px, 6.2vw, 90px);
          color: #ffffff;
          letter-spacing: 0.025em;
          line-height: 0.92;
          text-align: center;
          white-space: nowrap;
          padding: 12px 0 36px;
          width: 100%;
        }

        /* ── 3-COL GRID ── */
        .jw-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) 330px minmax(0,1fr);
          column-gap: 62px;
          align-items: start;
          padding: 6px 52px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .jw-left {
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          align-items: flex-end;
        }
        .stat-block {
          width: min(100%, 310px);
          margin-bottom: 22px;
          padding: 20px 22px;
          border: 1px solid rgba(201,169,110,0.44);
          border-radius: 18px;
          background: transparent;
        }
        .stat-block:last-child { margin-bottom: 0; }
        .stat-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
        }
        .stat-star {
          font-size: 15px;
          line-height: 1;
          color: #C9A96E;
          flex-shrink: 0;
        }
        .stat-label {
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 700;
          color: #C9A96E;
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .stat-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 100%;
          padding-left: 24px;
        }

        .jw-center { display: flex; justify-content: center; }
        .big-img {
          width: 330px;
          height: 430px;
          border-radius: 96px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
          border: 2px solid #DCC48E;
          background: transparent;
        }
        .big-img-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: inherit;
          background: linear-gradient(168deg, #2d726d 0%, #3f8d87 46%, #C9A96E 100%);
        }
        .big-img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          display: block;
        }

        .jw-right {
          display: flex;
          flex-direction: column;
          height: 430px;
          padding-top: 10px;
        }
        .sparkle-svg {
          width: 26px; height: 26px;
          fill: #C9A96E;
          margin-bottom: 16px;
          display: block;
          flex-shrink: 0;
        }
        .jw-quote {
          font-size: 14.5px;
          color: rgba(255,255,255,0.88);
          line-height: 1.8;
          max-width: 290px;
        }
        .small-img {
          width: 162px;
          height: 222px;
          border-radius: 56px;
          overflow: hidden;
          margin-top: 20px;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
          border: 2px solid #DCC48E;
          background: transparent;
        }
        .small-img-inner {
          width: 100%; height: 100%;
          overflow: hidden;
          border-radius: inherit;
          background: linear-gradient(158deg, #2d726d 0%, #3f8d87 52%, #C9A96E 100%);
        }
        .small-img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          display: block;
        }

        /* ── MARQUEE ── */
        .jw-marquee {
          margin-bottom:18px;
          margin-top: 0px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(180deg, #DCC48E 0%, #C9A96E 100%);
          color: #2d726d;
          border-top: 1px solid rgba(45,114,109,0.35);
          border-bottom: 0;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
          clip-path: polygon(
            0 0, 100% 0,
            100% 92%, 90% 100%, 80% 92%, 70% 100%, 60% 92%,
            50% 100%, 40% 92%, 30% 100%, 20% 92%, 10% 100%, 0 92%
          );
        }
        .jw-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: jwMarquee 26s linear infinite;
        }
        .jw-marquee span {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 10px 8px 12px;
          font-size: clamp(22px, 1.6vw, 25px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-transform: uppercase;
          text-shadow: 0 1px 0 rgba(0,0,0,0.22);
        }
        .jw-marquee span::after {
          content: '\\2726';
          width: auto;
          height: auto;
          border: 0;
          background: transparent;
          color: #2d726d;
          font-size: 0.82em;
          line-height: 1;
          transform: none;
          flex-shrink: 0;
        }
        @keyframes jwMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .jw { min-height: auto; padding-bottom: 18px; background-position: center top; }
          .jw-nav { flex-wrap: wrap; gap: 14px 22px; padding: 16px 24px 10px; }
          .jw-nav a { font-size: 11px; letter-spacing: 0.12em; }
          .jw-logo { width: 190px; height: 62px; }
          .jw-title { font-size: clamp(42px, 8vw, 72px); white-space: normal; padding: 10px 20px 28px; }
          .jw-grid { grid-template-columns: minmax(0,1fr) 280px; column-gap: 30px; row-gap: 28px; padding: 0 28px; }
          .jw-left { align-items: flex-start; padding-top: 0; }
          .stat-block { margin-bottom: 28px; }
          .stat-desc { max-width: 100%; }
          .big-img { width: 280px; height: 365px; border-radius: 82px; }
          .jw-right { grid-column: 1 / -1; height: auto; padding-top: 0; }
          .jw-quote { max-width: 620px; }
          .small-img { width: 138px; height: 190px; border-radius: 48px; }
          .jw-marquee { margin-top: 0; margin-bottom: 12px; }
          .jw-marquee span { padding: 9px 22px 10px; font-size: clamp(20px, 3.8vw, 32px); }
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .jw { background-position: center top; }
          .jw::after {
            background:
              linear-gradient(180deg, rgba(45,114,109,0.94) 0%, rgba(45,114,109,0.82) 54%, rgba(45,114,109,0.72) 100%),
              rgba(45,114,109,0.48);
          }

          /* Hide desktop nav & standalone badge; show mobile top bar */
          .jw-nav   { display: none !important; }
          .jw-badge { display: none !important; }
          .jw-mobile-top { display: flex; }

          .jw-title { font-size: clamp(34px, 12vw, 48px); line-height: 1; padding: 8px 16px 22px; }

          .jw-grid { display: flex; flex-direction: column; gap: 24px; padding: 0 18px; }
          .jw-center { order: 1; width: 100%; }
          .jw-left   { order: 2; width: 100%; gap: 14px; }
          .jw-right  { order: 3; width: 100%; align-items: center; height: auto; padding-top: 0; }

          .stat-block {
            width: 100%;
            margin-bottom: 0;
            padding: 16px;
            border-radius: 16px;
          }
          .stat-row { margin-bottom: 10px; }
          .stat-label { font-size: 22px; }
          .stat-desc { padding-left: 0; font-size: 13px; line-height: 1.65; }

          .big-img { width: min(100%, 290px); height: 360px; border-radius: 82px; }

          .sparkle-svg { margin-bottom: 10px; }
          .jw-quote { font-size: 13.5px; line-height: 1.7; max-width: 100%; text-align: center; }

          /* last image — centered and bigger */
          .small-img {
            width: min(100%, 260px) !important;
            height: 280px !important;
            border-radius: 76px !important;
            margin: 20px auto 0 !important;
          }

          .jw-marquee span { gap: 14px; padding: 8px 8px 9px; font-size: 20px; }
        }
      `}</style>

      <div className={`jw${loaded ? ' hero-loaded' : ''}`} id="home">

        {/* ── MOBILE TOP BAR: logo + hamburger in one row ── */}
        <div className="jw-mobile-top">
          <div style={{ width: 150, height: 48, position: 'relative' }}>
            <Image
              src="/logo.svg"
              alt="Skinsa Aesthetic"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            className={`jw-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {menuOpen && (
          <div className="jw-mobile-menu">
            <div className="jw-mobile-menu-header">
              <div style={{ width: 140, height: 44, position: 'relative' }}>
                <Image src="/logo.svg" alt="Skinsa Aesthetic" fill className="object-contain" />
              </div>
              <button
                className="jw-toggle open"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span /><span /><span />
              </button>
            </div>
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* ── DESKTOP / TABLET NAV ── */}
        <nav className="jw-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── LOGO BADGE (desktop/tablet only) ── */}
        <div className="jw-badge">
          <div className="jw-logo">
            <Image
              src="/logo.svg"
              alt="Skinsa Aesthetic"
              width={210}
              height={66}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* ── TITLE ── */}
        <h1 className="jw-title">Shape Your Body With Ease</h1>

        {/* ── 3-COL GRID ── */}
        <div className="jw-grid">

          {/* LEFT */}
          <div className="jw-left">
            <div className="stat-block">
              <div className="stat-row">
                <span className="stat-star">✦</span>
                <span className="stat-label" style={{ fontFamily: "'DM Serif Display', serif" }}>45% OFF</span>
              </div>
              <h3 className="stat-label" style={{ fontSize: "20px", marginBottom: "10px", paddingLeft: "24px" }}>
                Overall Fat Loss
              </h3>
              {/* <p className="stat-desc">
                Get up to 45% Off<br />
                Valid till the end of this month only<br />
                100% Consultation Fee Refund upon booking a package
              </p> */}
            </div>
            <div className="stat-block">
              <div className="stat-row">
                <span className="stat-star">✦</span>
                <span className="stat-label" style={{ fontFamily: "'DM Serif Display', serif" }}>35% OFF</span>
              </div>
              <h3 className="stat-label" style={{ fontSize: "20px", marginBottom: "10px", paddingLeft: "24px" }}>
                Fat Reduction for Specific Areas
              </h3>
              {/* <p className="stat-desc">
                Get up to 35% Off<br />
                Valid till the end of this month only<br />
                100% Consultation Fee Refund upon booking a package
              </p> */}
            </div>
          </div>

          {/* CENTER */}
          <div className="jw-center">
            <div className="big-img">
              <div className="big-img-inner">
                <Image
                  src="/welcome.png"
                  alt="Body contouring transformation model"
                  width={739}
                  height={988}
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="jw-right">
            <svg className="sparkle-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5 L13.3 10.7 L22.5 12 L13.3 13.3 L12 22.5 L10.7 13.3 L1.5 12 L10.7 10.7 Z"/>
            </svg>
            <p className="jw-quote">
              &ldquo;Lose stubborn fat safely with advanced non-surgical treatments designed for visible inch loss and body contouring.&rdquo;
            </p>
            <div className="small-img">
              <div className="small-img-inner">
                <Image
                  src="/welcome-1.png"
                  alt="Fat loss treatment result model"
                  width={709}
                  height={1122}
                />
              </div>
            </div>
          </div>

        </div>

       


      </div>
       {/* ── MARQUEE ── */}
              <div className={`jw-marquee${loaded ? ' hero-marquee-loaded' : ''}`} aria-hidden="true">
          <div className="jw-marquee-track" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {[
              ...["Advanced Aesthetic Technology", "Expert-Guided Programs", "Customised Body Sculpting Solutions",],
              ...["Advanced Aesthetic Technology", "Expert-Guided Programs", "Customised Body Sculpting Solutions",],
            ].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
    </>
  );
}
