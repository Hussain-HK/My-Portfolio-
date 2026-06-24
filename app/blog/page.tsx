import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — Hakeem Hussain',
  description: 'Writing on data engineering, analytics engineering, and the modern data stack.',
}

const categoryColors: Record<string, string> = {
  'Data Engineering':      'text-teal-400 bg-teal-400/10 border border-teal-400/20',
  'Analytics Engineering': 'text-indigo-400 bg-indigo-400/10 border border-indigo-400/20',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-[#1f1f1f] bg-[#0a0a0a] sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-500 hover:text-teal-400 transition-colors text-sm font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="font-mono text-teal-400 text-sm">blog</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page title */}
        <div className="mb-14">
          <p className="font-mono text-teal-400 text-sm mb-2">{'// writing'}</p>
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-zinc-400 text-base max-w-xl">
            Thoughts on data engineering, analytics engineering, and the modern data stack.{' '}
            {blogPosts.length} posts so far.
          </p>
        </div>

        {/* Posts list */}
        <div className="space-y-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 p-6 bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
            >
              {/* Date column */}
              <div className="shrink-0 text-xs font-mono text-zinc-600 sm:w-24 sm:text-right pt-0.5">
                {post.formattedDate}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      categoryColors[post.category] ?? 'text-zinc-400 bg-zinc-400/10'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-600">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-semibold text-white text-base leading-snug group-hover:text-teal-300 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center self-center text-zinc-700 group-hover:text-teal-400 group-hover:translate-x-1 transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
