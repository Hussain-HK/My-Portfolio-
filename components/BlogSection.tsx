'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'

const categoryColors: Record<string, string> = {
  'Data Engineering':     'text-teal-400 bg-teal-400/10',
  'Analytics Engineering': 'text-indigo-400 bg-indigo-400/10',
}

export default function BlogSection() {
  const preview = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">Blog</h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300 font-mono transition-colors"
          >
            View all posts
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Post cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
              >
                {/* Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'text-zinc-400 bg-zinc-400/10'}`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-white text-base leading-snug mb-3 group-hover:text-teal-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-zinc-600 mt-auto pt-4 border-t border-[#1f1f1f]">
                  <span>{post.formattedDate}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
