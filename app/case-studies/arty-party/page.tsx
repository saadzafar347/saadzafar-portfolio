import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arty Party On Wheels — Strategy Case Study | Saad Zafar",
  description:
    "A systematic email nurture strategy destroying false beliefs and lifting bookings by +50% for a premium children's entertainment brand.",
};

export default function ArtyPartyCaseStudy() {
  return (
    <main className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 md:pt-32 pb-16">
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
      <section className="mb-14">
        <div
          className="opacity-0 translate-y-4 animate-fade-in text-xs md:text-sm font-semibold uppercase tracking-widest text-[#0088ff] mb-3 block"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          STRATEGY CASE STUDY - CHILDREN&apos;S PARTY SERVICE
        </div>
        <h1
          className="opacity-0 translate-y-6 animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold text-[#f3f4f6] tracking-tight leading-[1.15] mb-5"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Arty Party On Wheels — <span className="accent-italic">Strategy Case Study</span>
        </h1>
        <p
          className="opacity-0 translate-y-6 animate-fade-in text-lg md:text-xl text-[#d1d5db] leading-relaxed max-w-3xl mb-10"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          A premium children&apos;s party service with strong traffic but a broken conversion funnel.
          The gap: cold Instagram leads weren&apos;t being warmed before the booking ask.
        </p>

        {/* OVERVIEW METADATA CARDS */}
        <div
          className="opacity-0 translate-y-8 animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div className="card-interactive p-5 flex flex-col justify-between">
            <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Service
            </div>
            <div className="text-[15px] font-semibold text-white leading-snug">
              Mobile birthday parties
              <br />
              <span className="text-[#0088ff] text-xs font-medium">($550–$950 AUD)</span>
            </div>
          </div>
          <div className="card-interactive p-5 flex flex-col justify-between">
            <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Challenge
            </div>
            <div className="text-[15px] font-semibold text-white leading-snug">
              8–16 bookings / mo
              <br />
              <span className="text-[#9ca3af] text-xs font-medium">(Capacity: 20–24)</span>
            </div>
          </div>
          <div className="card-interactive p-5 flex flex-col justify-between">
            <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Approach
            </div>
            <div className="text-[15px] font-semibold text-white leading-snug">
              Systematic email nurture
              <br />
              <span className="text-[#c084fc] text-xs font-medium">Destroying 3 false beliefs</span>
            </div>
          </div>
          <div className="card-interactive p-5 flex flex-col justify-between">
            <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">
              Result
            </div>
            <div className="text-[15px] font-semibold text-white leading-snug">
              Strategy for +50% revenue
              <br />
              <span className="text-emerald-400 text-xs font-medium">(Pending client rollout)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM & DIAGNOSIS */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14">
        <div data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#0088ff] mb-3 block">
            PHASE 01 - DIAGNOSIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            The Problem &amp; <span className="accent-italic">The 3 Core False Beliefs</span>
          </h2>
          <div className="space-y-4 text-base text-[#9ca3af] leading-relaxed max-w-full mb-8">
            <p>
              Arty Party On Wheels was capturing steady attention through Instagram reels and local
              parent communities across Melbourne. However, traffic was landing directly onto an
              enquiry form without any intermediate bridge.
            </p>
            <p>
              With zero automated email follow-up or structured storytelling, parents hesitated at the
              $750 average cart value. This leaky bucket left{" "}
              <strong className="text-white font-semibold">
                8–12 premium bookings on the table each month
              </strong>
              , leaving valuable weekend capacity unfilled.
            </p>
          </div>
        </div>

        {/* 3 CORE FALSE BELIEFS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-interactive p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2 block">
                Belief #01
              </span>
              <h3 className="text-lg font-bold text-white mb-3">Price-to-Value Disconnect</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Parents saw the raw $750 sticker price before recognizing the all-in-one value: custom
                tables, chairs, high-end balloon garlands, setup, 2 hours of curated entertainment, and
                total post-party cleanup.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2 block">
                Belief #02
              </span>
              <h3 className="text-lg font-bold text-white mb-3">Space &amp; Mess Anxiety</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                <em className="text-white">&quot;Will this destroy my living room or carpet?&quot;</em>{" "}
                Parents couldn&apos;t visualize the setup in standard suburban houses, fearing paint
                spills, glitter explosions, and cluttered furniture.
              </p>
            </div>
          </div>

          <div
            className="card-interactive p-6 flex flex-col justify-between md:col-span-2 lg:col-span-1"
            data-reveal="fade-up"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2 block">
                Belief #03
              </span>
              <h3 className="text-lg font-bold text-white mb-3">Crowd Management Doubt</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                <em className="text-white">
                  &quot;Will Jo actually hold the attention of 12+ hyperactive kids for 2 full hours?&quot;
                </em>{" "}
                Busy parents needed undeniable social proof that Jo could turn chaos into joyful,
                controlled focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 5-EMAIL SEQUENCE & MESSAGING */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14">
        <div data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#0088ff] mb-3 block">
            PHASE 02 - ARCHITECTURE &amp; MESSAGING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            The 5-Email Sequence &amp;{" "}
            <span className="accent-italic">Belief Destruction Strategy</span>
          </h2>
        </div>

        {/* LEAD MAGNET CALLOUT */}
        <div
          className="card-interactive p-6 md:p-8 mb-8 border border-[#0088ff]/30 bg-gradient-to-br from-[#0088ff]/10 via-[#121216] to-[#c084fc]/10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          data-reveal="fade-up"
        >
          <div>
            <h4 className="text-lg font-bold text-white mb-1.5">
              Front-End Lead Magnet: &quot;Stress-Free Birthday Party Planning Checklist&quot;
            </h4>
            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              Instead of demanding an immediate high-friction booking, cold visitors exchange an email
              for a hyper-practical 12-point party checklist. This turns anonymous visitors into warm,
              nurtured subscribers.
            </p>
          </div>
        </div>

        {/* 5-EMAIL SEQUENCE CARDS */}
        <div className="space-y-4 mb-10">
          <div
            className="card-interactive p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] items-start sm:items-center gap-4"
            data-reveal="fade-up"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1 sm:mb-0">
              Day 0 - Email 1
            </span>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Welcome + Introduce the All-in-One Philosophy
              </h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Deliver the free checklist immediately. Zero aggressive selling; establish Jo&apos;s
                warm voice and introduce how effortless celebrations can be.
              </p>
            </div>
          </div>

          <div
            className="card-interactive p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] items-start sm:items-center gap-4"
            data-reveal="fade-up"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1 sm:mb-0">
              Day 2 - Email 2
            </span>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Destroy Belief #1 (Price-to-Value Disconnect)
              </h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Transparent side-by-side cost breakdown: hiring furniture rental ($220) + entertainer
                ($300) + decor ($250) vs. Arty Party&apos;s seamless $750 all-in-one package.
              </p>
            </div>
          </div>

          <div
            className="card-interactive p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] items-start sm:items-center gap-4"
            data-reveal="fade-up"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1 sm:mb-0">
              Day 4 - Email 3
            </span>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Destroy Belief #2 (Space &amp; Mess Anxiety)
              </h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Real photo proof of small living room and garage setups. Highlight military-grade
                protective canvas drop cloths and spotless &quot;leave no trace&quot; cleanup guarantee.
              </p>
            </div>
          </div>

          <div
            className="card-interactive p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] items-start sm:items-center gap-4"
            data-reveal="fade-up"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1 sm:mb-0">
              Day 6 - Email 4
            </span>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Destroy Belief #3 (Crowd Management Doubt)
              </h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Jo&apos;s background, deep empathy, and signature high-energy crowd rhythm. Quote
                testimonials from parents amazed that 14 children sat spellbound creating crafts for 120
                minutes.
              </p>
            </div>
          </div>

          <div
            className="card-interactive p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] items-start sm:items-center gap-4"
            data-reveal="fade-up"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-1 sm:mb-0">
              Day 8 - Email 5
            </span>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Consolidate &amp; Move to Direct Decision
              </h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Executive recap of benefits, date reservation guarantee, and authentic urgency warning
                regarding 4–6 week weekend slot availability.
              </p>
            </div>
          </div>
        </div>

        {/* 4 MESSAGING PILLARS */}
        <div>
          <h3 className="text-xl font-bold text-white mb-5" data-reveal="fade-up">
            The 4 Core Messaging Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-interactive p-6" data-reveal="fade-up">
              <span className="text-xs font-bold text-[#c084fc] tracking-wider uppercase block mb-2">
                Pillar 01
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Stress Relief</h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                &quot;You sit back with a coffee or champagne and enjoy your child&apos;s day. We handle
                every setup, every craft, and every clean-up task.&quot;
              </p>
            </div>
            <div className="card-interactive p-6" data-reveal="fade-up">
              <span className="text-xs font-bold text-[#c084fc] tracking-wider uppercase block mb-2">
                Pillar 02
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Complete Service</h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                &quot;One single booking instead of juggling 3 different vendors, coordinate delivery
                times, and managing separate invoices.&quot;
              </p>
            </div>
            <div className="card-interactive p-6" data-reveal="fade-up">
              <span className="text-xs font-bold text-[#c084fc] tracking-wider uppercase block mb-2">
                Pillar 03
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Kids Stay Engaged</h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                &quot;2 hours filled with proven, tactile crafts and joyful games that keep kids 100%
                engaged without screen time.&quot;
              </p>
            </div>
            <div className="card-interactive p-6" data-reveal="fade-up">
              <span className="text-xs font-bold text-[#c084fc] tracking-wider uppercase block mb-2">
                Pillar 04
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Trust Through Jo</h4>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                &quot;Jo doesn&apos;t just show up to run an event. She knows your space, remembers your
                child&apos;s name, and coordinates the whole experience.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REVENUE PROJECTIONS & TABLE */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14">
        <div data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#0088ff] mb-3 block">
            PHASE 03 - FUNNEL ECONOMICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Key Elements, Bottlenecks &amp; <span className="accent-italic">Revenue Projections</span>
          </h2>
        </div>

        {/* 5 Principles Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8" data-reveal="fade-up">
          <div className="card-interactive p-4 text-center">
            <span className="text-xs font-extrabold text-[#0088ff] block mb-1">01</span>
            <div className="text-xs sm:text-sm font-semibold text-white">Customer Psychology First</div>
          </div>
          <div className="card-interactive p-4 text-center">
            <span className="text-xs font-extrabold text-[#0088ff] block mb-1">02</span>
            <div className="text-xs sm:text-sm font-semibold text-white">Proof Over Claims</div>
          </div>
          <div className="card-interactive p-4 text-center">
            <span className="text-xs font-extrabold text-[#0088ff] block mb-1">03</span>
            <div className="text-xs sm:text-sm font-semibold text-white">Personal Touch</div>
          </div>
          <div className="card-interactive p-4 text-center">
            <span className="text-xs font-extrabold text-[#0088ff] block mb-1">04</span>
            <div className="text-xs sm:text-sm font-semibold text-white">Strategic Pacing</div>
          </div>
          <div className="card-interactive p-4 text-center col-span-2 sm:col-span-1">
            <span className="text-xs font-extrabold text-[#0088ff] block mb-1">05</span>
            <div className="text-xs sm:text-sm font-semibold text-white">Clear Path Forward</div>
          </div>
        </div>

        {/* Expected Performance Table */}
        <div className="card-interactive overflow-hidden mb-8" data-reveal="fade-up">
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
            <h4 className="text-base font-semibold text-white">Expected Funnel Performance Model</h4>
            <span className="text-xs text-[#0088ff] font-semibold">Conservative Forecast</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs text-[#9ca3af] uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Funnel Stage</th>
                  <th className="py-4 px-6 font-semibold">Baseline / Metric</th>
                  <th className="py-4 px-6 font-semibold">Projected Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Email Completion Rate</td>
                  <td className="py-4 px-6 text-[#9ca3af]">N/A (No prior sequence)</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">~70% open / click-through</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Inquiry Rate</td>
                  <td className="py-4 px-6 text-[#9ca3af]">~3% direct from ad traffic</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">
                    ~15–20% of sequence finishers
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Lead-to-Booking Conversion</td>
                  <td className="py-4 px-6 text-[#9ca3af]">~30% closing rate</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">
                    ~40–50% (qualified warm leads)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Monthly Revenue Run Rate</td>
                  <td className="py-4 px-6 text-[#9ca3af]">$6,800 – $16,000 / mo</td>
                  <td className="py-4 px-6 font-bold text-emerald-400 text-base">
                    $18,000 – $22,000 / mo (+50% Growth)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLAYBOOK & UNIVERSAL REPLICATION */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-14">
        <div data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#0088ff] mb-3 block">
            PHASE 04 - EXECUTION PLAYBOOK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Implementation Checklist &amp;{" "}
            <span className="accent-italic">Replication Framework</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card-interactive p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <h4 className="text-base font-bold text-white mb-4">Website Changes</h4>
              <ul className="space-y-3 text-sm text-[#d1d5db]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Update headline to reflect &quot;All-in-One Stress-Free Parties&quot;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Add transparent $750 cost breakdown comparison matrix</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Embed carousel of real living-room setups with drop cloths</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Prominently feature Jo&apos;s personal backstory and credentials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-interactive p-6 flex flex-col justify-between" data-reveal="fade-up">
            <div>
              <h4 className="text-base font-bold text-white mb-4">Email Platform Setup</h4>
              <ul className="space-y-3 text-sm text-[#d1d5db]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Publish dedicated Checklist Lead Magnet landing opt-in</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Schedule 5-email nurture sequence (Days 0, 2, 4, 6, 8)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Configure automated tag triggers upon checklist download</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Implement inquiry link tracking and booking calendar sync</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="card-interactive p-6 flex flex-col justify-between md:col-span-2 lg:col-span-1"
            data-reveal="fade-up"
          >
            <div>
              <h4 className="text-base font-bold text-white mb-4">Testimonial Gathering</h4>
              <ul className="space-y-3 text-sm text-[#d1d5db]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Solicit video/photo reviews answering space &amp; cleanup fears</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Capture direct quotes on Jo&apos;s crowd control with 10+ kids</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Position parent reviews directly alongside pricing tiers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Deploy post-party automated review collection email</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* REPLICATION FRAMEWORK BOX */}
        <div className="card-interactive p-6 md:p-8" data-reveal="fade-up">
          <h4 className="text-lg font-bold text-white mb-4">
            Universal Replication Framework for High-Ticket &amp; Done-for-You Services
          </h4>
          <ul className="space-y-3.5 text-sm text-[#9ca3af]">
            <li className="flex items-start gap-2.5">
              <span className="text-[#c084fc] font-bold leading-none text-base">•</span>
              <span>
                <strong className="text-white">Identify the Hidden False Beliefs:</strong> Never
                assume prospects are just haggling on price; discover whether they doubt the setup,
                their own capability, or the vendor&apos;s reliability.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c084fc] font-bold leading-none text-base">•</span>
              <span>
                <strong className="text-white">Anchor Against the Fragmented Alternative:</strong>{" "}
                Contrast your turnkey rate against the total time, vendor fees, and emotional fatigue of
                coordinating multiple contractors.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c084fc] font-bold leading-none text-base">•</span>
              <span>
                <strong className="text-white">Use Visual Proof to Disarm Objections:</strong> Show
                unedited, real-environment setups that reassure cautious buyers before they ever submit
                an inquiry.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#c084fc] font-bold leading-none text-base">•</span>
              <span>
                <strong className="text-white">Pace the Relationship with Sequence Logic:</strong>{" "}
                Deliver zero-pressure value upfront, dismantle concerns step-by-step, and only demand
                the booking when trust is undeniable.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: FINAL ACTIONS & AUTHOR */}
      <section className="border-t border-white/10 pt-12 md:pt-16 mb-8 md:mb-10">
        <div className="space-y-8">
          <div className="card-interactive p-8 md:p-12 text-center" data-reveal="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Want to see the <span className="accent-italic">emails?</span>
            </h3>
            <p className="text-sm md:text-base text-[#9ca3af] max-w-xl mx-auto mb-6 leading-relaxed">
              The strategy explains why the sequence was built this way. The actual emails show how that
              strategy was put into words.
            </p>
            <a
              className="cta-glow-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wide text-white bg-[#0088ff] hover:bg-[#0077e6] shadow-[0_0_20px_rgba(0,136,255,0.35)] transition-all duration-200 cursor-pointer"
              href="https://docs.google.com/document/d/1EZaX_NS06lDFWKQyM29Nl1NNPSMcGCdg1QD6kNJmgNE/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read the emails
            </a>
          </div>

          <div
            className="card-interactive p-5 md:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            data-reveal="fade-up"
          >
            <div className="w-14 h-14 rounded-full border-2 border-[#0088ff] overflow-hidden shrink-0 bg-[#0c1829]">
              <img
                alt="Saad Zafar"
                className="w-full h-full object-cover object-top block"
                src="/images/img_13.png"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Case study by Saad Zafar | Copywriter and UI/UX Designer
              </h4>
              <p className="text-xs md:text-sm text-[#9ca3af] leading-relaxed">
                Audience research → Funnel diagnosis → Sequence architecture → Conversion-focused copy
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
