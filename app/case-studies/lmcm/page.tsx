import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LMCM Email Funnel Case Study | Saad Zafar",
  description:
    "How I reworked a real estate coaching brand's email funnel to turn subscribers into qualified applications through diagnostic copy and structured sequence design.",
};

export default function LmcmCaseStudy() {
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

      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="mb-14">
        <div
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block opacity-0 translate-y-4 animate-fade-in"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          CASE STUDY - REAL ESTATE COACHING
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f3f4f6] tracking-tight leading-[1.15] mb-6 opacity-0 translate-y-6 animate-fade-in"
          id="hero-heading"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          How I Reworked a Real Estate Coaching Brand’s{" "}
          <span className="accent-italic">Email Funnel</span>
        </h1>
        <p
          className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed mb-10 opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          Turning a large audience into a stronger path from subscriber to application, through
          diagnostic copy and a clearer structure.
        </p>

        {/* Key Highlight Callout Block */}
        <div
          className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#121216] to-[#14141f] border border-[#0088ff]/30 shadow-[0_0_40px_rgba(0,136,255,0.12)] mb-12 opacity-0 translate-y-6 animate-fade-in"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0088ff] mb-2">
                Projected annual revenue opportunity
              </p>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#0088ff] tracking-tight">
                $119,880
              </div>
            </div>
            <div className="md:max-w-xs text-xs text-gray-400 border-l border-white/10 pl-4 py-1 leading-relaxed">
              This is a modeled figure based on the assumptions in this case study. It is not
              verified revenue from a live launch.
            </div>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div
          className="aspect-video w-full rounded-xl overflow-hidden bg-[#121216] border border-white/10 relative shadow-2xl group opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
        >
          <img
            alt="Weak to Winning Emails Case Study Presentation"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            src="/images/img_7.png"
          />
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs text-gray-400">
            Audience scale, conversion baseline, and revenue model.
          </div>
        </div>
      </section>

      {/* PHASE 01 - FOUNDATION */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block"
          data-reveal="fade-up"
        >
          PHASE 01 - FOUNDATION
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6" data-reveal="fade-up">
          The Business Already Had the <span className="accent-italic">Hard Part</span>
        </h2>
        <div className="space-y-5 text-gray-300 text-[15px] leading-[1.6]" data-reveal="fade-up">
          <p>
            John Tsai runs List More Close More (LMCM), a real estate coaching program. Before any
            copy was written, the brand already had two things most businesses spend years building.
            It has $308M in career real estate transaction volume behind it, and an Instagram
            audience of 217K real estate agents. Trust and authority were already in place.
          </p>
          <p>
            The problem was not attention at the top of the funnel. It was what happened after
            someone joined the email list. New subscribers received generic nurture emails and a
            pitch that didn’t match where they were in their careers. Strong attention was arriving
            at a weak handoff.
          </p>
        </div>
      </section>

      {/* PHASE 02 - VOICE OF CUSTOMER */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block"
          data-reveal="fade-up"
        >
          PHASE 02 - VOICE OF CUSTOMER
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6" data-reveal="fade-up">
          The Main Issue and Deep <span className="accent-italic">Market Research</span>
        </h2>
        <p className="text-[15px] leading-[1.6] text-gray-300 mb-10 max-w-3xl" data-reveal="fade-up">
          Before writing any copy, I read more than 40 practitioner threads on Reddit, reviewed over
          200 coaching reviews, and broke down competitor sales pages on G2 and Capterra. I wanted
          the objections in the buyers’ own words, not my guesses.
        </p>

        {/* 3-Card Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" data-reveal="fade-up">
          <article className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-[#0088ff]/10 border border-[#0088ff]/30 text-[#0088ff] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Time was a bigger objection than price
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Agents weren’t worried about the investment. They were worried about adding 15+
                weekly hours of software setup to schedules that were already full. That was the real
                blocker.
              </p>
            </div>
          </article>

          <article className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Practitioners created stronger proof
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Celebrity endorsements made skeptics tune out. Proof from peers working the same
                local markets, dealing with the same rising interest rates, carried more weight.
              </p>
            </div>
          </article>

          <article className="card-interactive p-7 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Relatable transformation anchors intent
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The emails followed Maria, an agent who went from near burnout to consistent
                closings. Readers could see their current situation in her starting point and a
                realistic future in her results.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PHASE 03 - EXECUTION & ARCHITECTURE */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block"
          data-reveal="fade-up"
        >
          PHASE 03 - EXECUTION
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6" data-reveal="fade-up">
          The New <span className="accent-italic">Email Architecture</span> and Six-Stage Sequence
        </h2>
        <p className="text-[15px] leading-[1.6] text-gray-300 mb-8 max-w-3xl" data-reveal="fade-up">
          The old broadcasts were ad hoc. I replaced them with a six-email sequence that moves in a
          fixed order: name the problem, teach something useful, prove it works, answer the main
          objection, create honest urgency, then make the next step easy.
        </p>

        {/* 6 Sequential Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-reveal="fade-up">
          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 01 - DIAGNOSE
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Diagnose</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Start with the subscriber’s specific bottleneck. The reader should feel understood
                before any solution is offered.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 02 - TEACH
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Teach</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Introduce the Beast Mode mechanism with tactics readers can use right away. This
                email doesn’t pitch.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 03 - PROVE
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Prove</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Walk through Maria’s journey in detail, including the timelines and obstacles she
                faced. The specifics make the story believable.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 04 - RESOLVE OBJECTION
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Resolve Objection</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Address the time concern head on. Show how low-lift leverage cuts hours without
                adding workflow complexity.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 05 - CREATE REAL URGENCY
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Create Real Urgency</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Tie urgency to real capacity. Mentor spots per intake and quarterly sprint timelines
                are honest reasons to act now. A fake countdown timer is not.
              </p>
            </div>
          </div>

          <div className="card-interactive p-6 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
                EMAIL 06 - MAKE DECISION EASY
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Make Decision Easy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Offer a collaborative one-on-one discovery review, where the agent’s local market
                plan gets examined together before any commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Sequence Mockup Visual */}
        <div
          className="w-full rounded-xl overflow-hidden bg-[#121216] border border-white/10 relative shadow-2xl flex items-center justify-center mb-8"
          data-reveal="fade-up"
        >
          <img
            alt="LMCM Klaviyo Automated Welcome Sequence Flow"
            className="w-full h-auto object-contain object-center rounded-xl block"
            src="/images/lmcm-workflow-4k.jpg"
          />
        </div>

        {/* Mid-page Centered CTA */}
        <div className="flex justify-center items-center my-8 md:my-10" data-reveal="fade-up">
          <a
            className="cta-glow-btn inline-flex items-center justify-center px-8 py-3.5 md:py-4 text-white font-bold tracking-wide rounded-full bg-[#0088ff] hover:bg-[#0077e6] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(0,136,255,0.35)] transition-all duration-200 cursor-pointer text-sm md:text-base"
            href="https://docs.google.com/document/d/1RE-PE9fSbUBIImyrO7wDHGBvWaLDJdYb33Uu-4Ja7r8/edit?tab=t.kvo3gtyrhtaw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read the emails
          </a>
        </div>
      </section>

      {/* PHASE 04 - ANALYTICS & IMPACT */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block"
          data-reveal="fade-up"
        >
          PHASE 04 - ANALYTICS AND IMPACT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6" data-reveal="fade-up">
          What the Model <span className="accent-italic">Projected</span>
        </h2>
        <p className="text-[15px] leading-[1.6] text-gray-300 mb-8 max-w-3xl" data-reveal="fade-up">
          Better message alignment, a modest lift in conversion rate, and a steady cold audience
          compound over time. The table below shows the conservative projection built for this
          engagement. These are modeled numbers. The project is completed and pre-launch, so no live
          results exist yet.
        </p>

        {/* Data Table */}
        <div
          className="overflow-x-auto rounded-xl border border-white/10 bg-[#121216] shadow-2xl mb-10"
          data-reveal="fade-up"
        >
          <table className="w-full text-left text-sm" id="conversion-projection-table">
            <caption className="text-left font-semibold text-white px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              Performance forecast
            </caption>
            <thead className="bg-white/5 text-gray-400 border-b border-white/10 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4" scope="col">
                  Metric
                </th>
                <th className="px-6 py-4" scope="col">
                  Current baseline
                </th>
                <th className="px-6 py-4 text-[#0088ff]" scope="col">
                  Projected outcome
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-medium text-white">Cold subscribers per month</td>
                <td className="px-6 py-4">5,000</td>
                <td className="px-6 py-4 text-[#0088ff] font-semibold">5,000</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-medium text-white">Application rate</td>
                <td className="px-6 py-4 text-rose-400">2% to 3%</td>
                <td className="px-6 py-4 text-emerald-400 font-semibold">8% to 12%</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-medium text-white">Applications per month</td>
                <td className="px-6 py-4">100 to 150</td>
                <td className="px-6 py-4 text-emerald-400 font-semibold">400 to 600</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors bg-[#0088ff]/[0.05]">
                <td className="px-6 py-4 font-medium text-white">Additional applications</td>
                <td className="px-6 py-4 text-gray-500">—</td>
                <td className="px-6 py-4 text-emerald-400 font-bold">+300 to +500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PHASE 05 - STRATEGY & PRINCIPLES */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <span
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block"
          data-reveal="fade-up"
        >
          PHASE 05 - STRATEGY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10" data-reveal="fade-up">
          Key <span className="accent-italic">Principles</span> and Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal="fade-up">
          <div className="card-interactive p-6 rounded-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
              01 - DIAGNOSIS
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Diagnose before pitching</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Earn the right to prescribe by showing you understand the subscriber’s problem first.
              When readers feel understood, their guard comes down.
            </p>
          </div>

          <div className="card-interactive p-6 rounded-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
              02 - PROOF ENGINE
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Use proof people can relate to</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Replace glossy, polished success stories with honest journeys full of obstacles.
              Prospects can see their own situation in them.
            </p>
          </div>

          <div className="card-interactive p-6 rounded-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
              03 - OBJECTION MAPPING
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Treat objections as information</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Don’t skip reader hesitations. Turn friction points, like software setup and time
              investment, into the focus of the sequence.
            </p>
          </div>

          <div className="card-interactive p-6 rounded-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-2.5 block">
              04 - INTEGRITY
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Keep urgency honest</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fabricated countdown clocks erode trust quickly. Anchor urgency in real mentor
              availability and real cohort onboarding dates.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="mb-14 border-t border-white/10 pt-12 md:pt-16">
        <h2
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-4 block"
          data-reveal="fade-up"
        >
          PROJECT SNAPSHOT
        </h2>
        <div className="bg-[#121216] border border-white/10 p-8 md:p-10 rounded-2xl" data-reveal="fade-up">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Brand</dt>
              <dd className="text-base font-semibold text-white mt-1">List More Close More (LMCM)</dd>
            </div>
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Industry</dt>
              <dd className="text-base font-semibold text-white mt-1">Real estate coaching</dd>
            </div>
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Audience Base</dt>
              <dd className="text-base font-semibold text-white mt-1">217K Instagram followers</dd>
            </div>
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Project Scope</dt>
              <dd className="text-base font-semibold text-white mt-1">6-email welcome sequence</dd>
            </div>
            <div className="sm:col-span-2 card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Research Inputs</dt>
              <dd className="text-sm text-gray-300 mt-1">
                Audience research, customer reviews, competitor analysis, product mechanism research
              </dd>
            </div>
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Primary Goal</dt>
              <dd className="text-sm text-gray-300 mt-1">
                Convert cold subscribers into qualified applications
              </dd>
            </div>
            <div className="card-interactive p-4 rounded-xl border border-white/5">
              <dt className="text-xs uppercase tracking-wider text-gray-400 font-normal">Current Status</dt>
              <dd className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Completed and
                pre-launch
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FINAL CTA & AUTHOR */}
      <section className="mb-8 md:mb-10" id="author-footer">
        <div
          className="p-8 md:p-14 rounded-2xl bg-gradient-to-b from-[#141418] to-[#0d0d12] border border-white/10 text-center relative overflow-hidden"
          data-reveal="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to see the <span className="accent-italic">work itself?</span>
          </h2>
          <p className="text-gray-300 text-[15px] leading-[1.6] max-w-xl mx-auto mb-8">
            The strategy explains why the sequence was built this way. The actual emails show how
            that strategy was put into practice.
          </p>
          <a
            className="cta-glow-btn inline-flex items-center justify-center px-8 py-4 text-white font-bold tracking-wide rounded-full bg-[#0088ff] hover:bg-[#0077e6] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(0,136,255,0.35)] transition-all duration-200 cursor-pointer"
            href="https://docs.google.com/document/d/1RE-PE9fSbUBIImyrO7wDHGBvWaLDJdYb33Uu-4Ja7r8/edit?tab=t.0"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read the full case study
          </a>
        </div>

        {/* Author Attribution Card */}
        <aside
          className="p-6 md:p-8 rounded-2xl bg-[#121216]/80 border border-white/5 flex flex-col sm:flex-row items-center gap-6 mt-10"
          data-reveal="fade-up"
        >
          <img
            alt="Saad Zafar portrait"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#0088ff]/40 shadow-lg"
            src="/images/img_9.png"
          />
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-bold text-white mb-1">
              Case study by Saad Zafar | Copywriter and UI/UX Designer
            </h4>
            <p className="text-xs md:text-sm text-gray-400">
              Audience research, funnel diagnosis, sequence architecture, conversion-focused copy
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
