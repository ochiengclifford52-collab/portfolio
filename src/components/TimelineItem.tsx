import { Briefcase, Link as LinkIcon } from 'lucide-react'

export type Milestone = {
  id: string
  date: string
  title: string
  description: string
  organization?: string
  skills?: string[]
  projectId?: string
  link?: string
}

export default function TimelineItem({ item }: { item: Milestone }) {
  return (
    <li className="relative pl-8 sm:pl-10">
      {/* Dot on the vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-600 bg-white dark:bg-slate-950"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
      </span>

      <div className="pb-8">
        {/* Date */}
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {item.date}
        </p>

        {/* Title */}
        <h3 className="mt-1 text-lg font-semibold leading-tight">
          {item.title}
        </h3>

        {/* Organization (optional) */}
        {item.organization && (
          <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <Briefcase size={12} /> {item.organization}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {item.description}
        </p>

        {/* Skills chips */}
        {item.skills && item.skills.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.skills.map((s) => (
              <li
                key={s}
                className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        {/* External link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            <LinkIcon size={12} /> View details
          </a>
        )}
      </div>
    </li>
  )
}