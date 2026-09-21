import { useMemo } from 'react'
import { Target } from 'lucide-react'
import goals from '../data/goals'
import ProgressBar from './ProgressBar'
import clsx from 'clsx'

type Goal = {
  id: string
  horizon: 'Short-Term' | 'Medium-Term' | 'Long-Term'
  title: string
  description: string
  targetDate: string
  status: 'Not Started' | 'In Progress' | 'Completed'
  progress: number
}

const HORIZONS: Goal['horizon'][] = ['Short-Term', 'Medium-Term', 'Long-Term']

const STATUS_STYLES: Record<Goal['status'], string> = {
  'Not Started': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Completed':   'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
}

export default function Goals() {
  const items = goals as Goal[]

  const grouped = useMemo(
    () =>
      HORIZONS.map((h) => ({
        horizon: h,
        items: items.filter((g) => g.horizon === h),
      })),
    [items],
  )

  return (
    <section id="goals" className="section bg-slate-50 dark:bg-slate-900/40">
      <header className="mb-8">
        <h2 className="section-title">My Goals</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          What I am working toward — short, medium, and long term.
        </p>
      </header>

      <div className="space-y-8">
        {grouped.map((group) => (
          <div key={group.horizon}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Target size={18} className="text-brand-600" />
              {group.horizon}
            </h3>

            {group.items.length === 0 ? (
              <p className="text-sm text-slate-500">No goals in this category yet.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((g) => (
                  <article key={g.id} className="card flex flex-col gap-3">
                    <header className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold leading-tight">{g.title}</h4>
                      <span
                        className={clsx(
                          'rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap',
                          STATUS_STYLES[g.status],
                        )}
                      >
                        {g.status}
                      </span>
                    </header>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {g.description}
                    </p>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Target: {g.targetDate}</span>
                        <span className="font-medium">{g.progress}%</span>
                      </div>
                      <ProgressBar value={g.progress} />
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}