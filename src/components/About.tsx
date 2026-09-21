import { Target, GraduationCap, Sparkles, Compass } from 'lucide-react'
import profile from '../data/profile'

export default function About() {
  const { about } = profile

  return (
    <section id="about" className="section">
      <header className="mb-8">
        <h2 className="section-title">About Me</h2>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">
          {about.introduction}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Academic background */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap size={18} className="text-brand-600" />
            <h3 className="font-semibold">Academic Background</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {about.academicBackground}
          </p>
        </div>

        {/* Career objectives */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <Target size={18} className="text-brand-600" />
            <h3 className="font-semibold">Career Objectives</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {about.objectives}
          </p>
        </div>

        {/* Interests */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={18} className="text-brand-600" />
            <h3 className="font-semibold">Professional Interests</h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <li
                key={i}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Specialization */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <Compass size={18} className="text-brand-600" />
            <h3 className="font-semibold">Areas of Specialization</h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {about.specialization.map((s) => (
              <li
                key={s}
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Short-term goals */}
        <div className="card">
          <h3 className="mb-3 font-semibold">Short-Term Goals</h3>
          <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {about.shortTermGoals.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="text-brand-600">▸</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Long-term goals */}
        <div className="card">
          <h3 className="mb-3 font-semibold">Long-Term Goals</h3>
          <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {about.longTermGoals.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="text-brand-600">▸</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}