import { Star, Code2, ExternalLink } from 'lucide-react'
import { Github as GithubIcon } from './icons/BrandIcons'
import github from '../data/github'

export default function GitHubSection() {
  const { username, selectedRepos } = github

  return (
    <section id="github" className="section bg-slate-50 dark:bg-slate-900/40">
      <header className="mb-8">
        <h2 className="section-title">GitHub</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Selected repositories and where to find my open-source work.
        </p>
      </header>

      {!username ? (
        <div className="card text-sm text-slate-600 dark:text-slate-400">
          GitHub username not configured yet. Set it in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">
            src/data/github.js
          </code>{' '}
          to enable this section.
        </div>
      ) : (
        <>
          {/* Profile link card */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card mb-6 flex items-center justify-between gap-4 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-800">
                <GithubIcon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold">@{username}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  View full profile on GitHub
                </p>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-400" />
          </a>

          {/* Selected repos grid */}
          {selectedRepos.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col gap-3 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-brand-600" />
                    <h3 className="font-mono text-sm font-semibold">{repo.name}</h3>
                  </div>

                  <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {repo.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand-500" />
                      {repo.language}
                    </span>
                    <Star size={12} />
                  </div>
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}