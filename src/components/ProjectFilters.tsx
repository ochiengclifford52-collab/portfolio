import clsx from 'clsx'

const ALL = 'All'

type Props = {
  technologies: string[]
  years: string[]
  statuses: string[]

  techFilter: string
  statusFilter: string
  yearFilter: string

  onTechChange: (v: string) => void
  onStatusChange: (v: string) => void
  onYearChange: (v: string) => void

  onReset: () => void
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {[ALL, ...options].map((opt) => {
          const active = opt === value
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              aria-pressed={active}
              className={clsx(
                'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                active
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ProjectFilters({
  technologies,
  years,
  statuses,
  techFilter,
  statusFilter,
  yearFilter,
  onTechChange,
  onStatusChange,
  onYearChange,
  onReset,
}: Props) {
  const hasFilter =
    techFilter !== ALL || statusFilter !== ALL || yearFilter !== ALL

  return (
    <div className="mb-8 space-y-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-4 sm:grid-cols-3">
        <FilterGroup label="Technology" options={technologies} value={techFilter} onChange={onTechChange} />
        <FilterGroup label="Status" options={statuses} value={statusFilter} onChange={onStatusChange} />
        <FilterGroup label="Year" options={years} value={yearFilter} onChange={onYearChange} />
      </div>

      {hasFilter && (
        <div className="flex justify-end border-t border-slate-100 pt-3 dark:border-slate-800">
          <button
            onClick={onReset}
            className="text-xs font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

export { ALL }