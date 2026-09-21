import { ExternalLink, Calendar } from 'lucide-react'
import { Github } from './icons/BrandIcons'
import clsx from 'clsx'

export type Project = {
  id: string
  name: string
  description: string
  longDescription?: string
  status: 'Completed' | 'In Progress' | 'Planned' | 'Archived'
  year: string
  date?: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  features?: string[]
  learned?: string[]
  challenges?: string[]
  solutions?: string[]
}

const STATUS_STYLES: Record<Project['status'], string> = {
  Completed:   'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Planned:     'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  Archived:    'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
}

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  const badge = STATUS_STYLES[project.status]

  return (
    <article className="card flex flex-col gap-3 transition-shadow hover:shadow-md">
      {/* Screenshot placeholder */}
      <button
        onClick={() => onOpen(project)}
        aria-label={`Open details for ${project.name}`}
        className="group relative block h-40 w-full overflow-hidden rounded-lg bg-slate-100 text-left dark:bg-slate-800"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : null}
        {/* Fallback shown behind the image */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-2xl text-slate-400 dark:text-slate-600">
          {project.name.charAt(0)}
        </div>
      </button>

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold leading-tight">{project.name}</h3>
        <span className={clsx('rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap', badge)}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      {/* Tech chips */}
      <ul className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((t) => (
          <li
            key={t}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {t}
          </li>
        ))}
        {project.technologies.length > 5 && (
          <li className="text-[11px] text-slate-500">
            +{project.technologies.length - 5} more
          </li>
        )}
      </ul>

      {/* Footer actions */}
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={12} /> {project.year}
        </span>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <button
            onClick={() => onOpen(project)}
            className="text-xs font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  )
}