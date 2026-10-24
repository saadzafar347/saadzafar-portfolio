"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: getHref("#case-studies") },
    { label: "Services", href: getHref("#services") },
    { label: "How I Work", href: getHref("#how-i-work") },
    { label: "About", href: getHref("#about") },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If clicking Home on the homepage, smoothly scroll to top
    if (href === "/") {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
        setMobileMenuOpen(false);
      }
      return;
    }

    // If on homepage and clicking an in-page anchor link (e.g. #about or /#about)
    const normalizedHash = href.startsWith("/#") ? href.slice(1) : href;
    if (isHome && normalizedHash.startsWith("#")) {
      e.preventDefault();
      const targetId = normalizedHash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 88; // 80px fixed header + 8px clearance
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", normalizedHash);
      }
      setMobileMenuOpen(false);
    } else {
      // Cross-page navigation: reset viewport scroll so it doesn't load from bottom offset
      window.scrollTo(0, 0);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="inline-flex items-center group active:scale-95 transition-transform duration-100 ease-out"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0088ff] shadow-[0_0_10px_#0088ff] mr-2.5 animate-pulse" />
            <span className="text-[#f3f4f6] font-bold text-lg md:text-xl tracking-tight group-hover:text-white transition-colors">
              Saad Zafar
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={true}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-[#9ca3af] hover:text-white hover:bg-white/5 rounded-md transition-all duration-150 ease-out inline-flex items-center cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <Link
              href={getHref("#contact")}
              scroll={true}
              onClick={(e) => handleNavClick(e, getHref("#contact"))}
              className="cta-glow-btn inline-flex items-center justify-center h-10 px-5 py-2 text-xs md:text-sm font-semibold rounded-full bg-[#0088ff] text-white hover:bg-[#0077e6] shadow-[0_4px_14px_rgba(0,136,255,0.35)] active:scale-[0.96] active:brightness-125 transition-all duration-100 ease-out will-change-transform cursor-pointer"
            >
              Work with me
            </Link>

            {/* Mobile & Tablet Hamburger Button */}
            <button
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col justify-center items-center w-9 h-9 p-1.5 text-white focus:outline-none active:scale-90 transition-transform duration-150 ease-out ${
                mobileMenuOpen ? "menu-open" : ""
              }`}
            >
              <span className="menu-bar bar-1 block w-5 h-0.5 bg-[#f3f4f6] rounded-full mb-1" />
              <span className="menu-bar bar-2 block w-5 h-0.5 bg-[#f3f4f6] rounded-full mb-1" />
              <span className="menu-bar bar-3 block w-5 h-0.5 bg-[#f3f4f6] rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 w-full bg-[#0a0a0c]/98 backdrop-blur-xl border-b border-white/10 z-40 transition-all shadow-2xl">
          <div className="max-w-[1100px] mx-auto px-6 py-6 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={true}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#9ca3af] hover:text-white transition-colors duration-200 py-2.5 px-2 rounded-lg hover:bg-white/5 block cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={getHref("#contact")}
                scroll={true}
                onClick={(e) => handleNavClick(e, getHref("#contact"))}
                className="w-full text-center py-3 text-sm font-semibold rounded-full bg-[#0088ff] text-white block shadow-[0_4px_12px_rgba(0,136,255,0.3)] cursor-pointer"
              >
                Work with me
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
