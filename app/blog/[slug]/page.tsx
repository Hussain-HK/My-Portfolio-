import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts, getBlogPost } from '@/lib/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} â€” Hakeem Hussain`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  'Data Engineering':      'text-teal-400 bg-teal-400/10 border border-teal-400/20',
  'Analytics Engineering': 'text-indigo-400 bg-indigo-400/10 border border-indigo-400/20',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  // Split content into blocks for code fence handling
  const blocks: { type: 'text' | 'code'; content: string; lang?: string }[] = []
  const lines = post.content.split('\n')
  let inCode = false
  let codeLang = ''
  let codeLines: string[] = []
  let textLines: string[] = []

  for (const line of lines) {
    if (line.startsWith('```') && !inCode) {
      if (textLines.length) {
        blocks.push({ type: 'text', content: textLines.join('\n') })
        textLines = []
      }
      inCode = true
      codeLang = line.slice(3).trim()
    } else if (line.startsWith('```') && inCode) {
      blocks.push({ type: 'code', content: codeLines.join('\n'), lang: codeLang })
      codeLines = []
      inCode = false
      codeLang = ''
    } else if (inCode) {
      codeLines.push(line)
    } else {
      textLines.push(line)
    }
  }
  if (textLines.length) blocks.push({ type: 'text', content: textLines.join('\n') })

  return (
    <main className="min-h-screen bg-bg">
      {/* Nav bar */}
      <div className="border-b border-line sticky top-0 z-10 bg-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-t4 hover:text-teal-400 transition-colors text-sm font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All posts
          </Link>
          <span className="text-t5">/</span>
          <span className="font-mono text-t4 text-sm truncate">{post.slug}</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Post header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                categoryColors[post.category] ?? 'text-t3 bg-zinc-400/10'
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-t4">
              <Calendar className="w-3 h-3" />
              {post.formattedDate}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-t4">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-t1 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-t3 text-lg leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-teal-500/30 via-[#2a2a2a] to-transparent mb-12" />

        {/* Post content */}
        <div className="blog-content">
          {blocks.map((block, i) => {
            if (block.type === 'code') {
              return (
                <pre key={i} className="bg-surface border border-line rounded-2xl p-5 overflow-x-auto my-6">
                  <code className="text-t2 text-sm font-mono leading-relaxed">
                    {block.content}
                  </code>
                </pre>
              )
            }
            return (
              <div key={i}>
                {block.content.split('\n').map((line, j) => {
                  if (line.startsWith('## '))
                    return <h2 key={j} className="font-mono text-2xl font-bold text-t1 mt-10 mb-4">{line.slice(3)}</h2>
                  if (line.startsWith('### '))
                    return <h3 key={j} className="font-semibold text-xl text-t1 mt-8 mb-3">{line.slice(4)}</h3>
                  if (line.startsWith('- '))
                    return (
                      <ul key={j} className="my-1">
                        <li className="text-t3 leading-relaxed ml-4 flex gap-2 items-start">
                          <span className="text-teal-500 mt-1.5 shrink-0">â–¹</span>
                          {line.slice(2)}
                        </li>
                      </ul>
                    )
                  if (line.startsWith('| '))
                    return (
                      <div key={j} className="overflow-x-auto my-4">
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              {line.split('|').filter(Boolean).map((cell, k) => (
                                <td key={k} className="px-4 py-2 border border-line2 text-t3">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                  if (line.trim() === '') return <div key={j} className="h-3" />
                  // Inline bold & code
                  const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/)
                  return (
                    <p key={j} className="text-t3 leading-relaxed mb-3">
                      {parts.map((part, k) => {
                        if (part.startsWith('**') && part.endsWith('**'))
                          return <strong key={k} className="text-t1 font-semibold">{part.slice(2, -2)}</strong>
                        if (part.startsWith('`') && part.endsWith('`'))
                          return <code key={k} className="bg-surface2 border border-line2 rounded px-1.5 py-0.5 text-teal-400 font-mono text-sm">{part.slice(1, -1)}</code>
                        return part
                      })}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-line flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-t4 hover:text-teal-400 transition-colors font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-t4 hover:text-teal-400 transition-colors font-mono"
          >
            Get in touch â†’
          </Link>
        </div>
      </article>
    </main>
  )
}
