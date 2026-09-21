import { Calendar, Tag } from 'lucide-react'
import ProgressBar from './ProgressBar'
import clsx from 'clsx'

export type Language = {
  id: string
  name: string
  category: string
  icon?: string
  progress: number
  level: string
  status: string
  started: string
  lastUpdated?: string
  projects?: string[]
}

// Map status → Tailwind classes (used for the small badge)
const STATUS_STYLES: Record<string, string> = {
  Completed:
    'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Improving:
    'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Currently Learning':
    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Planned:
    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
}

export default function LanguageCard({ lang }: { lang: Language }) {
  const badgeClass =
    STATUS_STYLES[lang.status] ?? STATUS_STYLES['Planned']

  return (
    <article className="card flex flex-col gap-3 transition-shadow hover:shadow-md">
      {/* Header: icon + name + status badge */}
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-slate-800"
          >
            {lang.icon ?? '💻'}
          </span>
          <div>
            <h3 className="font-semibold leading-tight">{lang.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lang.category}
            </p>
          </div>
        </div>
        <span
          className={clsx(
            'rounded-full px-2 py-0.5 text-[11px] font-medium',
            badgeClass,
          )}
        >
          {lang.status}
        </span>
      </header>

      {/* Progress */}
      <div>
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            {lang.level}
          </span>
          <span className="font-medium">{lang.progress}%</span>
        </div>
        <ProgressBar value={lang.progress} />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} /> Started {lang.started}
        </span>
        {lang.lastUpdated && (
          <span className="inline-flex items-center gap-1">
            <Tag size={12} /> Updated {lang.lastUpdated}
          </span>
        )}
      </div>

      {/* Projects used in */}
      {lang.projects && lang.projects.length > 0 && (
        <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
          <p className="mb-1 text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Used in
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {lang.projects.map((p) => (
              <li
                key={p}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}