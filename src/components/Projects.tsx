import { useMemo, useState } from 'react'
import projects from '../data/projects'
import ProjectCard, { type Project } from './ProjectCard'
import ProjectModal from './ProjectModal'
import ProjectFilters, { ALL } from './ProjectFilters'

export default function Projects() {
  const items = projects as Project[]

  const [techFilter, setTechFilter] = useState(ALL)
  const [statusFilter, setStatusFilter] = useState(ALL)
  const [yearFilter, setYearFilter] = useState(ALL)
  const [selected, setSelected] = useState<Project | null>(null)

  // Unique values for each filter — memoized
  const technologies = useMemo(
    () => Array.from(new Set(items.flatMap((p) => p.technologies))).sort(),
    [items],
  )
  const years = useMemo(
    () => Array.from(new Set(items.map((p) => p.year))).sort().reverse(),
    [items],
  )
  const statuses = useMemo(
    () => Array.from(new Set(items.map((p) => p.status))),
    [items],
  )

  // Apply filters
  const filtered = useMemo(() => {
    return items.filter((p) => {
      const techOk =
        techFilter === ALL || p.technologies.includes(techFilter)
      const statusOk = statusFilter === ALL || p.status === statusFilter
      const yearOk = yearFilter === ALL || p.year === yearFilter
      return techOk && statusOk && yearOk
    })
  }, [items, techFilter, statusFilter, yearFilter])

  const reset = () => {
    setTechFilter(ALL)
    setStatusFilter(ALL)
    setYearFilter(ALL)
  }

  return (
    <section id="projects" className="section">
      <header className="mb-8">
        <h2 className="section-title">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          A selection of things I've built. Click any card for a detailed
          breakdown of features, challenges, and lessons learned.
        </p>
      </header>

      <ProjectFilters
        technologies={technologies}
        years={years}
        statuses={statuses}
        techFilter={techFilter}
        statusFilter={statusFilter}
        yearFilter={yearFilter}
        onTechChange={setTechFilter}
        onStatusChange={setStatusFilter}
        onYearChange={setYearFilter}
        onReset={reset}
      />

      {/* Results count */}
      <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
        Showing {filtered.length} of {items.length} project
        {items.length !== 1 && 's'}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700">
          No projects match those filters.{' '}
          <button
            onClick={reset}
            className="font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Detail modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}