import { Code2, FolderCheck, FolderClock, Award, GraduationCap, TrendingUp } from 'lucide-react'
import languages from '../data/languages'
import projects from '../data/projects'
import certifications from '../data/certifications'
import goals from '../data/goals'

export default function StatsDashboard() {
  // Calculate stats dynamically from data — never hardcode numbers
  const techCount = languages.length
  const completedProjects = projects.filter((p) => p.status === 'Completed').length
  const inProgressProjects = projects.filter((p) => p.status === 'In Progress').length
  const certCount = certifications.length
  const completedGoals = goals.filter((g) => g.status === 'Completed').length

  // Average skill progress across all languages
  const avgProgress = Math.round(
    languages.reduce((sum, l) => sum + (l.progress || 0), 0) / Math.max(languages.length, 1),
  )

  const stats = [
    { icon: Code2,          label: 'Technologies learned', value: techCount,          accent: 'text-blue-600' },
    { icon: FolderCheck,    label: 'Projects completed',   value: completedProjects,  accent: 'text-green-600' },
    { icon: FolderClock,    label: 'Projects in progress', value: inProgressProjects, accent: 'text-amber-600' },
    { icon: Award,          label: 'Certifications',       value: certCount,          accent: 'text-purple-600' },
    { icon: GraduationCap,  label: 'Goals completed',      value: completedGoals,     accent: 'text-brand-600' },
    { icon: TrendingUp,     label: 'Average skill level',  value: `${avgProgress}%`,  accent: 'text-pink-600' },
  ]

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="section bg-slate-50 dark:bg-slate-900/40"
    >
      <header className="mb-8">
        <h2 id="stats-heading" className="section-title">
          Progress Overview
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          A live snapshot of my development journey — updated automatically as I
          add to my skills, projects, and goals.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="card flex flex-col gap-2">
            <s.icon size={20} className={s.accent} aria-hidden="true" />
            <p className="text-2xl font-bold tabular-nums">{s.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}