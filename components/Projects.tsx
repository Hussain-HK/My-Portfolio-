'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-24 border-t border-line">
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
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-t1">Projects</h2>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-teal-400 hover:text-teal-300 font-mono transition-colors"
          >
            {showAll ? '[ show less ]' : '[ view all ]'}
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="group bg-surface border border-line hover:border-teal-500/30 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-t5 hover:text-t2 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-t5 hover:text-t2 transition-colors"
                    aria-label="GitHub repo"
                  >
                    <GitBranch className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title + description */}
              <h3 className="font-semibold text-t1 text-base mb-2 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-t4 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono text-t3 bg-surface2 border border-line2 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={`${projects[0].githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-t4 hover:text-teal-400 transition-colors font-mono"
          >
            <GitBranch className="w-4 h-4" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
