import { Heart, Mail } from 'lucide-react'
import profile from '../data/profile'
import { Github } from './icons/BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-semibold">&lt;OC /&gt;</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Explore
            </p>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                <a
                  href="#projects"
                  className="hover:text-brand-600 dark:hover:text-brand-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-brand-600 dark:hover:text-brand-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-600 dark:hover:text-brand-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Connect
            </p>
            <div className="mt-2 flex gap-3">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  <Github size={18} />
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {year} {profile.name}. Built with{' '}
          <Heart size={11} className="inline text-red-500" /> using React,
          TypeScript, and Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}