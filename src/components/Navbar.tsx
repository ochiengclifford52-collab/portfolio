import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import clsx from 'clsx'

// ---------------------------------------------------------------
// Navigation items
// Each `href` matches a `section id` in App.tsx.
// When you add a new section, add a new entry here.
// ---------------------------------------------------------------
const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stats', href: '#stats' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex items-center justify-between px-4 py-3"
      >
        {/* Brand — Ogolla Clifford initials */}
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label="Back to top"
        >
          &lt;OC /&gt;
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger — hidden on lg+ */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={clsx(
          'overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden dark:border-slate-800 dark:bg-slate-950',
          open ? 'max-h-[32rem]' : 'max-h-0',
        )}
      >
        <ul className="container mx-auto flex flex-col px-4 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}