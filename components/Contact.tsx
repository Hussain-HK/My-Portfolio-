'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/data'

// Replace YOUR_FORM_ID with your Formspree form ID (free at formspree.io)
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { icon: Github,   href: siteConfig.github,              label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.linkedin,            label: 'LinkedIn' },
    { icon: Mail,     href: `mailto:${siteConfig.email}`,   label: siteConfig.email },
  ]

  return (
    <section id="contact" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-teal-400 text-sm mb-2">{'// 06. get_in_touch'}</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Let&apos;s work together</h3>
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m currently {siteConfig.availability.toLowerCase()}. Whether you have a data
                engineering challenge, want to discuss analytics architecture, or just want to connect
                — my inbox is always open.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <div className="w-9 h-9 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <MapPin className="w-4 h-4 text-teal-400" />
              </div>
              {siteConfig.location}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== siteConfig.email ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#111111] border border-[#1f1f1f] hover:border-teal-500/30 rounded-xl text-zinc-400 hover:text-teal-400 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium truncate">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#111111] border border-[#1f1f1f] rounded-2xl">
                <CheckCircle className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-white font-semibold text-xl mb-2">Message sent!</h3>
                <p className="text-zinc-400 text-sm">I&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-teal-400 hover:text-teal-300 font-mono transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="underline">
                      {siteConfig.email}
                    </a>
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#0a0a0a] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-zinc-600 text-center">
                  Or email directly:{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-zinc-500 hover:text-teal-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
