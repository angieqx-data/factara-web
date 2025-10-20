import Card from '@/components/Card'
import StatusBadge from '@/components/StatusBadge'
import { getClaim } from '@/lib/data'

export default async function Page(
  { params }: { params: Promise<{ id: string }> } // 👈 Next 15: params may be a Promise
) {
  const { id } = await params                      // 👈 await it
  const claim = getClaim(id)

  if (!claim) {
    return <main className="p-6">Claim not found.</main>
  }

  return (
    <main className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{claim.text}</h2>
        <StatusBadge status={claim.status} />
      </div>
      <Card>
        <div className="text-sm text-white/70">
          <div>
            Entity: <span className="text-white">{claim.entity ?? '—'}</span>
          </div>
        </div>
      </Card>
    </main>
  )
}
