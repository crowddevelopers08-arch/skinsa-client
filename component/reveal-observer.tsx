"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observedElements = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const registerElements = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      elements.forEach((element) => {
        if (observedElements.has(element)) return;
        observedElements.add(element);

        const delay = element.dataset.delay;
        if (delay) element.style.transitionDelay = `${delay}ms`;

        if (prefersReducedMotion) {
          element.classList.add("is-visible");
          return;
        }

        observer.observe(element);
      });
    };

    const firstFrame = requestAnimationFrame(() => {
      requestAnimationFrame(registerElements);
    });

    const mutationObserver = new MutationObserver(registerElements);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
