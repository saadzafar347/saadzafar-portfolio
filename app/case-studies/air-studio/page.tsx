import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers, Sliders, Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIR Studio - AI Story Creator Case Study | Saad Zafar",
  description:
    "Designing an intuitive, conversion-focused landing page for an AI-powered storytelling platform to maximize user acquisition and trial signups.",
};

export default function AirStudioCaseStudy() {
  return (
    <main className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 md:pt-32 pb-16 space-y-12">
      {/* Breadcrumb Navigation */}
      <div data-reveal="fade-up">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0088ff] hover:text-[#0077e6] transition-colors py-1.5 px-3 rounded-full bg-[#0088ff]/10 border border-[#0088ff]/20 active:scale-95 duration-100"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-8" id="hero">
        <div className="space-y-4">
          <div
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block opacity-0 translate-y-4 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            AI ART PLATFORM - UI/UX DESIGN
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f3f4f6] tracking-tight leading-[1.15] opacity-0 translate-y-6 animate-fade-in"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            AI Story Creator <span className="accent-italic">Landing Page Redesign</span>
          </h1>
          <p
            className="text-base md:text-lg text-[#d1d5db] max-w-3xl leading-relaxed font-normal opacity-0 translate-y-6 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            Designing an intuitive, conversion-focused landing page for an AI-powered storytelling
            platform to maximize user acquisition and trial signups.
          </p>
        </div>

        {/* 4-Column Metadata Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
        >
          <div className="card-interactive p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Client
            </span>
            <span className="text-sm font-semibold text-white block">NARRATORA AI</span>
          </div>
          <div className="card-interactive p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Role
            </span>
            <span className="text-sm font-semibold text-white block">Lead UI/UX &amp; Web Designer</span>
          </div>
          <div className="card-interactive p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Timeline
            </span>
            <span className="text-sm font-semibold text-white block">3 Weeks</span>
          </div>
          <div className="card-interactive p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Core Impact
            </span>
            <span className="text-sm font-semibold text-[#0088ff] block">+48% Trial Conversion</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CHALLENGE & OBJECTIVES */}
      <section className="space-y-8 border-t border-white/10 pt-12 md:pt-16" id="challenge">
        <div className="space-y-3" data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2 block">
            01 - PROBLEM DISCOVERY &amp; FRICTION ANALYSIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Challenge: Eliminating Creator <span className="accent-italic">Prompt Fatigue</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal="fade-up">
          {/* Column 1: Core Friction */}
          <div className="card-interactive p-7 md:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg">
                ✕
              </div>
              <h3 className="text-xl font-bold text-white">The Bottlenecks Facing AI Storytellers</h3>
              <ul className="space-y-4 text-sm text-[#d1d5db] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>
                    <strong>Inconsistent Character Generation:</strong> Traditional text-to-image
                    engines regenerate faces and outfits randomly between sequential narrative scenes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>
                    <strong>Overwhelming Tooling Complexity:</strong> Users were forced to manage
                    complex negative prompts, CFG scales, and latent denoise parameters manually.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>
                    <strong>Fragmented Storyboard Exports:</strong> Lack of visual timeline editors
                    meant authors struggled to piece individual images into readable digital chapters.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Strategic Solution */}
          <div className="card-interactive p-7 md:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#0088ff]/10 border border-[#0088ff]/20 flex items-center justify-center text-[#0088ff] font-bold text-lg">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">The Redesign Strategy &amp; Core Objectives</h3>
              <ul className="space-y-4 text-sm text-[#d1d5db] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0088ff] mt-2 shrink-0" />
                  <span>
                    <strong>Visual-First Story Demonstration:</strong> Replaced technical parameter
                    sliders with interactive, live-canvas storyboard previews directly in the hero
                    zone.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0088ff] mt-2 shrink-0" />
                  <span>
                    <strong>Frictionless Free Tier Onboarding:</strong> Redesigned the primary
                    call-to-action flow to enable instant prompt-to-story creation without mandatory
                    credit cards.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0088ff] mt-2 shrink-0" />
                  <span>
                    <strong>Demystified Feature Breakdown:</strong> Structured the page into intuitive
                    narrative steps (Character Locking, Scene Prompting, Multi-Format Comic Export).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WORKFLOW ARCHITECTURE */}
      <section className="space-y-8 border-t border-white/10 pt-12 md:pt-16" id="workflows">
        <div className="space-y-3" data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2 block">
            02 - USER EXPERIENCE FLOW &amp; WORKFLOW ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            AI Generation Workflows &amp; <span className="accent-italic">Interface Ergonomics</span>
          </h2>
          <p className="text-sm md:text-base text-[#d1d5db] max-w-2xl leading-relaxed">
            Streamlining the friction between initial creative conception and multi-scene graphic
            production through intentional UX pacing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up">
          {/* Step 1 */}
          <div className="card-interactive p-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl font-extrabold text-[#0088ff]/40 font-mono">01</span>
              <h3 className="text-lg font-bold text-white">Character DNA Definition</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Creators upload or describe their protagonist once. The engine assigns a locked
                Character ID hash ensuring facial features, clothing, and posture persist across all
                future scenes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-interactive p-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl font-extrabold text-[#c084fc]/40 font-mono">02</span>
              <h3 className="text-lg font-bold text-white">Multi-Scene Timeline Canvas</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Instead of generating isolated pictures, the interface presents a sequential comic-strip
                timeline where narrative beats can be rearranged, re-angled, or extended in real
                time.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-interactive p-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl font-extrabold text-emerald-500/40 font-mono">03</span>
              <h3 className="text-lg font-bold text-white">Instant Cross-Format Export</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Export generated graphic novellas as interactive web reader links, print-ready PDF book
                spreads, or vertical scroll webtoons with zero manual resizing required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DESIGN SYSTEM & VISUAL ASSETS */}
      <section className="space-y-8 border-t border-white/10 pt-12 md:pt-16" id="design-system">
        <div className="space-y-3" data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2 block">
            03 - DESIGN TOKENS &amp; VISUAL FOUNDATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Design System, Typography &amp; <span className="accent-italic">Color Tokens</span>
          </h2>
          <p className="text-sm md:text-base text-[#d1d5db] max-w-2xl leading-relaxed">
            Standardized visual tokens balancing dark high-contrast elegance with legible, accessible
            hierarchy.
          </p>
        </div>

        {/* Color Tokens Palette */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" data-reveal="fade-up">
          <div className="card-interactive p-4 space-y-3">
            <div className="h-14 rounded-lg bg-[#0a0a0c] border border-white/10 flex items-end p-2">
              <span className="text-[10px] font-mono text-[#9ca3af]">#0a0a0c</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Brand Dark</h4>
              <p className="text-[11px] text-[#9ca3af]">Primary Page Canvas</p>
            </div>
          </div>

          <div className="card-interactive p-4 space-y-3">
            <div className="h-14 rounded-lg bg-[#121216] border border-white/20 flex items-end p-2">
              <span className="text-[10px] font-mono text-[#9ca3af]">#121216</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Surface Card</h4>
              <p className="text-[11px] text-[#9ca3af]">Card &amp; Container Background</p>
            </div>
          </div>

          <div className="card-interactive p-4 space-y-3">
            <div className="h-14 rounded-lg bg-[#0088ff] flex items-end p-2">
              <span className="text-[10px] font-mono text-black font-semibold">#0088FF</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Electric Blue</h4>
              <p className="text-[11px] text-[#9ca3af]">Interactive CTAs &amp; Focus</p>
            </div>
          </div>

          <div className="card-interactive p-4 space-y-3">
            <div className="h-14 rounded-lg bg-[#c084fc] flex items-end p-2">
              <span className="text-[10px] font-mono text-black font-semibold">#C084FC</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Lavender Accent</h4>
              <p className="text-[11px] text-[#9ca3af]">Editorial Italic Highlights</p>
            </div>
          </div>
        </div>

        {/* Typography Pairing Card */}
        <div className="card-interactive p-7 md:p-8 space-y-6" data-reveal="fade-up">
          <h3 className="text-base font-semibold text-white tracking-tight">
            Typography Pairing &amp; Hierarchy Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/[0.06]">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#0088ff] font-semibold">
                Primary Sans-Serif
              </span>
              <p className="text-2xl font-bold text-white font-sans">Inter Tight &amp; Display</p>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Employed for all functional UI labels, navigation anchors, statistical metrics, card
                descriptions, and core body text.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#c084fc] font-semibold">
                Accent Serif (Editorial)
              </span>
              <p className="text-2xl font-normal accent-italic">Playfair Display Italic</p>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Selectively applied to key conceptual phrases within hero headings to convey
                bespoke literary craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEHANCE CALL-TO-ACTION */}
      <section
        className="card-interactive rounded-2xl md:rounded-3xl p-8 md:p-14 text-center space-y-6 shadow-2xl mb-8 md:mb-10 bg-gradient-to-r from-[#0088ff]/15 via-[#13121d] to-[#c084fc]/15 border border-[#0088ff]/25"
        data-reveal="fade-up"
        id="behance-cta"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2 block">
            DEEP-DIVE DOCUMENTATION
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Want to explore the complete <span className="accent-italic">design process?</span>
          </h2>
          <p className="text-sm md:text-base text-[#d1d5db] leading-relaxed font-normal">
            Explore complete wireframe archives, user journey flows, and high-resolution Figma
            design system tokens on Behance.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="cta-glow-btn inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0088ff] text-white font-bold tracking-wide text-sm shadow-[0_0_20px_rgba(0,136,255,0.35)] hover:bg-[#0077e6] active:scale-95 transition-all"
              href="https://www.behance.net/gallery/256947413/AI-Story-Creator-Landing-Page-UIUX-Case-Study"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>View on Behance</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white font-medium text-sm transition-all"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
