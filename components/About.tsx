'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Briefcase, Code2 } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  const stats = [
    { value: `${siteConfig.yearsOfExperience}+`, label: 'Years experience', icon: Briefcase },
    { value: `${siteConfig.projectsCompleted}+`, label: 'Projects shipped', icon: Code2 },
    { value: `${siteConfig.pipelinesBuilt}+`, label: 'Pipelines built', icon: '⚙' },
  ]

  return (
    <section id="about" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="font-mono text-teal-400 text-sm mb-2">{'// 01. about_me'}</p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — avatar + quick info */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              {/* Avatar */}
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-3xl font-mono font-bold text-white shadow-lg">
                    {siteConfig.initials}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{siteConfig.name}</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">{siteConfig.roles.join(' · ')}</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-zinc-500">
                    <MapPin className="w-3 h-3" />
                    {siteConfig.location}
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 space-y-3">
                {[
                  { icon: Mail, label: 'Email', value: siteConfig.email },
                  { icon: Briefcase, label: 'Status', value: siteConfig.availability },
                  { icon: MapPin, label: 'Location', value: siteConfig.location },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <span className="text-zinc-500 w-16 shrink-0">{label}</span>
                    <span className="text-zinc-300 truncate">{value}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 text-center"
                  >
                    <p className="font-mono text-2xl font-bold text-teal-400">{value}</p>
                    <p className="text-xs text-zinc-500 mt-1 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-zinc-300 leading-relaxed text-base">{siteConfig.bio}</p>
              <p className="text-zinc-400 leading-relaxed text-base">{siteConfig.bio2}</p>

              <div className="pt-2 space-y-3">
                <p className="text-sm font-mono text-zinc-500">{'// what I focus on'}</p>
                {[
                  {
                    title: 'Pipeline Architecture',
                    desc: 'Designing fault-tolerant batch and streaming pipelines that scale.',
                  },
                  {
                    title: 'Data Modelling',
                    desc: 'Building clean, testable dbt models that analysts trust and love.',
                  },
                  {
                    title: 'Analytics Engineering',
                    desc: 'Bridging the gap between raw data and business-ready metrics.',
                  },
                  {
                    title: 'Data Quality',
                    desc: 'Implementing testing frameworks that catch issues before dashboards.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-teal-400 font-mono mt-0.5 shrink-0">▹</span>
                    <div>
                      <span className="text-white font-medium text-sm">{title}</span>
                      <span className="text-zinc-500 text-sm"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
