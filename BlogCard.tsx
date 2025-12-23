import Link from 'next/link';
import { formatDate } from '@/lib/blog';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readTime,
}: BlogCardProps) {
  return (
    <article className="card group">
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{category}</span>
        <span className="text-sm text-slate-500">{readTime}</span>
      </div>

      <Link href={`/blog/${slug}`}>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </Link>

      <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>

      <div className="flex items-center justify-between">
        <time className="text-sm text-slate-500">
          {date ? formatDate(date) : 'Date TBA'}
        </time>
        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
        >
          Read article
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
