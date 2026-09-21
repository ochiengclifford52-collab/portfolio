import milestones from '../data/milestones'
import Timeline from './Timeline'
import { type Milestone } from './TimelineItem'

export default function ProfessionalJourney() {
  const items = milestones as Milestone[]

  return (
    <section id="journey-professional" className="section bg-slate-50 dark:bg-slate-900/40">
      <header className="mb-8">
        <h2 className="section-title">Professional Journey</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Milestones that mark my path from beginner to professional developer.
        </p>
      </header>

      <div className="max-w-2xl">
        <Timeline items={items} />
      </div>
    </section>
  )
}