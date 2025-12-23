import { getPostData, getSortedPosts } from '@/lib/blog';
import Link from 'next/link';
import { formatDate } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="py-16">
      <div className="container-custom max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-600 mb-8 inline-block hover:text-blue-700">
          ← Back to blog
        </Link>
        
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-slate-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="text-slate-600">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-table:text-slate-700" 
          dangerouslySetInnerHTML={{ __html: post.content || '' }} 
        />

        <footer className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Ready to get started with your heat pump project?</h3>
            <p className="text-slate-700 mb-4">
              Use our tools to calculate rebate eligibility, find certified installers, and size your system properly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/rebates" className="btn-primary">
                Check Rebate Eligibility
              </Link>
              <Link href="/find-installer" className="btn-secondary">
                Find Installer
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
