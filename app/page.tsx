"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, Send, Loader2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

type ProjectCategory = "copywriting" | "uiux" | "graphic-design";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("copywriting");

  // Smooth scroll handler for in-page anchors
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 88; // 80px fixed header + 8px clearance
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Handle hash scrolling when landing from another page or direct link
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        // Reset to top immediately so calculation and smooth scroll are deterministic
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const targetId = window.location.hash.replace("#", "");
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 88;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 120);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, []);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isNameValid = (val: string) => val.trim().split(/\s+/).filter(Boolean).length >= 2;
  const isEmailValid = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const isSubjectValid = (val: string) => val.trim().length > 0;
  const isMessageValid = (val: string) => val.trim().length > 0;

  const isFormValid =
    isNameValid(name) && isEmailValid(email) && isSubjectValid(subject) && isMessageValid(message);

  const wordCount = message.trim() ? message.trim().split(/\s+/).filter(Boolean).length : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validN = isNameValid(name);
    const validE = isEmailValid(email);
    const validS = isSubjectValid(subject);
    const validM = isMessageValid(message);

    setNameError(!validN);
    setEmailError(!validE);
    setSubjectError(!validS);
    setMessageError(!validM);

    if (validN && validE && validS && validM) {
      setLoading(true);
      setSubmitError(null);
      setSubmitted(false);

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fngbobjtnamnuimwzfze.supabase.co";
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_Yyi6kwDfzwKUIM6b_fkY9Q_k37RxixF";

      console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

      try {
        let submissionSuccess = false;

        // Try @supabase/supabase-js client first
        try {
          const { error } = await supabase.from("contact_submissions").insert([
            {
              name: name.trim(),
              email: email.trim(),
              subject: subject.trim() || null,
              message: message.trim(),
            },
          ]);

          if (!error) {
            submissionSuccess = true;
          } else {
            console.warn("Supabase SDK returned error, attempting direct fetch:", error);
          }
        } catch (sdkErr) {
          console.warn("Supabase SDK call threw, trying direct fetch fallback:", sdkErr);
        }

        // Direct fetch fallback if SDK didn't succeed
        if (!submissionSuccess) {
          const endpoint = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_submissions`;
          console.log("Submitting via direct fetch to:", endpoint);

          const res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: supabaseAnonKey,
              Authorization: `Bearer ${supabaseAnonKey}`,
              Prefer: "return=minimal",
            },
            body: JSON.stringify({
              name: name.trim(),
              email: email.trim(),
              subject: subject.trim() || null,
              message: message.trim(),
            }),
          });

          if (!res.ok) {
            let errorDetail = "";
            try {
              const errorJson = await res.json();
              errorDetail = errorJson.message || errorJson.error || JSON.stringify(errorJson);
            } catch {
              errorDetail = await res.text();
            }
            console.error("Direct fetch response error:", res.status, res.statusText, errorDetail);
            throw new Error(errorDetail || `Request failed with status ${res.status}`);
          }
        }

        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error("Submission error message:", errMsg);
        setSubmitError(
          errMsg || "Failed to submit your message. Please verify your Supabase project settings."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="relative z-10 pt-20 md:pt-24">
      {/* HERO SECTION */}
      <section className="relative pb-16 md:pb-24" id="hero">
        <div className="max-w-[1100px] md:max-w-4xl lg:max-w-[1100px] mx-auto px-6 md:px-8 lg:px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex-1 max-w-[620px] text-left items-start pt-4 md:pt-10">
              <div
                className="opacity-0 translate-y-4 animate-fade-in block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3"
                style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
              >
                WELCOME CREATORS - COACHES
              </div>
              <h1
                className="opacity-0 translate-y-6 animate-fade-in text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f3f4f6] tracking-tight leading-[1.15] mb-6"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                Copywriter &amp;
                <br />
                UI/UX&nbsp;
                <span className="accent-italic">Designer</span>
                <br />
              </h1>
              <p
                className="opacity-0 translate-y-6 animate-fade-in text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-8 max-w-[500px]"
                style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
              >
                I’m Saad Zafar. I write sales pages and email for coaches and creators, starting with
                the offer and working out from there.
              </p>
              <div
                className="opacity-0 translate-y-6 animate-fade-in flex flex-row items-center gap-4 mt-6"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <Link
                  className="cta-glow-btn rounded-full px-7 py-3.5 font-medium font-sans text-white bg-[#0088ff] hover:bg-[#0077e6] shadow-[0_0_20px_rgba(0,136,255,0.35)] active:scale-[0.96] active:brightness-125 transition-all duration-100 ease-out inline-flex items-center justify-center tracking-wide text-sm cursor-pointer"
                  href="#case-studies"
                  scroll={false}
                  onClick={(e) => scrollToSection(e, "case-studies")}
                >
                  View Projects
                </Link>
                <Link
                  className="cta-glow-btn rounded-full px-7 py-3.5 font-medium font-sans text-white bg-transparent border hover:border-[#0088ff] hover:bg-[#0088ff]/5 border-white/50 active:scale-[0.96] transition-all duration-100 ease-out inline-flex items-center justify-center tracking-wide text-sm cursor-pointer"
                  href="#contact"
                  scroll={false}
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div
              className="opacity-0 translate-y-8 animate-fade-in flex-1 mx-auto flex justify-center lg:justify-end relative md:max-w-[440px] lg:max-w-[540px] w-full h-auto items-center"
              style={{
                animationDelay: "750ms",
                animationFillMode: "forwards",
                maskImage: "linear-gradient(rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage: "linear-gradient(rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div
                className="absolute bottom-0 w-72 h-72 bg-[#0088ff]/20 rounded-full blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 136, 255, 0.22) 0%, rgba(10, 10, 12, 0) 70%)",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: "0px",
                }}
              />
              <img
                alt="Saad Zafar Portrait"
                className="relative z-10 w-full max-w-[440px] h-auto object-contain drop-shadow-2xl"
                src="/images/img_1.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES / PROJECTS SECTION */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 border-t border-white/10"
        id="case-studies"
      >
        <div className="text-center mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mb-3"
            data-reveal="fade-up"
          >
            My&nbsp;<span className="accent-italic">Projects</span>
          </h2>
          <p
            className="text-[#9ca3af] text-sm md:text-base max-w-xl mx-auto"
            data-reveal="fade-up"
          >
            Email funnels, sales pages, teardowns, and interface work, with the reasoning shown.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex justify-center items-center gap-3 mb-10 flex-wrap"
          data-reveal="fade-up"
        >
          <button
            onClick={() => setActiveCategory("copywriting")}
            className={`project-filter-btn px-5 py-2.5 rounded-full text-xs transition-all duration-150 active:scale-95 cursor-pointer font-semibold ${
              activeCategory === "copywriting"
                ? "bg-[#0088ff] text-white shadow-[0_0_15px_rgba(0,136,255,0.45)]"
                : "bg-transparent text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            Copywriting
          </button>
          <button
            onClick={() => setActiveCategory("uiux")}
            className={`project-filter-btn px-5 py-2.5 rounded-full text-xs transition-all duration-150 active:scale-95 cursor-pointer font-semibold ${
              activeCategory === "uiux"
                ? "bg-[#0088ff] text-white shadow-[0_0_15px_rgba(0,136,255,0.45)]"
                : "bg-transparent text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            UI/UX
          </button>
          <button
            onClick={() => setActiveCategory("graphic-design")}
            className={`project-filter-btn px-5 py-2.5 rounded-full text-xs transition-all duration-150 active:scale-95 cursor-pointer font-semibold ${
              activeCategory === "graphic-design"
                ? "bg-[#0088ff] text-white shadow-[0_0_15px_rgba(0,136,255,0.45)]"
                : "bg-transparent text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            Graphic Design
          </button>
        </div>

        {/* Copywriting Grid */}
        {activeCategory === "copywriting" && (
          <div
            className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6 animate-card-entrance"
            data-reveal="fade-up"
          >
            <Link
              href="/case-studies/lmcm"
              className="card-interactive flex flex-col justify-between h-full p-5 group block"
            >
              <div className="card-image aspect-video w-full rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img
                  alt="LMCM Case Study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/img_2.png"
                />
              </div>
              <div className="px-1 py-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  LMCM: Email funnel for a coaching brand
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                  Turning weak email funnels into high-converting revenue channels to get more
                  applications.
                </p>
                <span className="text-xs font-semibold text-[#0088ff] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            <Link
              href="/case-studies/arty-party"
              className="card-interactive flex flex-col justify-between h-full p-5 group block"
            >
              <div className="card-image aspect-video w-full rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img
                  alt="Arty Party On Wheels Strategy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/img_3.png"
                />
              </div>
              <div className="px-1 py-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Arty Party On Wheels — Strategy Case Study
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                  Mapping out traffic-to-booking systems with offer clarity and objection teardowns.
                </p>
                <span className="text-xs font-semibold text-[#0088ff] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* UI/UX Grid */}
        {activeCategory === "uiux" && (
          <div
            className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6 animate-card-entrance"
            data-reveal="fade-up"
          >
            <Link
              href="/case-studies/tripzee"
              className="card-interactive flex flex-col justify-between h-full p-5 group block"
            >
              <div className="card-image aspect-video w-full rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img
                  alt="Tripzee Mobile App Case Study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/img_4.png"
                />
              </div>
              <div className="px-1 py-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Tripzee Mobile App Case Study
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                  Streamlining complex booking funnels and travel coordination into a frictionless
                  mobile UI.
                </p>
                <span className="text-xs font-semibold text-[#0088ff] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            <Link
              href="/case-studies/air-studio"
              className="card-interactive flex flex-col justify-between h-full p-5 group block"
            >
              <div className="card-image aspect-video w-full rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img
                  alt="Narrator AI – AI Story Creator"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/narrator-ai-cover.png"
                />
              </div>
              <div className="px-1 py-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Narrator AI – AI Story Creator
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                  Designing generative AI prompt workflows and intuitive creation workspaces for
                  digital storytellers.
                </p>
                <span className="text-xs font-semibold text-[#0088ff] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Graphic Design Grid */}
        {activeCategory === "graphic-design" && (
          <div
            className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6 animate-card-entrance"
            data-reveal="fade-up"
          >
            <Link
              href="/case-studies/thumbnail-showcase"
              className="card-interactive flex flex-col justify-between h-full p-5 group block md:col-span-2 max-w-2xl mx-auto w-full"
            >
              <div className="card-image aspect-video w-full rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img
                  alt="Brand Identity & High-CTR Thumbnail Showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/img_5.png"
                />
              </div>
              <div className="px-1 py-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  Brand Identity &amp; High-CTR Thumbnail Showcase
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                  Visual psychology frameworks engineered to command attention in crowded content
                  feeds.
                </p>
                <span className="text-xs font-semibold text-[#0088ff] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        )}
      </section>

      {/* SERVICES SECTION */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 border-t border-white/10"
        id="services"
      >
        <div className="text-center mb-8 md:mb-10">
          <div
            className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3"
            data-reveal="fade-up"
          >
            HOW I CAN HELP
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mb-3"
            data-reveal="fade-up"
          >
            Three ways to work with me
          </h2>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up">
          {/* Offer 1 */}
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <div className="block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0088ff] mb-3">
                OFFER 01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sales page copy and design</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                Copy, layout, and a build for a single sales page.
              </p>
              <div className="h-px bg-white/10 my-4" />
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Offer positioning and headline</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Section structure and CTA placement</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Custom web design and build</span>
                </div>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <div className="block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0088ff] mb-3">
                OFFER 02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email sequences</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                Emails that move subscribers toward a purchase.
              </p>
              <div className="h-px bg-white/10 my-4" />
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Welcome and onboarding emails</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Problem and strategy emails</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Offer pitch and objection replies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Offer 3 (Featured Ecosystem) */}
          <div className="card-interactive flex flex-col justify-between h-full p-7 border-[#0088ff]/40 shadow-[0_0_24px_rgba(0,136,255,0.12)]">
            <div>
              <div className="block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0088ff] mb-3">
                COMPLETE ECOSYSTEM
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sales page and Email</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                The page and the emails make the same case, in the same order.
              </p>
              <div className="h-px bg-white/10 my-4" />
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Sales page copy and design</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Email sequences written to match</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs md:text-sm text-[#d1d5db]">
                  <span className="text-[#0088ff] font-bold">✓</span>
                  <span>Launch and funnel strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK SECTION */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 border-t border-white/10"
        id="how-i-work"
      >
        <div className="text-center mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mb-3"
            data-reveal="fade-up"
          >
            My Work&nbsp;<span className="accent-italic">Process&nbsp;</span>
          </h2>
          <p
            className="text-[#9ca3af] text-sm md:text-base max-w-2xl mx-auto"
            data-reveal="fade-up"
          >
            Before I write a headline, I want to understand what you&apos;re selling, who you&apos;re
            selling it to, why people buy it, and where they usually hesitate.
          </p>
        </div>

        {/* 3-Column Responsive Grid (Steps 01-05 + The Result) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up">
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff]/40 block mb-3">01</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">Understand the offer</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                I look at the product, the buyer, the current marketing, and the numbers behind it.
              </p>
            </div>
          </div>
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff]/40 block mb-3">02</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">Find the angle</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                The best selling point is often not on the homepage. I look for the part of the
                offer that gives the right buyer a reason to care.
              </p>
            </div>
          </div>
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff]/40 block mb-3">03</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">Write the message</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                The copy answers the questions a buyer has before paying: is it proven, and what
                could go wrong.
              </p>
            </div>
          </div>
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff]/40 block mb-3">04</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">Review the page</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                I read it the way a hesitant buyer would, then fix every spot where they stop.
              </p>
            </div>
          </div>
          <div className="card-interactive flex flex-col justify-between h-full p-7">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff]/40 block mb-3">05</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">Refine</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                I go back through the page with one question in mind: where could a confused or
                unconvinced prospect stop reading? Those friction points get fixed.
              </p>
            </div>
          </div>
          <div className="card-interactive flex flex-col justify-between h-full p-7 bg-[#0088ff]/5 border-[#0088ff]/30">
            <div>
              <span className="text-4xl font-extrabold text-[#0088ff] block mb-3">✓</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] mb-2">The Result</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                Cohesive conversion assets where copy and visual hierarchy align perfectly, keeping
                prospects engaged all the way through to the final call to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SAAD ZAFAR SECTION */}
      <section
        className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 border-t border-white/10"
        id="about"
      >
        <div className="text-center mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f3f4f6] tracking-tight mb-2"
            data-reveal="fade-up"
          >
            About Saad Zafar
          </h2>
          <p className="text-[#9ca3af] text-sm md:text-base" data-reveal="fade-up">
            Copywriting &amp; UI/UX Design
          </p>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          data-reveal="fade-up"
        >
          {/* Photo Card */}
          <div className="lg:col-span-5 card-interactive h-full min-h-[380px] relative overflow-hidden flex items-center justify-center bg-black/30">
            <img
              alt="Saad Zafar Portrait"
              className="w-full h-full object-cover object-center"
              src="/images/img_6.png"
            />
          </div>

          {/* Bio Content Card */}
          <div className="lg:col-span-7 card-interactive p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#f3f4f6] leading-snug">
                I got into copywriting because I liked figuring out why people say yes.
              </h3>
              <p className="text-[#d1d5db] text-sm md:text-base leading-relaxed">
                I work across copywriting and web design with a dedicated focus on sales pages and
                email marketing. Because of my background in design, I don&apos;t treat copy and
                layout as separate disciplines—a powerful headline loses its impact if the design
                buries it, while a visually stunning page will fail if the offer isn&apos;t clear.
              </p>
              <p className="text-[#d1d5db] text-sm md:text-base leading-relaxed">
                I continuously sharpen my skills by working in public—studying real businesses,
                breaking down their sales funnels, and documenting my strategic breakdowns.
                Ultimately, I would rather demonstrate how I think and structure conversion systems
                than fill this page with impressive-sounding adjectives.
              </p>
            </div>
            <div className="pt-6 mt-4">
              <a
                className="cta-glow-btn btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium font-sans text-white rounded-full bg-[#0088ff] hover:bg-[#0077e6] shadow-[0_0_20px_rgba(0,136,255,0.35)] active:scale-[0.96] transition-all duration-100 ease-out tracking-wide"
                href="https://www.linkedin.com/in/saadzafarcopy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Connect with me on LinkedIn <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="mb-16 md:mb-24 border-t border-white/10 pt-12 md:pt-16 max-w-[1100px] mx-auto px-6"
        id="contact"
      >
        <div className="max-w-xl mx-auto" data-reveal="fade-up">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0088ff] mb-3 block">
            LET&apos;S WORK TOGETHER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-base text-[#9ca3af] max-w-lg mb-8">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="p-6 md:p-8 rounded-xl bg-[#121216] border border-white/10">
            {submitted && (
              <div className="p-4 rounded-lg bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-sm font-medium mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Message sent successfully! I&apos;ll get back to you as soon as possible.</span>
              </div>
            )}

            {submitError && (
              <div className="p-4 rounded-lg bg-red-950/70 border border-red-500/50 text-red-300 text-sm font-medium mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="text-sm font-medium text-white mb-2 block" htmlFor="name">
                  Name
                </label>
                <input
                  className={`bg-[#141418] border rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#0088ff] focus:ring-1 focus:ring-[#0088ff] transition-colors duration-200 w-full ${
                    nameError ? "border-red-500" : "border-white/10"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Your name (first and last)"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (isNameValid(e.target.value)) setNameError(false);
                  }}
                  onBlur={() => setNameError(!isNameValid(name))}
                />
                {nameError && (
                  <span className="text-red-400 text-xs mt-1.5 block">
                    Please enter your full name (first and last name)
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-white mb-2 block" htmlFor="email">
                  Email
                </label>
                <input
                  className={`bg-[#141418] border rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#0088ff] focus:ring-1 focus:ring-[#0088ff] transition-colors duration-200 w-full ${
                    emailError ? "border-red-500" : "border-white/10"
                  }`}
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isEmailValid(e.target.value)) setEmailError(false);
                  }}
                  onBlur={() => setEmailError(!isEmailValid(email))}
                />
                {emailError && (
                  <span className="text-red-400 text-xs mt-1.5 block">
                    Please enter a valid email address
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-white mb-2 block" htmlFor="subject">
                  Subject
                </label>
                <input
                  className={`bg-[#141418] border rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#0088ff] focus:ring-1 focus:ring-[#0088ff] transition-colors duration-200 w-full ${
                    subjectError ? "border-red-500" : "border-white/10"
                  }`}
                  id="subject"
                  name="subject"
                  placeholder="Subject / Service needed"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (isSubjectValid(e.target.value)) setSubjectError(false);
                  }}
                  onBlur={() => setSubjectError(!isSubjectValid(subject))}
                />
                {subjectError && (
                  <span className="text-red-400 text-xs mt-1.5 block">Please enter a subject</span>
                )}
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium text-white mb-2 block" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`bg-[#141418] border rounded-lg px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#0088ff] focus:ring-1 focus:ring-[#0088ff] transition-colors duration-200 w-full resize-none ${
                    messageError ? "border-red-500" : "border-white/10"
                  }`}
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, offer, or goals..."
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (isMessageValid(e.target.value)) setMessageError(false);
                  }}
                  onBlur={() => setMessageError(!isMessageValid(message))}
                />
                <div className="flex justify-between items-center mt-1.5">
                  {messageError ? (
                    <span className="text-red-400 text-xs">Please enter a message</span>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gray-500 ml-auto">
                    {wordCount} {wordCount === 1 ? "word" : "words"}
                  </span>
                </div>
              </div>

              <button
                className={`cta-glow-btn w-full rounded-lg py-3.5 px-6 font-semibold transition-all duration-150 ease-out flex items-center justify-center gap-2 ${
                  isFormValid && !loading
                    ? "bg-[#0088ff] text-white hover:bg-[#0077e6] hover:shadow-[0_0_20px_rgba(0,136,255,0.4)] cursor-pointer active:scale-[0.98]"
                    : "bg-[#0088ff]/40 text-white/50 cursor-not-allowed opacity-60 shadow-none"
                }`}
                disabled={!isFormValid || loading}
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
