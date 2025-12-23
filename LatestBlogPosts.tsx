import { getSortedPosts } from '@/lib/blog';
import BlogCard from './BlogCard';
import Link from 'next/link';

export default function LatestBlogPosts() {
  const latestPosts = getSortedPosts().slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Latest Articles & Market Updates</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            View all articles
            <svg
              className="w-5 h-5 ml-1"
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

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
