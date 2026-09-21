import { Award, ExternalLink, Calendar } from 'lucide-react'
import certifications from '../data/certifications'
import clsx from 'clsx'

type Certification = {
  id: string
  title: string
  issuer: string
  type: string
  date: string
  description?: string
  credentialId?: string
  verifyUrl?: string
  image?: string
}

const TYPE_STYLES: Record<string, string> = {
  Certification: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
  Course:        'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Competition:   'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Hackathon:     'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Award:         'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
}

export default function Certifications() {
  const items = certifications as Certification[]

  return (
    <section id="certifications" className="section">
      <header className="mb-8">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Certifications, courses, competitions, hackathons, and awards.
        </p>
      </header>

      {items.length === 0 ? (
        <p className="text-sm text-slate-500">No certifications listed yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const badge = TYPE_STYLES[c.type] ?? TYPE_STYLES.Certification
            return (
              <article key={c.id} className="card flex flex-col gap-3">
                <header className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Award size={18} className="text-brand-600" />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-tight">{c.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                  <span
                    className={clsx(
                      'rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap',
                      badge,
                    )}
                  >
                    {c.type}
                  </span>
                </header>

                {c.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {c.description}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {c.date}
                  </span>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline dark:text-brand-400"
                    >
                      <ExternalLink size={12} /> Verify
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}