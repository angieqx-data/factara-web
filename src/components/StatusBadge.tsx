export default function StatusBadge({ status }: { status:'PENDING'|'SUPPORTED'|'REFUTED'|'NEEDS_REVIEW' }) {
    const cls: Record<string,string> = {
      PENDING:'bg-yellow-500/20 text-yellow-300 ring-1 ring-yellow-500/30',
      SUPPORTED:'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30',
      REFUTED:'bg-red-500/20 text-red-300 ring-1 ring-red-500/30',
      NEEDS_REVIEW:'bg-orange-500/20 text-orange-300 ring-1 ring-orange-500/30',
    }
    return <span className={`rounded-full px-2 py-0.5 text-xs ${cls[status]}`}>{status.replace('_',' ')}</span>
  }
  