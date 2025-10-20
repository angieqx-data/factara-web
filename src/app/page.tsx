import Link from 'next/link'
import { getClaims } from '@/lib/data'
import StatusBadge from '@/components/StatusBadge'
import Card from '@/components/Card'

export default function ClaimsPage() {
  const claims = getClaims()
  return (
    <main className="space-y-4">
      <h2 className="text-xl font-semibold">Claims</h2>
      <div className="grid gap-3">
        {claims.map(c => (
          <Card key={c.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link href={`/claims/${c.id}`} className="text-base font-medium hover:underline">{c.text}</Link>
                <div className="mt-1 text-xs text-white/60">
                  {c.entity && <span className="mr-2">{c.entity}</span>}
                  {c.firstSeenAt && new Date(c.firstSeenAt).toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Sources: {c.sources.length} • Model votes: {c.modelVerdicts.length} • Human: {c.humanVerdicts.length}
                </div>
              </div>
              <StatusBadge status={c.status} />
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}
