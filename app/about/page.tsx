import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Who's Behind ExportAcademy",
  description: "Built from the China supply chain. Not a course factory — an operator who runs the same systems we teach.",
};

const credibility = [
  {
    stat: "50+",
    label: "First orders completed with students",
  },
  {
    stat: "8",
    label: "Industry verticals covered",
  },
  {
    stat: "$0",
    label: "First consultation — always free",
  },
  {
    stat: "16 wks",
    label: "Maximum to a stable import channel",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Built from the supply chain.<br />Not the classroom.
            </h1>
            <p className="text-lg text-slate-600">
              ExportAcademy exists because most import education is taught by people who stopped importing to teach. We still run the same supply chains we teach.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-custom space-y-5 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">Who I am</h2>
            <p>
              I started sourcing from China as a side operation — while working a full-time job. The first order was $800 in custom silicone products. It arrived late, 4% defect rate, shipped wrong colour on one SKU.
            </p>
            <p>
              I fixed it, reordered, and ran the same cycle 40+ more times across different categories. At some point the import business made more than the salary. Then the salary became optional.
            </p>
            <p>
              That&apos;s the path ExportAcademy is built on. Not theory. Not what worked in a textbook. The actual process, updated quarterly, run on live orders.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10">Why I can help you</h2>
            <p>
              I have built working relationships with verified manufacturers across 8 product categories in China. I understand the supply chain from factory audit to final-mile delivery. I know which certifications matter for which markets. I know which forwarders are reliable on which routes.
            </p>
            <p>
              That knowledge took 6+ years and a few expensive mistakes to build. You don&apos;t need to repeat those mistakes. That&apos;s what the program is for.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10">China-side execution</h2>
            <p>
              The $999 Done-with-you track includes China-side operations: factory identification, sample coordination, production monitoring, pre-shipment quality control, and logistics management. This is possible because we have active relationships on the ground — not because we&apos;re making promises we can&apos;t keep.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10">Who I&apos;m helping</h2>
            <p>
              White-collar professionals who want an income stream they own. Shop owners who want to cut out the middlemen. Content creators who want to build a product line from their audience. Small companies that want better margins on their sourcing.
            </p>
            <p>
              Not get-rich-quick. Not passive income promises. A practical, executable path from where you are to your first completed import order — and the skills to scale it.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility numbers */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credibility.map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 mb-1">{c.stat}</p>
                <p className="text-sm text-slate-500">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to talk?</h2>
          <p className="text-slate-500 mb-6">
            First conversation is always free. Tell us what you want to build — we tell you the honest next step.
          </p>
          <Link
            href="/talk"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Talk 1:1 →
          </Link>
        </div>
      </section>
    </>
  );
}
