import type React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Sparkles,
  Database,
  Zap,
  Check,
  Inbox,
  Brain,
  Target,
  CalendarCheck,
  Mic,
  Trophy,
  Play,
} from "lucide-react";
import ctaGraphImage from "../imports/image-4.png";
import logo from "../imports/Logo_for_Relayer.png";
import { RelationshipCard } from "./components/RelationshipCard";

const aiMoves = [
  {
    id: 1,
    action: "Follow up with Sarah",
    detail:
      "you met 2 weeks ago, her interview is this Friday.",
    tag: "Event follow-up",
    tagColor: "bg-[#5FA4AF]/10 text-[#307480]",
  },
  {
    id: 2,
    action: "Reignite 3 weak ties",
    detail: "they're going cold.",
    tag: "Weak tie",
    tagColor: "bg-[#C3E1E5] text-[#1C3940]",
  },
  {
    id: 3,
    action: "Intro: Alex ↔ Priya",
    detail: "shared interest in climate tech.",
    tag: "Intro path",
    tagColor: "bg-[#5FA4AF]/10 text-[#307480]",
  },
];

export default function App() {
  const [pricingType, setPricingType] = useState<
    "students" | "professionals"
  >("students");
  const [comparisonView, setComparisonView] = useState<
    "storage" | "execution"
  >("execution");

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(95,164,175,0.06),transparent_50%)]" />

      {/* Main content */}
      <div className="relative">
        {/* Header */}
        <header className="px-6 py-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Relayer"
                className="w-8 h-8"
              />
              <span className="font-semibold text-xl">
                Relayer
              </span>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-sm text-gray-600 hover:text-[#307480] transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-gray-600 hover:text-[#307480] transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-sm text-gray-600 hover:text-[#307480] transition-colors"
                >
                  About us
                </a>
              </nav>
              <button className="px-4 py-2 text-sm hover:bg-[#EEF6F8] rounded-lg transition-colors">
                Sign in
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl tracking-tight">
                  Turn your network into an active{" "}
                  <span className="text-[#307480]">asset.</span>
                </h1>
                <div className="space-y-2">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Relayer is your AI Relationship OS that
                    tells you exactly who to reach out to, when,
                    and why?
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    So that, no relationship quietly dies.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <button className="group px-8 py-4 bg-[#307480] text-white rounded-xl hover:bg-[#1C3940] transition-all flex items-center gap-2 shadow-lg shadow-[#307480]/20">
                    Get Started for Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl hover:bg-[#EEF6F8] transition-all flex items-center gap-2">
                    <Play className="w-5 h-5 text-[#307480]" />
                    Watch Demo
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Built for students, early-stage career seekers
                </p>
              </div>
            </div>

            {/* Right: Floating Relationship Cards */}
            <div className="relative hidden h-[520px] lg:block">
              <div className="absolute inset-0">
                <RelationshipCard
                  icon="👋"
                  title="Follow up now"
                  name="Sarah Chen"
                  detail="Last spoke 3 months ago • Product Designer at Stripe"
                  urgency="high"
                  style={{ animationDelay: "0s" }}
                  className="absolute top-40 right-3 w-52 animate-float"
                />

                <RelationshipCard
                  icon="🚀"
                  title="Job change detected"
                  name="Marcus Williams"
                  detail="Now VP Engineering at Notion • Joined 2 weeks ago"
                  urgency="medium"
                  style={{ animationDelay: "0.45s" }}
                  className="absolute top-60 left-49 w-52 animate-float"
                />

                <RelationshipCard
                  icon="🤝"
                  title="Warm intro path"
                  name="Alex Rivera"
                  detail="Mutual: 3 close contacts • Founder at Lattice"
                  urgency="medium"
                  style={{ animationDelay: "0.9s" }}
                  className="absolute top-80 right-0 w-52 animate-float"
                />

                <RelationshipCard
                  icon="💡"
                  title="Shared interest"
                  name="Emma Thompson"
                  detail="Posted about AI agents • Senior PM at Anthropic"
                  urgency="low"
                  style={{ animationDelay: "1.35s" }}
                  className="absolute bottom-8 left-49 w-52 animate-float"
                />
              </div>

              {/* Tagline below cards */}
              <div className="absolute bottom-0 left-40 right-0 text-center">
                <h3 className="text-[15px] font-medium tracking-[0.02em] text-[#607794]">
                  Act on your network before it fades
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="px-6 py-20 bg-[#EEF6F8]">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl lg:text-5xl tracking-tight max-w-4xl mx-auto">
                A Relationship Execution Layer.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Most tools store relationships. Relayer
                activates them. It continuously reads your
                emails, calendar, and interactions to surface
                precise actions—not just stats.
              </p>
            </div>

            {/* Toggle pill */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setComparisonView("storage")}
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                    comparisonView === "storage"
                      ? "bg-[#307480] text-white shadow-md"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Database className="w-4 h-4" />
                  Storage
                </button>
                <button
                  onClick={() => setComparisonView("execution")}
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
                    comparisonView === "execution"
                      ? "bg-[#307480] text-white shadow-md"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Execution
                </button>
              </div>
            </div>

            {/* Comparison cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Old way */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  comparisonView === "storage"
                    ? "bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] border-[#5FA4AF]/30"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      comparisonView === "storage"
                        ? "bg-[#307480]"
                        : "bg-gray-100"
                    }`}
                  >
                    <Database
                      className={`w-5 h-5 transition-colors ${
                        comparisonView === "storage"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Old way: Contact storage
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    <span>Static list of names.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    <span>
                      You have to decide who to reach out to.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    <span>
                      No sense of timing or opportunity.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* New way */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border relative overflow-hidden transition-all duration-300 ${
                  comparisonView === "execution"
                    ? "bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] border-[#5FA4AF]/30"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Accent glow */}
                {comparisonView === "execution" && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#5FA4AF]/20 rounded-full blur-3xl" />
                )}

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        comparisonView === "execution"
                          ? "bg-[#307480]"
                          : "bg-gray-100"
                      }`}
                    >
                      <Zap
                        className={`w-5 h-5 transition-colors ${
                          comparisonView === "execution"
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Relayer: Relationship Execution Layer
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                          comparisonView === "execution"
                            ? "text-[#307480]"
                            : "text-gray-400"
                        }`}
                      />
                      <span>
                        AI-generated weekly playbook (who, when,
                        why).
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                          comparisonView === "execution"
                            ? "text-[#307480]"
                            : "text-gray-400"
                        }`}
                      />
                      <span>
                        Relationship strength scores for each
                        contact.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                          comparisonView === "execution"
                            ? "text-[#307480]"
                            : "text-gray-400"
                        }`}
                      />
                      <span>
                        Automatic detection of job changes, weak
                        ties, and intros.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Engine Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl tracking-tight">
                Your AI Relationship Action Engine.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every week, Relayer turns messy interactions
                into a prioritized list of moves.
              </p>
            </div>

            {/* 3-step flow */}
            <div className="relative">
              {/* Progress line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5FA4AF]/30 via-[#307480]/40 to-[#5FA4AF]/30 mx-32" />

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Step 1: Ingest */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5FA4AF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#307480] to-[#1C3940] flex items-center justify-center mb-6 relative z-10">
                      <Inbox className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="text-sm font-medium text-[#307480] mb-3">
                      Step 1
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">
                      Ingest
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Relayer unifies contacts and history from
                      Gmail, Calendar, and LinkedIn into a
                      single graph.
                    </p>

                    {/* Tag */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        Unified Contact Intelligence
                      </span>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                        Syncs 2,347 contacts across platforms
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: Understand */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5FA4AF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5FA4AF] to-[#307480] flex items-center justify-center mb-6 relative z-10">
                      <Brain className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="text-sm font-medium text-[#5FA4AF] mb-3">
                      Step 2
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">
                      Understand
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      It calculates relationship strength and
                      detects weak ties, new jobs, and key life
                      events.
                    </p>

                    {/* Tag */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        Relationship Strength Score
                      </span>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                        You haven't spoken to Maya in 90
                        days—she just changed jobs.
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: Act */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5FA4AF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#307480] to-[#5FA4AF] flex items-center justify-center mb-6 relative z-10">
                      <Target className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="text-sm font-medium text-[#307480] mb-3">
                      Step 3
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">
                      Act
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      You get a weekly action list with
                      suggested messages and intros.
                    </p>

                    {/* Tag */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        Smart Follow-up Engine + Weekly AI
                        Suggestions
                      </span>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                        12 high-priority actions this week
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Networking Rituals Section */}
        <section
          id="features"
          className="px-6 py-20 bg-[#EEF6F8]"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl tracking-tight">
                Designed for real-world networking habits.
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto whitespace-nowrap">
                Relayer doesn't expect you to become a CRM
                admin. It wraps around rituals you actually
                stick to.
              </p>
            </div>

            {/* Ritual tiles */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Tile 1: Sunday Network Review */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5FA4AF]/10 flex items-center justify-center mb-6">
                  <CalendarCheck className="w-6 h-6 text-[#307480]" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Sunday Network Review
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A weekly ritual that shows 5–10 people you
                  should reconnect with and why, so your network
                  never leaks.
                </p>

                {/* Visual mockup */}
                <div className="bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] rounded-2xl p-4 border border-[#5FA4AF]/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#307480]" />
                      <span className="text-sm font-medium text-gray-900">
                        Sunday Review
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      12 mins
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Sarah Chen",
                      "Marcus Liu",
                      "Priya Patel",
                      "Jordan Kim",
                      "Alex Rivera",
                    ].map((name, idx) => (
                      <div
                        key={idx}
                        className="bg-white/80 rounded-lg px-3 py-2 text-sm text-gray-700 flex items-center gap-2"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5FA4AF] to-[#307480] flex items-center justify-center text-white text-xs">
                          {name.charAt(0)}
                        </div>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tile 2: Capture in seconds */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5FA4AF]/10 flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-[#307480]" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Capture in seconds
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Log interactions with quick notes or voice
                  memos—no complex forms or deal stages.
                </p>

                {/* Visual mockup */}
                <div className="bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] rounded-2xl p-6 border border-[#5FA4AF]/20 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5FA4AF] to-[#307480] flex items-center justify-center mb-4 hover:scale-105 transition-transform cursor-pointer shadow-lg">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 text-center mb-3">
                    Tap to record
                  </p>
                  <div className="w-full bg-white/80 rounded-lg px-3 py-2 text-xs text-gray-600 italic mb-4">
                    "Great coffee chat with Sarah. She's looking
                    for climate tech intros..."
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#5FA4AF]"></div>
                      <span>Auto-transcribed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#5FA4AF]"></div>
                      <span>Synced instantly</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#5FA4AF]"></div>
                      <span>Context added to contact</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tile 3: Streaks & XP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5FA4AF]/10 flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-[#307480]" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Streaks & XP
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Earn streaks and XP for consistent follow-ups,
                  turning networking into a game instead of a
                  chore.
                </p>

                {/* Visual mockup */}
                <div className="bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] rounded-2xl p-6 border border-[#5FA4AF]/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5FA4AF] to-[#307480] flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        7-week streak
                      </span>
                    </div>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          Weekly XP
                        </span>
                        <span className="font-medium text-gray-900">
                          450 / 500
                        </span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#5FA4AF] to-[#307480] rounded-full"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center pt-2">
                      1 more follow-up to unlock Pro status
                    </div>
                  </div>
                </div>

                {/* Super Connector Achievement Box */}
                <div className="mt-5 bg-gradient-to-br from-[#C3E1E5] to-[#EEF6F8] rounded-2xl p-6 border border-[#5FA4AF]/20">
                  <h4 className="text-base font-semibold text-[#5FA4AF] mb-1">
                    Super Connector
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Connect with 25 people
                  </p>
                  <p className="text-lg font-semibold text-[#307480]">
                    +500 XP
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Section title */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl lg:text-5xl tracking-tight">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start for free. Scale as your network grows.
              </p>
            </div>

            {/* Toggle pill */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center bg-[#EEF6F8] rounded-full p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setPricingType("students")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    pricingType === "students"
                      ? "bg-[#307480] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Students
                </button>
                <button
                  onClick={() =>
                    setPricingType("professionals")
                  }
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    pricingType === "professionals"
                      ? "bg-[#307480] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Professionals
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Free Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Free Tier
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      $0
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#307480] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Up to 5,000 contacts
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#307480] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Basic features
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Paid Tier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#307480] to-[#1C3940] rounded-2xl p-8 border-2 border-[#307480] hover:shadow-xl transition-all relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#5FA4AF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Up to 5,000 contacts
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${pricingType === "students" ? "9" : "20"}
                    </span>
                    <span className="text-white/80">
                      /month
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C3E1E5] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      All free features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C3E1E5] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">
                      AI-powered insights
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Beyond 5000 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Beyond 5,000 contacts
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">
                      +$
                      {pricingType === "students" ? "5" : "10"}
                    </span>
                    <span className="text-gray-600 text-sm">
                      /5,000 contacts
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#307480] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      All premium features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#307480] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Scale as you grow
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section id="about" className="px-6 py-20 bg-[#EEF6F8]">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl tracking-tight">
                Built for people who win through relationships
              </h2>
            </div>

            {/* Audience cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: MBA students */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:shadow-[#5FA4AF]/40 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-semibold leading-tight mb-4">
                  MBA STUDENTS & EARLY PROFESSIONALS
                </h3>
                <div className="space-y-6 flex-1">
                  <p className="text-gray-700">
                    You meet dozens of people —
                    <br />
                    but most connections fade
                  </p>
                  <h4 className="text-gray-900 font-medium">
                    Relayer helps you turn every conversation
                    into a long-term opportunity.
                  </h4>
                </div>
              </motion.div>

              {/* Card 2: Founders, consultants */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:shadow-[#5FA4AF]/40 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-semibold leading-tight mb-4">
                  FOUNDERS, CONSULTANTS, BD
                </h3>
                <div className="space-y-6 flex-1">
                  <p className="text-gray-700">
                    Your network is your biggest asset —
                    <br />
                    but it goes cold between deals.
                  </p>
                  <h4 className="text-gray-900 font-medium">
                    Stay top-of-mind with the people who open
                    your next opportunity.
                  </h4>
                </div>
              </motion.div>

              {/* Card 3: Sales & VC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:shadow-[#5FA4AF]/40 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-semibold leading-tight mb-4">
                  SALES & VC NETWORKERS
                </h3>
                <div className="space-y-6 flex-1">
                  <p className="text-gray-700">
                    You meet hundreds of people —
                    <br />
                    but can’t track who matters most.
                  </p>
                  <h4 className="text-gray-900 font-medium">
                    Relayer surfaces the right person at the
                    right time—so you act first.
                  </h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 py-32 bg-gradient-to-b from-white to-[#EEF6F8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - CTA content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Heading */}
                <h2 className="text-5xl lg:text-6xl tracking-tight">
                  Never let your network go cold again.
                </h2>

                {/* Subheading */}
                <p className="text-xl text-gray-600">
                  Join the first cohort using Relayer as your AI
                  Relationship OS.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button className="group px-8 py-4 bg-[#307480] text-white rounded-xl hover:bg-[#1C3940] transition-all flex items-center gap-2 shadow-lg shadow-[#307480]/20 text-lg font-medium whitespace-nowrap">
                    Get early access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl hover:bg-[#EEF6F8] transition-all text-lg font-medium whitespace-nowrap">
                    See how the weekly report works
                  </button>
                </div>

                {/* Social proof */}
                <p className="text-sm text-gray-500 pt-4">
                  Validated with MBAs, sales teams, and founders
                  through concierge MVPs and interviews.
                </p>
              </motion.div>

              {/* Right side - Graph visualization */}
              {/* Right side - Graph visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mx-auto h-[520px] w-full max-w-[720px]">
                  <svg
                    viewBox="0 0 720 520"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Primary path */}
                    <path
                      d="M120 110 L280 70 L470 110 L615 205"
                      stroke="#5FA4AF"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />

                    {/* Secondary graph lines */}
                    <path
                      d="M120 110 L200 285 L390 395 L295 500"
                      stroke="#C3E1E5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.55"
                    />
                    <path
                      d="M470 110 L525 285"
                      stroke="#C3E1E5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.55"
                    />
                    <path
                      d="M200 285 L390 395 L585 445"
                      stroke="#C3E1E5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.45"
                    />

                    {/* Main nodes */}
                    <circle
                      cx="120"
                      cy="110"
                      r="28"
                      fill="#5FA4AF"
                    />
                    <circle
                      cx="280"
                      cy="70"
                      r="23"
                      fill="#C3E1E5"
                    />
                    <circle
                      cx="470"
                      cy="110"
                      r="20"
                      fill="#8FC2CA"
                    />
                    <circle
                      cx="615"
                      cy="205"
                      r="24"
                      fill="#307480"
                    />

                    {/* Secondary nodes */}
                    <circle
                      cx="200"
                      cy="285"
                      r="17"
                      fill="#C3E1E5"
                      opacity="0.65"
                    />
                    <circle
                      cx="390"
                      cy="395"
                      r="17"
                      fill="#C3E1E5"
                      opacity="0.6"
                    />
                    <circle
                      cx="295"
                      cy="500"
                      r="17"
                      fill="#C3E1E5"
                      opacity="0.55"
                    />
                    <circle
                      cx="525"
                      cy="285"
                      r="17"
                      fill="#C3E1E5"
                      opacity="0.55"
                    />
                    <circle
                      cx="585"
                      cy="445"
                      r="17"
                      fill="#C3E1E5"
                      opacity="0.55"
                    />
                  </svg>

                  <div className="absolute left-[92px] top-[145px] text-[20px] font-semibold text-[#1C3940]">
                    You
                  </div>

                  <div className="absolute right-[28px] top-[245px] text-[20px] font-semibold text-[#1C3940]">
                    Target
                  </div>

                  <div className="absolute left-[375px] top-[65px] rounded-[22px] border border-[#C3E1E5] bg-white/90 px-6 py-4 shadow-[0_10px_30px_rgba(28,57,64,0.10)] backdrop-blur-sm">
                    <div className="text-[20px] font-medium text-[#607794]">
                      Path found
                    </div>
                    <div className="text-[17px] font-semibold text-[#1C3940]">
                      3 intro hops
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 bg-[#EEF6F8] border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Relayer"
                  className="w-7 h-7"
                />
                <span className="font-semibold text-lg">
                  Relayer
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#307480] transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-[#307480] transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-[#307480] transition-colors"
                >
                  Contact
                </a>
              </div>
              <p className="text-sm text-gray-500">
                © 2026 Relayer. Your AI Relationship OS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}