import Link from "next/link";
import { type BlogPost } from "@/content/blog";

interface BlogCardProps {
  post: BlogPost;
  showTalkCTA?: boolean;
}

export default function BlogCard({ post, showTalkCTA = false }: BlogCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
          {post.category}
        </span>
        <span className="text-xs text-slate-400">{post.readTime}</span>
      </div>
      <h3 className="font-semibold text-slate-900 mb-2 leading-snug line-clamp-2">{post.title}</h3>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors"
        >
          Read preview →
        </Link>
        {showTalkCTA && (
          <Link
            href="/talk"
            className="text-xs text-orange-600 hover:text-orange-700 font-medium"
          >
            Talk 1:1
          </Link>
        )}
      </div>
    </article>
  );
}
