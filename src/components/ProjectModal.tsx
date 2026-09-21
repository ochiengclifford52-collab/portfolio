import { useEffect, useRef } from 'react'
import { X, ExternalLink, Calendar, Lightbulb, AlertCircle, CheckCircle2, ListChecks } from 'lucide-react'
import { Github } from './icons/BrandIcons'
import { type Project } from './ProjectCard'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Esc to close + lock body scroll while open
  useEffect(() => {
    if (!project) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus the close button for keyboard users
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        // Close if the click is on the backdrop, not inside the dialog
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative my-8 w-full max-w-3xl rounded-2xl bg-white shadow-xl dark:bg-slate-900"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/90 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          <X size={18} />
        </button>

        {/* Cover image */}
        {project.image && (
          <div className="h-56 w-full overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="h-full w-full object-cover"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
          </div>
        )}

        <div className="space-y-6 p-6">
          {/* Header */}
          <header>
            <h2 id="project-modal-title" className="text-2xl font-bold">
              {project.name}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} /> {project.year}
              </span>
              <span
                className={
                  project.status === 'Completed'
                    ? 'text-green-600 dark:text-green-400'
                    : project.status === 'In Progress'
                    ? 'text-amber-600 dark:text-amber-400'
                    : ''
                }
              >
                ● {project.status}
              </span>
            </div>
          </header>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>

          {/* Description */}
          <section>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Overview
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.longDescription || project.description}
            </p>
          </section>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <section>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Technologies
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Key features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <ListChecks size={14} /> Key Features
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brand-600">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Learned */}
          {project.learned && project.learned.length > 0 && (
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <Lightbulb size={14} /> What I Learned
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                {project.learned.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span className="text-brand-600">▸</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges & Solutions side by side */}
          {(project.challenges?.length || project.solutions?.length) ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {project.challenges && project.challenges.length > 0 && (
                <section>
                  <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    <AlertCircle size={14} /> Challenges
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-amber-500">▸</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {project.solutions && project.solutions.length > 0 && (
                <section>
                  <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    <CheckCircle2 size={14} /> Solutions
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="text-green-500">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}