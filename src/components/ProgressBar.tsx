import clsx from 'clsx'

type Props = {
  value: number          // 0–100
  className?: string
  showLabel?: boolean
  colorClass?: string    // override the fill color
}

export default function ProgressBar({
  value,
  className,
  showLabel = false,
  colorClass = 'bg-brand-600',
}: Props) {
  const safe = Math.max(0, Math.min(100, value))

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <div
        role="progressbar"
        aria-valuenow={safe}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
      >
        <div
          className={clsx('h-full rounded-full transition-all duration-500', colorClass)}
          style={{ width: `${safe}%` }}
        />
      </div>
      {showLabel && (
        <span className="w-10 shrink-0 text-right text-xs font-medium text-slate-500 dark:text-slate-400">
          {safe}%
        </span>
      )}
    </div>
  )
}