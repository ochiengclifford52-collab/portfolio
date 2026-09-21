import { useMemo } from 'react'
import learning from '../data/learning'
import StatusCard from './StatusCard'
import clsx from 'clsx'

type LearningItem = {
  id: string
  name: string
  status: 'Completed' | 'Currently Learning' | 'Improving' | 'Planned'
  progress: number
}

// Column configuration — order and color per status
const COLUMNS: {
  status: LearningItem['status']
  accent: string
}[] = [
  { status: 'Completed',          accent: 'text-green-600 dark:text-green-400' },
  { status: 'Currently Learning', accent: 'text-amber-600 dark:text-amber-400' },
  { status: 'Improving',          accent: 'text-blue-600  dark:text-blue-400' },
  { status: 'Planned',            accent: 'text-slate-500 dark:text-slate-400' },
]

export default function LearningJourney() {
  const items = learning as LearningItem[]

  // Group items by status once
  const grouped = useMemo(() => {
    return COLUMNS.map((col) => ({
      ...col,
      items: items.filter((i) => i.status === col.status),
    }))
  }, [items])

  return (
    <section id="journey" className="section">
      <header className="mb-8">
        <h2 className="section-title">My Learning Journey</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          A snapshot of what I've finished, what I'm actively learning, and
          what's next on my roadmap.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {grouped.map((col) => (
          <div key={col.status} className="flex flex-col gap-3">
            <h3
              className={clsx(
                'text-xs font-semibold uppercase tracking-wider',
                col.accent,
              )}
            >
              {col.status}
            </h3>

            <ul className="flex flex-col gap-3">
              {col.items.map((item) => (
                <StatusCard
                  key={item.id}
                  name={item.name}
                  progress={item.progress}
                />
              ))}
              {col.items.length === 0 && (
                <li className="rounded-lg border border-dashed border-slate-300 px-3 py-4 text-center text-xs text-slate-400 dark:border-slate-700">
                  Nothing here yet
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}