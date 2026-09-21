import TimelineItem, { type Milestone } from './TimelineItem'

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative">
      {/* The vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800 sm:left-[7px]"
      />
      {items.map((m) => (
        <TimelineItem key={m.id} item={m} />
      ))}
    </ol>
  )
}