import Link from 'next/link'

import Card from '@/components/Card'
import StatusBadge from '@/components/StatusBadge'
import { getClaim } from '@/lib/data'

export default async function ClaimDetailPage(
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const claim = getClaim(id)

  if (!claim) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold">Claim not found.</p>
          <Link href="/claims" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">
            Back to claims overview
          </Link>
        </div>
      </main>
    )
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_55%)]" />
      <main className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">Claim detail</p>
            <StatusBadge status={claim.status} />
          </div>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">{claim.text}</h1>
          <div className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-4">
            <span>
              <span className="font-medium text-white">Entity:</span> {claim.entity ?? '—'}
            </span>
            {claim.firstSeenAt ? (
              <span className="text-white/60">
                First seen {new Date(claim.firstSeenAt).toLocaleDateString()}
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/claims"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 px-4 py-2 font-semibold text-white transition hover:border-emerald-300/70 hover:text-emerald-200"
            >
              Back to claims overview
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Visit landing page
            </Link>
          </div>
        </header>

        <section className="grid gap-4">
          <Card>
            <div className="space-y-2 text-sm text-white/70">
              <h2 className="text-base font-semibold text-white">Evidence sources</h2>
              <ul className="space-y-3">
                {claim.sources.map(source => (
                  <li key={source.id} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-col gap-2">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                      >
                        {source.title ?? source.url}
                      </a>
                      {source.excerpt ? <p className="text-xs text-white/60">{source.excerpt}</p> : null}
                      {source.publishedAt ? (
                        <span className="text-xs text-white/40">Published {new Date(source.publishedAt).toLocaleDateString()}</span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="space-y-3 text-sm text-white/70">
                <h2 className="text-base font-semibold text-white">Model verdicts</h2>
                <ul className="space-y-2">
                  {claim.modelVerdicts.map((verdict, index) => (
                    <li key={`${claim.id}-model-${index}`} className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
                      <span>{verdict.label}</span>
                      <span className="text-xs text-white/60">{Math.round(verdict.confidence * 100)}% confidence</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            <Card>
              <div className="space-y-3 text-sm text-white/70">
                <h2 className="text-base font-semibold text-white">Human review</h2>
                <ul className="space-y-3">
                  {claim.humanVerdicts.map((verdict, index) => (
                    <li key={`${claim.id}-human-${index}`} className="rounded-lg border border-emerald-500/20 bg-slate-900/70 p-3">
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span className="font-medium text-white/80">{verdict.user}</span>
                        <span>{new Date(verdict.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="mt-2 text-sm text-white">{verdict.label}</p>
                      {verdict.notes ? <p className="mt-1 text-xs text-white/70">{verdict.notes}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
