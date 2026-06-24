'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-teal-400 font-bold text-lg">{siteConfig.initials}.</p>
            <p className="text-zinc-600 text-xs mt-1">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-600 hover:text-teal-400 transition-colors"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-600 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-zinc-600 hover:text-teal-400 transition-colors"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-teal-400 transition-colors font-mono"
          >
            back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-[#1a1a1a] text-center">
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
