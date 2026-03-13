import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Sourcing — Corporate Supply Chain Access",
  description: "Direct China sourcing for companies. Supplier verification, QC, logistics, and ongoing support.",
};

const services = [
  {
    icon: "🏭",
    title: "Supplier Identification & Audit",
    desc: "Verified factory shortlists for your product category. Business license checks, factory visits (virtual or in-person), and audit reports.",
  },
  {
    icon: "🔍",
    title: "Quality Control & Inspection",
    desc: "Pre-shipment inspection coordination via certified inspectors. Defect reporting, approval/rejection management, and remediation.",
  },
  {
    icon: "📦",
    title: "Logistics & Freight Coordination",
    desc: "Freight forwarder selection, booking, and oversight. Customs documentation support for your destination market.",
  },
  {
    icon: "🔄",
    title: "Ongoing Sourcing Support",
    desc: "Monthly retainer for companies with regular import needs. We act as your China-side sourcing team.",
  },
  {
    icon: "✅",
    title: "Vendor Certification",
    desc: "End-to-end supplier onboarding process. Documentation, capability assessment, and first-order trial supervision.",
  },
  {
    icon: "📊",
    title: "Cost & Margin Analysis",
    desc: "Landed cost modelling for your current procurement. Identify savings opportunities across your product range.",
  },
];

const engagements = [
  {
    type: "Project",
    description: "Single sourcing project or audit. Fixed scope, fixed deliverable.",
    examples: ["New supplier identification", "QC for existing supplier", "Freight cost audit"],
    cta: "Enquire →",
  },
  {
    type: "Monthly Retainer",
    description: "Ongoing China-side support for companies with regular import activity.",
    examples: ["Monthly QC oversight", "Supplier relationship management", "New product sourcing"],
    cta: "Discuss scope →",
  },
];

export default function B2BPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              B2B Sourcing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              China-side execution<br />for your business.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Supplier verification, quality control, logistics management, and ongoing sourcing support. For companies that need China-side capability without the overhead of building it in-house.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/talk"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
              >
                WhatsApp inquiry →
              </Link>
              <Link
                href="/talk"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-md hover:border-slate-900 transition-colors"
              >
                Book a call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">What we do</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Six service areas. All deliverable as project work or on a monthly retainer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-sm transition-shadow">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Engagement models</h2>
            <p className="text-slate-500">Project or ongoing — depends on your volume and needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {engagements.map((e) => (
              <div key={e.type} className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{e.type}</h3>
                <p className="text-slate-600 text-sm mb-4">{e.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {e.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-orange-400 mt-0.5">→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/talk"
                  className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {e.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Let&apos;s talk about your sourcing needs.</h2>
          <p className="text-slate-400 mb-8 text-sm">
            First call is always free. Bring your current supplier list and cost structure — we&apos;ll tell you honestly where the savings are.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              WhatsApp inquiry →
            </Link>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 border border-slate-600 text-white font-medium px-8 py-4 rounded-md hover:border-white transition-colors"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
