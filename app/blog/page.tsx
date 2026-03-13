import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getFeaturedPost } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog — Weekly Wake-Up",
  description: "Brutal weekly reminders for people building their way out of employment. No fluff.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Weekly Wake-Up
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              One brutal reminder a week.
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              No motivational fluff. No life coaches. Just the uncomfortable truth about building a business from scratch.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm text-slate-500 border border-slate-200 px-4 py-2 rounded-md hover:border-slate-400 transition-colors"
              >
                Subscribe (free)
              </Link>
              <Link
                href="/talk"
                className="text-sm font-medium text-orange-600 hover:text-orange-700"
              >
                Talk 1:1 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Featured</p>
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium bg-orange-50 text-orange-700 px-2 py-0.5 rounded">
                {featured.category}
              </span>
              <span className="text-xs text-slate-400">{featured.readTime}</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{featured.date}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
              {featured.title}
            </h2>
            <p className="text-slate-600 mb-5 leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center gap-4">
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
              >
                Read preview →
              </Link>
              <Link href="/talk" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                Talk 1:1
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} showTalkCTA />
            ))}
          </div>

          {/* Strong conversion strip */}
          <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Get a tailored plan for your first order — free.</h3>
            <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
              Tell us what you sell. We map your next best step and the right suppliers for your category.
            </p>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Leave WhatsApp — Free plan →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
