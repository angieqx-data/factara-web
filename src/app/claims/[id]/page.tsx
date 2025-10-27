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
    <main className="p-6 space-y-6">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-white/50">Claim</p>
          <h1 className="text-2xl font-semibold leading-snug">{claim.text}</h1>
          <div className="text-sm text-white/70">
            <div>
              Entity: <span className="text-white">{claim.entity ?? '—'}</span>
            </div>
            <div>
              First seen:{' '}
              <span className="text-white">
                {claim.firstSeenAt
                  ? new Date(claim.firstSeenAt).toLocaleDateString()
                  : '—'}
              </span>
            </div>
          </div>
        </div>
        <StatusBadge status={claim.status} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Sources</h2>
            <ul className="space-y-4 text-sm text-white/80">
              {claim.sources.map((source) => (
                <li key={source.id} className="space-y-1">
                  <a
                    href={source.url}
                    className="font-medium text-primary-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.title ?? source.url}
                  </a>
                  {source.publishedAt ? (
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      {new Date(source.publishedAt).toLocaleDateString()}
                    </p>
                  ) : null}
                  {source.excerpt ? (
                    <p className="text-white/70">{source.excerpt}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-medium">Model verdicts</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {claim.modelVerdicts.map((verdict, index) => (
                  <li
                    key={`${verdict.label}-${index}`}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <span className="font-medium">{verdict.label}</span>
                    <span className="text-white/60">
                      {(verdict.confidence * 100).toFixed(0)}%
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium">Human verdicts</h2>
              <ul className="mt-3 space-y-4 text-sm text-white/80">
                {claim.humanVerdicts.map((verdict) => (
                  <li key={verdict.user} className="space-y-1 rounded-md border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{verdict.user}</span>
                      <span className="text-xs uppercase tracking-wide text-white/50">
                        {new Date(verdict.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-white">{verdict.label}</p>
                    {verdict.notes ? <p className="text-white/70">{verdict.notes}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Card>
      </section>
    </main>
  )
}
