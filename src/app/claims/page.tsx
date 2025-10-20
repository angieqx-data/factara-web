import Link from 'next/link'

import Card from '@/components/Card'
import StatusBadge from '@/components/StatusBadge'
import { getClaims } from '@/lib/data'

export default function ClaimsPage() {
  const claims = getClaims()

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_55%)]" />
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">Claims intelligence</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Live verification snapshots</h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Explore how Factara structures evidence, automated verdicts, and human review to quantify credibility across the
              information landscape.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center self-start rounded-full border border-emerald-400/50 px-5 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/70 hover:text-emerald-200"
          >
            Back to landing
          </Link>
        </header>

        <section className="grid gap-6">
          {claims.map(claim => (
            <Card key={claim.id}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{claim.text}</h2>
                    <div className="mt-2 text-xs text-white/60 sm:text-sm">
                      <span className="font-medium text-white">Entity:</span> {claim.entity ?? '—'}
                      {claim.firstSeenAt ? (
                        <span className="ml-3 text-white/50">First seen {new Date(claim.firstSeenAt).toLocaleDateString()}</span>
                      ) : null}
                    </div>
                  </div>
                  <StatusBadge status={claim.status} />
                </div>

                <div className="grid gap-2 text-sm text-white/70">
                  <p className="font-medium text-white">Evidence sources</p>
                  <ul className="space-y-2">
                    {claim.sources.map(source => (
                      <li key={source.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="flex flex-col gap-1">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
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

                <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-white">Model verdicts</p>
                    <ul className="mt-2 space-y-2">
                      {claim.modelVerdicts.map((verdict, index) => (
                        <li key={`${claim.id}-model-${index}`} className="flex items-center justify-between rounded-lg bg-slate-900/70 px-3 py-2">
                          <span>{verdict.label}</span>
                          <span className="text-xs text-white/60">{Math.round(verdict.confidence * 100)}% confidence</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-white">Human review</p>
                    <ul className="mt-2 space-y-3">
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
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/claims/${claim.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    View detailed trail
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
