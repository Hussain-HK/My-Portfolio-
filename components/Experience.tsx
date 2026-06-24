'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-teal-400 text-sm mb-2">{'// 03. work_history'}</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-teal-500 bg-[#0a0a0a] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                {/* Card */}
                <div className="bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl p-6 transition-colors group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-white text-lg leading-tight">{job.title}</h3>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-medium mt-0.5 transition-colors"
                      >
                        {job.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end text-xs text-zinc-500 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {job.startDate} — {job.endDate}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {job.description.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-teal-500 mt-0.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
