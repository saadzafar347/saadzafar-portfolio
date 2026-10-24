import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tripzee Mobile App — UI/UX Case Study | Saad Zafar",
  description:
    "Eliminating friction points to increase travel booking conversion rates and streamline multi-destination planning on mobile.",
};

export default function TripzeeCaseStudy() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 pt-28 md:pt-32 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="mb-8" data-reveal="fade-up">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0088ff] hover:text-[#0077e6] transition-colors py-1.5 px-3 rounded-full bg-[#0088ff]/10 border border-[#0088ff]/20 active:scale-95 duration-100"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>

      {/* HERO & OVERVIEW */}
      <section className="hero-section mb-16">
        <div
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block opacity-0 translate-y-4 animate-fade-in"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          MOBILE UI/UX - CONVERSION OPTIMIZATION
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
        >
          Tripzee&nbsp;<span className="accent-italic">Mobile Travel App — </span> UI/UX Case Study
        </h1>
        <p
          className="text-base md:text-xl text-[#9ca3af] max-w-3xl mb-10 leading-relaxed opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          Eliminating friction points to increase travel booking conversion rates and streamline
          multi-destination planning.
        </p>

        {/* 4 Metadata Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
        >
          <div className="card-interactive p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1.5">
              Client - Brand
            </div>
            <div className="text-base font-semibold text-white">Tripzee</div>
          </div>
          <div className="card-interactive p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1.5">
              Role - Service
            </div>
            <div className="text-base font-semibold text-white">Mobile UI/UX Design &amp; Optimization</div>
          </div>
          <div className="card-interactive p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1.5">
              Target Audience
            </div>
            <div className="text-base font-semibold text-white">
              Solo travelers, weekenders &amp; digital nomads
            </div>
          </div>
          <div className="card-interactive p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1.5">
              Key Impact
            </div>
            <div className="text-base font-semibold text-emerald-400">
              50K+ Active Users post-launch
            </div>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div
          className="w-full bg-[#121216] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative aspect-[16/9] flex items-center justify-center p-0 opacity-0 translate-y-8 animate-fade-in group"
          style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
        >
          <img
            alt="Travel App Showcase Mockup"
            className="w-full h-full object-cover block group-hover:scale-[1.01] transition-transform duration-700"
            src="/images/img_10.png"
          />
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <div className="mb-8" data-reveal="fade-up">
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block">
            01 - THE CHALLENGE
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            The Problem: Fragmented Mobile <span className="accent-italic">Booking Journeys</span>
          </h2>
          <p className="text-[#9ca3af] text-base max-w-3xl leading-relaxed">
            Mobile travelers expect instant discovery and effortless checkout. Deep funnel analysis
            identified critical points where intent was lost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up">
          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                Friction 01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fragmented Travel Booking</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Users previously jumped between 3–4 separate apps to manage airline flights, stay
                reservations, and local activity wishlists, leading to decision fatigue and high cart
                abandonment.
              </p>
            </div>
          </div>

          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                Friction 02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complex Onboarding &amp; Drop-Off</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Overwhelming form fields during initial account registration and flight selection
                caused dramatic drop-offs before users ever reached the secure payment gateway.
              </p>
            </div>
          </div>

          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                Friction 03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hidden Pricing &amp; Search Fatigue</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Ambiguous pricing structures without baggage/tax clarity made accurate flight
                comparisons stressful and unintuitive on narrow smartphone viewports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESEARCH & CONVERSION INSIGHTS */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <div className="mb-8" data-reveal="fade-up">
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block">
            02 - USER RESEARCH
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Deep Research &amp; <span className="accent-italic">Conversion Insights</span>
          </h2>
          <p className="text-[#9ca3af] text-base max-w-3xl leading-relaxed">
            Insights extracted from competitive audits, user interview transcripts, and behavioral
            session recordings.
          </p>
        </div>

        <div
          className="bg-[#0088ff]/5 border border-[#0088ff]/20 rounded-2xl p-6 mb-8 flex items-center gap-4"
          data-reveal="fade-up"
        >
          <div className="text-2xl">🔍</div>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            <strong>User Research Summary:</strong> Comprehensive comparative analysis of 30+ leading
            travel booking flow teardowns combined with qualitative feedback from active solo
            travelers and digital nomads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up">
          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0088ff]/10 border border-[#0088ff]/25 flex items-center justify-center text-[#0088ff] text-xl mb-5">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Frictionless Verification</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Users prefer instant one-tap OTP and social sign-in over traditional multi-step
                email password confirmation forms, cutting onboarding friction in half.
              </p>
            </div>
          </div>

          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0088ff]/10 border border-[#0088ff]/25 flex items-center justify-center text-[#0088ff] text-xl mb-5">
                🏷️
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Upfront Price Clarity</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Displaying full transparent flight costs ($842) and exact travel date ranges directly
                in search previews boosts user purchasing confidence prior to initiating checkout.
              </p>
            </div>
          </div>

          <div className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0088ff]/10 border border-[#0088ff]/25 flex items-center justify-center text-[#0088ff] text-xl mb-5">
                ❤️
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wishlist-to-Booking Continuity</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Saving destinations seamlessly to a persistent personal wishlist increases
                returning user booking intent by 35% compared to static session-only search tabs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: USER PERSONAS */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <div className="mb-8" data-reveal="fade-up">
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block">
            03 - TARGET AUDIENCE
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            User Persona: <span className="accent-italic">The Modern Explorer</span>
          </h2>
          <p className="text-[#9ca3af] text-base max-w-3xl leading-relaxed">
            Designing for the high-intent mobile traveler requiring speed, transparent information,
            and unified itineraries.
          </p>
        </div>

        <div
          className="card-interactive p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-center"
          data-reveal="fade-up"
        >
          <div className="bg-gradient-to-br from-[#0088ff]/15 to-[#c084fc]/15 border border-white/10 rounded-2xl p-7 text-center">
            <div className="w-16 h-16 rounded-full bg-[#181822] border-2 border-[#0088ff] mx-auto mb-4 flex items-center justify-center text-2xl">
              ✈️
            </div>
            <div className="text-lg font-bold text-white mb-1">Alex, 28</div>
            <div className="text-xs text-[#c084fc] font-medium">
              Product Manager &amp; Frequent Traveler
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#181822] border border-white/5 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                🎯 Primary Goal
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Wants to search flights quickly, compare direct options (e.g., SFO → TYO), and save
                multi-city itineraries into a single centralized mobile dashboard in under 2
                minutes.
              </p>
            </div>
            <div className="bg-[#181822] border border-white/5 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5">
                ⚠️ Core Pain Point
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Frustrated by visual clutter, repetitive login barriers, slow checkout forms, and
                surprise hidden baggage fees revealed at the final payment stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HIGH-FIDELITY SCREENS */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <div className="mb-8" data-reveal="fade-up">
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block">
            04 - HIGH-FIDELITY SCREENS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Production UI: <span className="accent-italic">The Travee Experience</span>
          </h2>
          <p className="text-[#9ca3af] text-base max-w-3xl leading-relaxed">
            Pixel-perfect layouts implementing high-contrast typography, warm imagery cards, and
            frictionless mobile checkout ergonomics.
          </p>
        </div>

        {/* Flow Cards */}
        <div className="space-y-12">
          {/* FLOW 01 */}
          <div className="card-interactive p-6 md:p-8" data-reveal="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-1.5 block">
                  FLOW 01
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Splash Screens</h3>
                <p className="text-sm text-[#9ca3af]">
                  Your journey starts here. Start your next adventure today — explore incredible
                  destinations, save your favorites to your wishlist.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#0d0d12] border border-white/10 rounded-xl overflow-hidden">
              <img
                alt="Tripzee Splash Screens & Onboarding Flow"
                className="w-full h-auto block object-contain"
                src="/images/tripzee-splash-flow.png"
              />
            </div>
          </div>

          {/* FLOW 02 */}
          <div className="card-interactive p-6 md:p-8" data-reveal="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-1.5 block">
                  FLOW 02
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Account Creation Flow (Steps 01 to 04)
                </h3>
                <p className="text-sm text-[#9ca3af]">
                  Sign up or log in to access your saved trips and manage bookings effortlessly with
                  seamless OTP verification and secure profile setup.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#0d0d12] border border-white/10 rounded-xl overflow-hidden">
              <img
                alt="Tripzee Account Creation Flow (Steps 01 to 04)"
                className="w-full h-auto block object-contain"
                src="/images/tripzee-account-creation-flow.png"
              />
            </div>
          </div>

          {/* FLOW 03 */}
          <div className="card-interactive p-6 md:p-8" data-reveal="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-1.5 block">
                  FLOW 03
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Main Dashboard &amp; Navigation Flow
                </h3>
                <p className="text-sm text-[#9ca3af]">
                  The homepage of TRIPZEE is designed with a sleek, modern layout featuring quick
                  flight search, direct category filters, and featured destination cards.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#0d0d12] border border-white/10 rounded-xl overflow-hidden">
              <img
                alt="Tripzee Main Dashboard & Navigation Flow"
                className="w-full h-auto block object-contain"
                src="/images/tripzee-dashboard-flow.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT & AUTHOR */}
      <section className="space-y-6 pt-4 mb-8 md:mb-10">
        <div className="card-interactive p-8" data-reveal="fade-up">
          <div className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            <span className="inline-block w-1 h-5 bg-[#0088ff] rounded-full" />
            Project Snapshot
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                Client
              </span>
              <span className="text-sm font-semibold text-white">Tripzee / Travee Mobile</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                Deliverables
              </span>
              <span className="text-sm font-semibold text-white">
                End-to-End Mobile App UI/UX &amp; Design System
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                Timeline
              </span>
              <span className="text-sm font-semibold text-white">
                6 Weeks (Research to Delivery)
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                Focus
              </span>
              <span className="text-sm font-semibold text-white">
                Onboarding, Search Flow &amp; Wishlist Conversion
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">
                Platform
              </span>
              <span className="text-sm font-semibold text-white">iOS Design Guidelines</span>
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div
          className="card-interactive p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          data-reveal="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <img
              alt="Saad Zafar"
              className="rounded-full border-2 border-[#0088ff] object-cover bg-[#181822] shrink-0 w-16 h-16 md:w-20 md:h-20"
              src="/images/img_12.png"
            />
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Case study by Saad Zafar | Copywriter and UI/UX Designer
              </h4>
              <p className="text-xs text-[#9ca3af]">
                Audience research • Conversion architecture • High-fidelity interface design
              </p>
            </div>
          </div>
          <a
            className="cta-glow-btn bg-[#0088ff] text-white px-6 py-3 font-bold text-xs tracking-wide shrink-0 rounded-full hover:bg-[#0077e6] hover:shadow-[0_0_20px_rgba(0,136,255,0.35)] transition-all duration-200 inline-flex items-center justify-center shadow-[0_0_15px_rgba(0,136,255,0.35)] cursor-pointer"
            href="https://www.behance.net/gallery/210060447/Travel-App-Case-Study"
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
