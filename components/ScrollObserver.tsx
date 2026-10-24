"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  // Set manual scroll restoration and force scroll to top on every initial page mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable browser scroll restoration so it never auto-jumps to a saved position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Detect page reload using Performance Navigation API
    const navEntries = performance.getEntriesByType?.("navigation") as PerformanceNavigationTiming[] | undefined;
    // Fallback: legacy performance.navigation (type 1 = reload) for older browsers
    type LegacyPerfType = { navigation?: { type: number } };
    const legacyNav = (window.performance as unknown as LegacyPerfType)?.navigation;
    const isReload =
      navEntries && navEntries.length > 0
        ? navEntries[0].type === "reload"
        : legacyNav?.type === 1;

    // On reload: strip hashes (prevent hash jump) and scroll to top
    if (isReload && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // Always ensure we start at the top on mount (reload or fresh load without a hash)
    if (!window.location.hash || isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
            }
          });
        },
        {
          rootMargin: "0px 0px -50px 0px",
          threshold: 0.1,
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    const cleanup = handleScrollReveal();
    // Also trigger immediately for elements already in viewport
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("is-in-view");
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}
