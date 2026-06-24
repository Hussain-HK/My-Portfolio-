'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/data'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors tracking-tight"
        >
          {siteConfig.initials}<span className="text-t5">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className="px-3 py-1.5 text-sm text-t3 hover:text-teal-400 transition-colors rounded-lg hover:bg-t1/5"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: toggle + resume */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-teal-500/50 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-t3 hover:text-t1 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-line px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="w-full text-left px-3 py-2.5 text-sm text-t3 hover:text-teal-400 hover:bg-t1/5 rounded-lg transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium border border-teal-500/40 text-teal-400 rounded-lg hover:bg-teal-500/10 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
