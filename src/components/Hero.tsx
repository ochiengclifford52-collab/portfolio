import { Download, Mail, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import profile from '../data/profile'
import languages from '../data/languages'
import projects from '../data/projects'

export default function Hero() {
  const completedProjects = projects.filter((p) => p.status === 'Completed').length
  const techCount = languages.length

  const stats = [
    { label: 'Technologies learned', value: techCount },
    { label: 'Projects completed', value: completedProjects },
    { label: 'Currently learning', value: profile.currentLearning },
    { label: 'Current focus', value: profile.currentFocus },
  ]

  return (
    <section id="home" className="section">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-sm text-brand-600 dark:text-brand-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            {profile.title}
          </p>
          <p className="mt-5 max-w-prose text-slate-600 dark:text-slate-400">
            {profile.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#skills" className="btn-primary">
              View My Skills <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-secondary">
              View My Projects
            </a>
            <a href={profile.cv.downloadUrl} download className="btn-secondary">
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-brand-500/20 sm:h-80 sm:w-80">
            <img
              src={profile.avatar}
              alt={`${profile.name} profile`}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%233b82f6"/><text x="50%" y="50%" fill="white" font-family="sans-serif" font-size="120" text-anchor="middle" dominant-baseline="middle">?</text></svg>'
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
            <p className="mt-1 text-lg font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}