import type { Metadata } from "next";
import Link from "next/link";
import OneBanner from "@/components/OneBanner";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "ExportAcademy — Stop Renting Your Life. Start Building Your Own.",
};

const industries = [
  { icon: "🏠", name: "Home & Kitchen", desc: "Cookware, storage, decor" },
  { icon: "💪", name: "Fitness & Sports", desc: "Equipment, accessories, apparel" },
  { icon: "👶", name: "Baby & Children", desc: "Toys, safety, nursery" },
  { icon: "🐾", name: "Pet Supplies", desc: "Accessories, nutrition, grooming" },
  { icon: "🎨", name: "Arts & Crafts", desc: "Supplies, tools, packaging" },
  { icon: "⚡", name: "Electronics", desc: "Gadgets, cables, components" },
  { icon: "👗", name: "Fashion", desc: "Apparel, bags, jewellery" },
  { icon: "🏢", name: "Office & B2B", desc: "Stationery, equipment, gifts" },
];

const beforeAfter = [
  {
    before: "Salary dependent. One layoff away from zero.",
    after: "Import revenue running. Salary becomes optional.",
  },
  {
    before: "Months of research. Zero suppliers contacted.",
    after: "First order placed. Goods en route. First sale made.",
  },
  {
    before: "Instagram audience. Zero products to sell.",
    after: "Own product line. Recurring revenue from existing followers.",
  },
];

const proofCards = [
  {
    quote: "Sold 240/300 units in 6 weeks via Amazon UK. Gross profit £1,840 on a £780 investment.",
    who: "M.R. — Marketing Manager, UK",
    category: "Home & Kitchen",
  },
  {
    quote: "Switched 40% of my retail line to direct import. Margins went from 14% to 47% overnight.",
    who: "D.K. — Shop Owner, Malaysia",
    category: "Gift & Lifestyle",
  },
  {
    quote: "Pre-sold 47 units before placing the order. Used my existing Instagram audience. Sold out in 3 weeks.",
    who: "J.T. — Creator, 68K followers",
    category: "Fitness",
  },
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Low-cost path to ownership
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
              Stop renting your life.<br />
              Start building your own.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Practical path from employed to owner. China supply chain intelligence, certified suppliers, and 1:1 execution — not theory. Your first order, done with you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/talk"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
              >
                Talk 1:1 (WhatsApp)
              </Link>
              <Link
                href="/program#99"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-md hover:border-slate-900 hover:text-slate-900 transition-colors"
              >
                Try $99 (Self-Study)
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center gap-2 text-slate-500 font-medium px-4 py-3 hover:text-slate-700 transition-colors"
              >
                See Proof →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Banner */}
      <OneBanner />

      {/* Why */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                University is expensive.<br />Waiting is more expensive.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                A business degree costs $40,000–$150,000 and teaches you to work for someone else. A bad first import order costs $500–$1,500 and teaches you to work for yourself.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We built a practical path: supplier intelligence, proven SOPs, certified factories, and someone walking next to you until your first order lands. No fluff. No theory.
              </p>
              <Link
                href="/program"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-5 py-2.5 rounded-md hover:bg-slate-700 transition-colors"
              >
                See Program →
              </Link>
            </div>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-bold text-slate-900 text-lg">$499 Guided</p>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-medium">Most popular</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">8-week guided track. Certified supplier 1-2. Your first order — I walk it with you.</p>
                <Link href="/talk" className="text-sm font-medium text-orange-600 hover:text-orange-700">
                  Talk 1:1 before joining →
                </Link>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors">
                <p className="font-bold text-slate-900 text-lg mb-2">$999 Done-with-you</p>
                <p className="text-sm text-slate-600 mb-3">16 weeks. We source, QC, and ship for you. You approve and scale.</p>
                <Link href="/talk" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                  Apply on WhatsApp →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* China Supply Map */}
      <section className="bg-slate-50 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              China Industrial Intelligence<br />— built from the source
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              8 industry verticals. Verified suppliers. Real pricing. Not scraped from Alibaba — built from on-the-ground sourcing experience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-orange-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-2">{ind.icon}</div>
                <p className="font-semibold text-slate-900 text-sm mb-1">{ind.name}</p>
                <p className="text-xs text-slate-500">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
            >
              Talk 1:1 — Tell us your category →
            </Link>
          </div>
        </div>
      </section>

      {/* Proof in 30 seconds */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Proof in 30 seconds</h2>
            <p className="text-slate-500">Real results. Real people. All started where you are.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {proofCards.map((c) => (
              <div key={c.who} className="border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded mb-3 inline-block">
                  {c.category}
                </span>
                <blockquote className="text-slate-800 font-medium leading-relaxed mb-4 text-sm">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <p className="text-xs text-slate-400">{c.who}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-medium px-5 py-2.5 rounded-md hover:border-slate-900 transition-colors"
            >
              Read all stories →
            </Link>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-5 py-2.5 rounded-md hover:bg-orange-600 transition-colors"
            >
              Talk 1:1
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-slate-50 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Before / After</h2>
            <p className="text-slate-500">What changes when you stop thinking and start doing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {beforeAfter.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-sm text-slate-700">{item.before}</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-slate-300" />
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">After</p>
                  <p className="text-sm text-slate-700">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/results" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              See all transformations →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">One brutal reminder a week.</h2>
              <p className="text-slate-500">No motivational fluff. Just the thing you need to hear.</p>
            </div>
            <Link href="/blog" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">
              Read all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} showTalkCTA={true} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-medium px-5 py-2.5 rounded-md hover:border-slate-900 transition-colors"
            >
              Read all articles →
            </Link>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 text-orange-600 font-medium px-5 py-2.5 hover:text-orange-700 transition-colors"
            >
              Talk 1:1 →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Stop thinking.<br />Start building.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Every week you wait is another week someone less qualified captures the margin you could have had.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-base"
            >
              Leave WhatsApp (1:1) →
            </Link>
            <Link
              href="/program#99"
              className="inline-flex items-center gap-2 border border-slate-600 text-white font-medium px-8 py-4 rounded-md hover:border-white transition-colors text-base"
            >
              Try $99 Self-Study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
