import type { Metadata } from "next";
import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import { caseStudies } from "@/content/cases";

export const metadata: Metadata = {
  title: "Results — Proof Beats Theory",
  description: "Real results from real people who went from idea to first order with ExportAcademy.",
};

const methodology = [
  {
    title: "Clear path",
    icon: "🗺",
    desc: "No ambiguity about what to do next. Each step has a deliverable. The path doesn't end until goods are landed.",
  },
  {
    title: "Accountability",
    icon: "🤝",
    desc: "1:1 check-ins prevent stalling. Most people who fail at importing fail in execution, not knowledge. We fix that.",
  },
  {
    title: "China-side execution",
    icon: "🏭",
    desc: "We have on-the-ground supply chain intelligence. Verified factories. Known trade routes. Relationships that took years to build.",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Results
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Proof beats theory.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Real people. Real first orders. All started with no prior import experience.
            </p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Leave WhatsApp — Start your story →
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Case studies</h2>
            <p className="text-slate-500">6 different starting points. 6 completed first orders.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <CaseCard key={c.id} case_={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Why it works</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Three things separate people who finish their first order from people who &ldquo;almost&rdquo; did.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((m) => (
              <div key={m.title} className="text-center">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build your story?</h2>
          <p className="text-slate-400 mb-8">Leave your WhatsApp. We map your first order together — free.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Leave WhatsApp →
            </Link>
            <Link
              href="/program#99"
              className="inline-flex items-center gap-2 border border-slate-600 text-white font-medium px-8 py-4 rounded-md hover:border-white transition-colors"
            >
              Try $99 Self-Study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
