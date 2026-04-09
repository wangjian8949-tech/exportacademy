import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog";
import UnlockGate from "@/components/UnlockGate";
import BlogCard from "@/components/BlogCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderText(text: string) {
  return text
    .split("\n\n")
    .map((para, i) => {
      if (para.startsWith("**") && para.endsWith("**")) {
        const content = para.slice(2, -2);
        return (
          <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">
            {content}
          </h3>
        );
      }
      const parts = para.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-slate-700 leading-relaxed mb-4">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
        </p>
      );
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallback;

  return (
    <>
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/blog"
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                ← Blog
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-medium bg-orange-50 text-orange-700 px-2 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-xs text-slate-400">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-slate-500 text-sm">{post.date}</p>
          </div>

          {/* Preview content */}
          <div className="prose-custom">
            {renderText(post.preview)}
          </div>

          {/* Full content: free posts show directly, others gated */}
          {post.free ? (
            <div className="prose-custom">{renderText(post.full)}</div>
          ) : (
            <UnlockGate full={post.full} />
          )}
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Related articles</h2>
            <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-700">
              Read all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedPosts.map((p) => (
              <BlogCard key={p.slug} post={p} showTalkCTA />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ready to do this, not just read about it?
          </h3>
          <p className="text-slate-500 text-sm mb-5">
            Leave your WhatsApp. We map your first order — free.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Get a tailored plan (free) →
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 text-sm font-medium px-5 py-3 rounded-md hover:border-slate-900 transition-colors"
            >
              Log in to read full
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
