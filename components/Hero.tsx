'use client'

import { useState, useEffect } from 'react'
import { GitBranch, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/data'

function useTypewriter(words: string[], typingSpeed = 90, deletingSpeed = 50, pauseMs = 2200) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const current = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, pauseMs)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, isPaused, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}

export default function Hero() {
  const role = useTypewriter(siteConfig.roles)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Teal radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] teal-glow animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Terminal label */}
        <div
          className="font-mono text-teal-400 text-sm mb-6 flex items-center gap-2"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
          <span>{'> hello_world.py'}</span>
        </div>

        {/* Name */}
        <h1
          className="font-mono text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
          }}
        >
          <span className="block text-t1">Hakeem</span>
          <span className="block gradient-text">Hussain</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="font-mono text-xl sm:text-2xl text-t2 mb-6 h-8 flex items-center"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease 0.45s',
          }}
        >
          <span>{role}</span>
          <span className="ml-0.5 inline-block w-0.5 h-6 bg-teal-400 animate-blink" />
        </div>

        {/* Tagline */}
        <p
          className="text-t3 text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s',
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mb-14"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.65s, transform 0.5s ease 0.65s',
          }}
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-[#0a0a0a] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            View Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-t2 hover:text-t1 font-medium rounded-xl transition-all duration-200 hover:bg-t1/5 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-5"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.5s ease 0.75s',
          }}
        >
          {[
            { icon: GitBranch, href: siteConfig.github, label: 'GitHub' },
            { icon: Linkedin, href: siteConfig.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-t4 hover:text-teal-400 transition-colors text-sm"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-t5 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  )
}
