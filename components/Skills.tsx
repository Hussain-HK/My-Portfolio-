'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
}

const categoryColors: Record<string, { dot: string; bg: string; text: string }> = {
  'Languages & Query':    { dot: 'bg-teal-400',   bg: 'bg-teal-400/10',   text: 'text-teal-400' },
  'Data Engineering':     { dot: 'bg-indigo-400', bg: 'bg-indigo-400/10', text: 'text-indigo-400' },
  'Warehouses & Lakes':   { dot: 'bg-amber-400',  bg: 'bg-amber-400/10',  text: 'text-amber-400' },
  'Cloud & DevOps':       { dot: 'bg-rose-400',   bg: 'bg-rose-400/10',   text: 'text-rose-400' },
  'BI & Visualisation':   { dot: 'bg-violet-400', bg: 'bg-violet-400/10', text: 'text-violet-400' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-teal-400 text-sm mb-2">{'// 02. tech_stack'}</p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white">Skills & Tools</h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const colors = categoryColors[group.category] ?? {
              dot: 'bg-teal-400',
              bg: 'bg-teal-400/10',
              text: 'text-teal-400',
            }
            return (
              <motion.div
                key={group.category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="group bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl p-6 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center font-mono text-sm ${colors.text} shrink-0`}>
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{group.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-zinc-300 hover:border-[#3a3a3a] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
