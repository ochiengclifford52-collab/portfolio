import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import experience from '../data/experience'

type Experience = {
  id: string
  title: string
  company: string
  type: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
}

export default function Experience() {
  const items = experience as Experience[]

  return (
    <section id="experience" className="section">
      <header className="mb-8">
        <h2 className="section-title">Experience</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Internships, attachments, freelance work, and other professional roles.
        </p>
      </header>

      {items.length === 0 ? (
        <p className="text-sm text-slate-500">
          No experience listed yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-6">
          {items.map((job) => (
            <article key={job.id} className="card">
              <header className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <Briefcase size={14} /> {job.company}
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {job.type}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {job.startDate} — {job.current ? 'Present' : job.endDate}
                  </span>
                  {job.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  )}
                </div>
              </header>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {job.description}
              </p>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="text-brand-600">▸</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.achievements && job.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Achievements
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.technologies && job.technologies.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}