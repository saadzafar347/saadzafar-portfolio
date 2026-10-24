import Link from "next/link";
import { ArrowLeft, Target, Zap, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & High-CTR Thumbnail Showcase | Saad Zafar",
  description:
    "Crafting high-converting visual assets, editorial graphics, and high-CTR YouTube thumbnails engineered for maximum feed retention.",
};

export default function ThumbnailShowcaseCaseStudy() {
  return (
    <main className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 md:pt-32 pb-16 w-full">
      {/* Breadcrumb Navigation */}
      <div className="mb-8" data-reveal="fade-up">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0088ff] hover:text-[#0077e6] transition-colors py-1.5 px-3 rounded-full bg-[#0088ff]/10 border border-[#0088ff]/20 active:scale-95 duration-100"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="mb-14" id="hero-overview">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block opacity-0 translate-y-4 animate-fade-in"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          CASE STUDY • BRAND IDENTITY &amp; YOUTUBE THUMBNAILS
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f3f4f6] tracking-tight mb-4 leading-[1.15] opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Brand Identity &amp;{" "}
          <span className="accent-italic text-[#c084fc]">High-CTR</span> Thumbnail Showcase
        </h1>
        <p
          className="text-base md:text-lg text-[#9ca3af] max-w-3xl leading-relaxed mb-10 opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          Crafting high-converting visual assets, editorial graphics, and high-CTR YouTube thumbnails
          engineered for maximum feed retention.
        </p>

        {/* 4-Column Metadata Matrix */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-xl bg-[#121216] border border-white/10 mb-10 shadow-lg opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              CLIENT / NICHE
            </span>
            <p className="text-xs md:text-sm font-semibold text-white leading-snug">
              Media Channels, Geopolitical Analysts &amp; Creators
            </p>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              ROLE / SERVICE
            </span>
            <p className="text-xs md:text-sm font-semibold text-white leading-snug">
              Visual Identity, Graphic Design &amp; High-CTR Thumbnails
            </p>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              CORE FOCUS
            </span>
            <p className="text-xs md:text-sm font-semibold text-white leading-snug">
              Emotional Hooks, Composition &amp; CTR Optimization
            </p>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              KEY IMPACT
            </span>
            <p className="text-xs md:text-sm font-semibold text-[#10b981] leading-snug">
              High Organic Engagement across 17+ campaigns
            </p>
          </div>
        </div>

        {/* Hero Visual Display Collage */}
        <div
          className="rounded-xl border border-white/10 overflow-hidden shadow-2xl bg-[#121216] opacity-0 translate-y-8 animate-fade-in group"
          style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
        >
          <img
            alt="High-CTR YouTube Thumbnails Showcase Grid"
            className="w-full h-auto object-cover block transform transition duration-500 group-hover:scale-[1.01]"
            src="/images/img_14.png"
          />
        </div>
      </section>

      {/* SECTION 1: VISUAL STRATEGY */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14" id="visual-strategy">
        <span
          className="text-[#0088ff] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 block"
          data-reveal="fade-up"
        >
          01 - VISUAL STRATEGY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3" data-reveal="fade-up">
          Strategy &amp; <span className="accent-italic text-[#c084fc]">Design Execution</span>
        </h2>
        <p className="text-sm md:text-base text-[#9ca3af] max-w-2xl leading-relaxed mb-10" data-reveal="fade-up">
          High-CTR design is an exact science balancing instant cognitive recognition with narrative
          intrigue. Every asset is constructed around three fundamental visual anchors.
        </p>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-interactive rounded-xl p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#0088ff]/10 border border-[#0088ff]/30 text-[#0088ff] flex items-center justify-center font-bold text-sm mb-5">
                <Target className="w-5 h-5 text-[#0088ff]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                Focal Point Isolation
              </h3>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-relaxed">
                Sharp subject cutouts paired with atmospheric lighting, rim lights, and high-stakes
                color palettes (reds, deep blues, neon accents) to command instant visual dominance
                in saturated feeds.
              </p>
            </div>
          </div>

          <div className="card-interactive rounded-xl p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#0088ff]/10 border border-[#0088ff]/30 text-[#0088ff] flex items-center justify-center font-bold text-sm mb-5">
                <Zap className="w-5 h-5 text-[#0088ff]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                High-Contrast Typography
              </h3>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-relaxed">
                Bold, sans-serif headline overlays (&ldquo;UNBREAKABLE IRAN&rdquo;, &ldquo;NUCLEAR
                TRAP&rdquo;, &ldquo;PAKISTAN&apos;S STRATEGY&rdquo;) engineered for instant
                legibility on small mobile displays.
              </p>
            </div>
          </div>

          <div className="card-interactive rounded-xl p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#0088ff]/10 border border-[#0088ff]/30 text-[#0088ff] flex items-center justify-center font-bold text-sm mb-5">
                <Compass className="w-5 h-5 text-[#0088ff]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                High-Arousal Curiosity Triggers
              </h3>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-relaxed">
                Strategic arrangement of maps, key figures, and directional elements that create
                immediate narrative tension without deceptive clickbait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL STACK */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14" id="case-studies">
        <span
          className="text-[#0088ff] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 block"
          data-reveal="fade-up"
        >
          02 - EDITORIAL STACK
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3" data-reveal="fade-up">
          High-Quality <span className="accent-italic text-[#c084fc]">Thumbnail Portfolio</span> Showcase
        </h2>
        <p className="text-sm md:text-base text-[#9ca3af] max-w-3xl leading-relaxed mb-8" data-reveal="fade-up">
          The complete vertical compilation of 17+ high-stakes editorial and geopolitical thumbnail
          campaigns engineered for multi-million view YouTube channels and creators.
        </p>

        {/* Dynamic Action Banner Bar */}
        <div
          className="p-5 md:p-6 rounded-xl bg-[#121216] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
          data-reveal="fade-up"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#0088ff]/10 border border-[#0088ff]/30 text-xs font-semibold text-[#0088ff] tracking-wider">
              17 DESIGNS
            </span>
            <span className="text-xs sm:text-sm font-medium text-white">
              Complete Editorial &amp; Geopolitical Thumbnail Suite
            </span>
          </div>
          <Link
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0088ff] text-white hover:bg-[#0077e6] text-xs md:text-sm font-semibold transition-all shadow-[0_4px_12px_rgba(0,136,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            href="/#contact"
          >
            Request Custom Designs
          </Link>
        </div>
      </section>

      {/* SECTION 3: PROJECT SNAPSHOT & AUTHOR */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-8" id="snapshot-and-author">
        <div className="p-8 rounded-2xl bg-[#141418] border border-white/10 mb-8 shadow-xl" data-reveal="fade-up">
          <div className="border-l-2 border-[#0088ff] pl-3 mb-6">
            <h3 className="text-base font-bold text-white tracking-tight">Project Snapshot</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                CLIENT / NICHE
              </span>
              <p className="text-sm font-medium text-gray-200">
                Global Geopolitical Channels &amp; YouTube Creators
              </p>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                DELIVERABLES
              </span>
              <p className="text-sm font-medium text-gray-200">
                Brand Guidelines, Custom Typography Layers, High-CTR Thumbnail Assets
              </p>
            </div>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                STATUS
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <p className="text-sm font-medium text-[#10b981]">
                  Deployed to Production &amp; Actively Scaling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Author Attribution Card */}
        <div
          className="p-6 md:p-8 rounded-2xl bg-[#121216] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          data-reveal="fade-up"
        >
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <img
              alt="Saad Zafar Portrait"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#0088ff]/40 shadow-md"
              src="/images/img_15.png"
            />
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                Saad Zafar <span className="text-gray-400 font-normal">| Visual Designer &amp; Copywriter</span>
              </h4>
              <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                Audience research → High-CTR Visual Hook Architecture → Conversion Design
              </p>
            </div>
          </div>
          <a
            className="cta-glow-btn inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full bg-[#0088ff] text-white hover:bg-[#0077e6] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,136,255,0.3)] shrink-0 cursor-pointer"
            href="https://www.behance.net/gallery/251671381/YouTube-Thumbnail-Design-Collection-2026"
            rel="noopener noreferrer"
            target="_blank"
          >
            View on Behance
          </a>
        </div>
      </section>
    </main>
  );
}
