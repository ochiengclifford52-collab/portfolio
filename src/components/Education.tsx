import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import education from '../data/education'

type Education = {
  id: string
  institution: string
  program: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
  subjects?: string[]
  achievements?: string[]
  projects?: string[]
}

export default function Education() {
  const items = education as Education[]

  return (
    <section id="education" className="section bg-slate-50 dark:bg-slate-900/40">
      <header className="mb-8">
        <h2 className="section-title">Education</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Academic background, coursework, and relevant achievements.
        </p>
      </header>

      <div className="space-y-6">
        {items.map((ed) => (
          <article key={ed.id} className="card">
            <header className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  {ed.program}
                </h3>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <GraduationCap size={14} /> {ed.institution}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} /> {ed.startDate} — {ed.current ? 'Present' : ed.endDate}
                </span>
                {ed.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {ed.location}
                  </span>
                )}
              </div>
            </header>

            {ed.description && (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {ed.description}
              </p>
            )}

            {ed.subjects && ed.subjects.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Relevant Subjects
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {ed.subjects.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-white px-2.5 py-0.5 text-[11px] text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {ed.achievements && ed.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Achievements
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                  {ed.achievements.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-brand-600">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {ed.projects && ed.projects.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Projects
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {ed.projects.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}