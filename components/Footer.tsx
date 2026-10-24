"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 88;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", "#contact");
      }
    }
  };

  return (
    <footer className="w-full bg-[#050507] border-t border-white/5 py-10 text-center text-xs text-[#6b7280]">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0088ff] inline-block shadow-[0_0_8px_#0088ff]" />
          <span className="text-gray-400 font-medium">Saad Zafar</span>
          <span className="text-gray-600">— Copywriting &amp; UI/UX Design</span>
        </div>
        <div className="text-[#4B607F]">
          © 2026 Saad Zafar. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://www.linkedin.com/in/saadzafarcopy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0088ff] transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/#contact"
            scroll={true}
            onClick={handleContactClick}
            className="text-gray-400 hover:text-[#0088ff] transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

