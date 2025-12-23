import { getSortedPosts } from '@/lib/blog';
import BlogCard from '../components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Articles',
  description: 'Stay updated with the latest heat pump news, tips, and industry insights for the DMV area.',
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Blog & Articles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest heat pump news, tips, and industry insights for Maryland, DC, and Northern Virginia.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
