import { useMemo, useState } from 'react'
import languages from '../data/languages'
import LanguageCard, { type Language } from './LanguageCard'
import clsx from 'clsx'

const ALL = 'All'

export default function Skills() {
  const typedLanguages = languages as Language[]

  // Collect unique categories for the filter buttons
  const categories = useMemo(() => {
    const set = new Set(typedLanguages.map((l) => l.category))
    return [ALL, ...Array.from(set)]
  }, [typedLanguages])

  const [active, setActive] = useState<string>(ALL)

  const visible = useMemo(() => {
    if (active === ALL) return typedLanguages
    return typedLanguages.filter((l) => l.category === active)
  }, [active, typedLanguages])

  return (
    <section id="skills" className="section">
      <header className="mb-8">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Languages and tools I have learned, am learning, or plan to learn.
          Progress values come from my own self-assessment and are updated as I
          grow.
        </p>
      </header>

      {/* Category filter */}
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="mb-6 flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={clsx(
                'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((lang) => (
          <LanguageCard key={lang.id} lang={lang} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-6 text-sm text-slate-500">
          No skills in this category yet.
        </p>
      )}
    </section>
  )
}