import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { resources } from "@/content/resources";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Resources — Tools That Remove Guessing",
  description: "Supplier scripts, QC checklists, sampling scorecards, and shipping guides. Free tools to run your first import.",
};

export default function ResourcesPage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Tools that remove guessing.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Free downloads. The exact templates, checklists, and guides we use on every import order.
            </p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors"
            >
              Talk 1:1 — Get a plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.id} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                      {r.type}
                    </span>
                    {r.pages && (
                      <span className="text-xs text-slate-400 ml-2">{r.pages}</span>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{r.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href="/talk"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
                  >
                    {r.downloadLabel}
                  </Link>
                  <Link
                    href="/talk"
                    className="text-xs text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Talk 1:1 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Need more than templates? Get a tailored plan for your specific product and category.
            </p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-medium px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Leave WhatsApp — Free 1:1 →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="bg-white py-20 md:py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Latest from the blog</h2>
              <p className="text-slate-500 text-sm">Practical knowledge you can use this week.</p>
            </div>
            <Link href="/blog" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700">
              Read all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} showTalkCTA />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Read all articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
