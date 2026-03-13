import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program — Pick a Track. Finish Your First Order.",
  description:
    "Three tracks to your first import order. $99 self-study, $499 guided 8 weeks, $999 done-with-you 16 weeks.",
};

const curriculum = [
  {
    step: "01",
    title: "Product Selection & Market Research",
    bullets: [
      "Category analysis and competition mapping",
      "Demand validation before sourcing",
      "Pricing structure and margin modelling",
    ],
  },
  {
    step: "02",
    title: "Supplier Discovery & Verification",
    bullets: [
      "Factory vs. trading company identification",
      "Shortlisting certified suppliers (1-3)",
      "Communication scripts and negotiation basics",
    ],
  },
  {
    step: "03",
    title: "Sampling & Quality Assessment",
    bullets: [
      "Sample request protocol",
      "Scorecard-based supplier comparison",
      "Approval criteria and red flags",
    ],
  },
  {
    step: "04",
    title: "Order Placement & Contracts",
    bullets: [
      "Product specification sheet creation",
      "Payment terms and Trade Assurance setup",
      "Purchase order documentation",
    ],
  },
  {
    step: "05",
    title: "Quality Control & Pre-shipment",
    bullets: [
      "Pre-shipment inspection protocol",
      "Defect classification and rejection criteria",
      "Approval or dispute process",
    ],
  },
  {
    step: "06",
    title: "Logistics, Customs & Delivery",
    bullets: [
      "Air vs. ocean freight decision framework",
      "Incoterms and freight forwarder selection",
      "Customs clearance and landed cost calculation",
    ],
  },
];

const faqs = [
  {
    q: "What exactly do I get in the $499 guided track?",
    a: "8 weeks of structured guidance: product selection help, access to 1-2 certified and verified suppliers in your category, step-by-step walkthroughs for sampling, ordering, and quality control, plus 1:1 WhatsApp support throughout. The goal is one completed first order — goods landed at your door.",
  },
  {
    q: "What does 'certified supplier' mean?",
    a: "Suppliers we've verified through our own sourcing process: confirmed manufacturer status, audited factory documentation, and prior relationship. Not random Alibaba listings.",
  },
  {
    q: "Do I need to speak Mandarin?",
    a: "No. All supplier communication is handled in English. For the $999 track, we handle the entire China-side process for you.",
  },
  {
    q: "What's the difference between $499 and $999?",
    a: "$499: I walk with you and guide every step, but you execute. $999: We execute the China-side (factory selection, sampling coordination, QC, shipping) and you approve decisions. $999 is for people who want the outcome without the operational learning curve.",
  },
  {
    q: "What if I don't know what product to sell?",
    a: "That's the starting point for the free 1:1 consultation. Tell us your background, budget, and interests — we map your best first product.",
  },
  {
    q: "What's the minimum budget I need besides the program fee?",
    a: "Budget $500–$2,000 for your first order (product + shipping). The program fee is separate from inventory cost.",
  },
  {
    q: "Why do you want me to talk 1:1 before joining the $499/$999 track?",
    a: "Because the right track depends on your specific situation, product category, and timeline. We want to make sure the program is a fit before you pay. The consultation is free and takes 15 minutes.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "We don't offer blanket refunds, but we do offer outcome accountability. If you complete the program, execute all the steps, and don't place a first order, we'll extend your support at no charge until you do.",
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Pick a track.<br />Finish your first order.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Your first order — I walk it with you (1:1). Three tracks, one destination: goods landed, margin proven.
            </p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Leave WhatsApp — Get a free plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Free tailored plan hook */}
      <section className="bg-orange-50 border-y border-orange-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Get a tailored plan for your first order — free.
              </h2>
              <p className="text-slate-600 max-w-lg">
                Tell us what you sell (or want to sell). We map your next best step, the right suppliers for your category, and which track makes sense for your budget.
              </p>
            </div>
            <Link
              href="/talk"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
            >
              Get my plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Three tracks. One first order.</h2>
            <p className="text-slate-500">Choose based on how much execution support you want.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* $99 */}
            <div id="99" className="border border-slate-200 rounded-xl p-6 flex flex-col scroll-mt-20">
              <div className="mb-5">
                <p className="text-3xl font-bold text-slate-900 mb-1">$99</p>
                <p className="font-semibold text-slate-700 mb-1">Self-Study</p>
                <p className="text-xs text-slate-400">One-time, instant access</p>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Full video curriculum (6 modules)",
                  "Supplier outreach scripts",
                  "Product spec template",
                  "QC checklist",
                  "Sampling scorecard",
                  "Shipping & logistics guide",
                  "Community forum access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <Link
                  href="/talk"
                  className="block text-center bg-slate-900 text-white text-sm font-medium py-2.5 px-4 rounded-md hover:bg-slate-700 transition-colors"
                >
                  Start $99
                </Link>
                <p className="text-xs text-center text-slate-400">
                  Talk 1:1 before joining →{" "}
                  <Link href="/talk" className="underline hover:text-slate-600">
                    /talk
                  </Link>
                </p>
              </div>
            </div>

            {/* $499 */}
            <div id="499" className="border-2 border-orange-400 rounded-xl p-6 flex flex-col relative shadow-md scroll-mt-20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
              <div className="mb-5">
                <p className="text-3xl font-bold text-slate-900 mb-1">$499</p>
                <p className="font-semibold text-slate-700 mb-1">Guided — 8 Weeks</p>
                <p className="text-xs text-slate-400">Your first order — I walk it with you.</p>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Everything in Self-Study",
                  "1-2 certified, verified suppliers",
                  "8-week guided execution",
                  "WhatsApp 1:1 support throughout",
                  "Sample evaluation with you",
                  "Order placement walkthrough",
                  "Pre-shipment QC review",
                  "Outcome accountability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-4 border-t border-orange-100">
                <Link
                  href="/talk"
                  className="block text-center bg-orange-500 text-white text-sm font-semibold py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Talk 1:1 before joining
                </Link>
                <p className="text-xs text-center text-slate-500">
                  Free consultation. No commitment.
                </p>
              </div>
            </div>

            {/* $999 */}
            <div id="999" className="border border-slate-200 rounded-xl p-6 flex flex-col scroll-mt-20">
              <div className="mb-5">
                <p className="text-3xl font-bold text-slate-900 mb-1">$999</p>
                <p className="font-semibold text-slate-700 mb-1">Done-with-you — 16 Weeks</p>
                <p className="text-xs text-slate-400">We execute. You approve and scale.</p>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Everything in Guided",
                  "2-3 factories sourced for you",
                  "China-side production management",
                  "Full QC and inspection coordinated",
                  "Shipping and customs handled",
                  "Stable channel setup",
                  "16-week ongoing support",
                  "Priority WhatsApp access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-slate-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <Link
                  href="/talk"
                  className="block text-center bg-slate-900 text-white text-sm font-medium py-2.5 px-4 rounded-md hover:bg-slate-700 transition-colors"
                >
                  Apply on WhatsApp →
                </Link>
                <p className="text-xs text-center text-slate-400">
                  Limited spots. Application required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-slate-50 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">What you learn. What you do.</h2>
            <p className="text-slate-500">6 modules. Start to finish. Factory to your door.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculum.map((mod) => (
              <div key={mod.step} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-slate-200">{mod.step}</span>
                  <h3 className="font-semibold text-slate-900 text-sm">{mod.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {mod.bullets.map((b) => (
                    <li key={b} className="text-xs text-slate-600 flex items-start gap-1.5">
                      <span className="text-slate-300 mt-0.5">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Common questions</h2>
          </div>
          <div className="space-y-0 divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 mb-4 text-sm">Still have questions?</p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
            >
              Talk 1:1 on WhatsApp →
            </Link>
          </div>
        </div>
      </section>

      {/* B2B strip */}
      <section className="bg-slate-50 border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-900">Looking for B2B sourcing or corporate purchasing?</p>
              <p className="text-sm text-slate-500">We support companies with direct supply chain access, vendor onboarding, and ongoing sourcing.</p>
            </div>
            <Link
              href="/b2b"
              className="flex-shrink-0 text-sm font-medium border border-slate-300 px-4 py-2 rounded-md hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              B2B inquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
