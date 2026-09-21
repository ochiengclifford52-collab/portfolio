import ProgressBar from './ProgressBar'

type Props = {
  name: string
  progress: number
}

export default function StatusCard({ name, progress }: Props) {
  return (
    <li className="card flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {progress}%
        </span>
      </div>
      <ProgressBar value={progress} />
    </li>
  )
}