import Link from 'next/link'

const pillars = [
  {
    title: 'Quantify truth at scale',
    description:
      'Factara ingests claims from across the information ecosystem and continuously scores them for factual accuracy using vetted models and human validators.',
  },
  {
    title: 'Expose hidden biases',
    description:
      'We benchmark every source against ideological, geopolitical, and commercial lean so teams can see where narratives are skewed before they spread.',
  },
  {
    title: 'Restore shared trust',
    description:
      'Our credibility layer gives institutions, platforms, and the public a common reference point for what is reliable—so decisions can move as fast as the information age demands.',
  },
]

const signals = [
  {
    label: 'Factual accuracy index',
    copy: 'Corroborates claims against high-quality datasets, knowledge graphs, and expert panels to surface confidence scores you can act on.',
  },
  {
    label: 'Bias gradient',
    copy: 'Measures ideological tilt and rhetorical framing across outlets to make systemic bias visible instead of anecdotal.',
  },
  {
    label: 'Source reliability ledger',
    copy: 'Tracks historical precision, corrections, and transparency so you know which voices have earned trust over time.',
  },
]

const audiences = [
  {
    title: 'Platforms & marketplaces',
    description: 'Embed fact grading directly into feeds, search, or marketplaces to promote integrity without throttling scale.',
  },
  {
    title: 'Enterprises & institutions',
    description: 'Equip teams with real-time verification dashboards for due diligence, communications, and decision-making.',
  },
  {
    title: 'Research & policy leaders',
    description: 'Ground public discourse in measurable credibility signals that outlast the news cycle.',
  },
]

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.3),_transparent_55%)]" />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10">
        <header className="flex flex-col items-center gap-8 text-center">
          <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Infrastructure of credibility
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Factara builds the trust layer for the AI era.
          </h1>
          <p className="max-w-3xl text-lg text-white/70 sm:text-xl">
            The world is drowning in information, yet starving for <em className="text-white">verified understanding</em>. Factara quantifies factual accuracy, bias, and source reliability so your audience never has to guess what—or who—to believe.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/claims"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Explore live claim intelligence
            </Link>
            <a
              href="mailto:hello@factara.ai"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-200"
            >
              Talk with our team
            </a>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-3">
          {pillars.map(pillar => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-emerald-400/70 hover:bg-emerald-400/5"
            >
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{pillar.description}</p>
            </article>
          ))}
        </section>

        <section className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What we measure</h2>
            <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              Factara doesn&apos;t stop at binary fact-checks. We compute a multidimensional credibility graph—tracking how claims evolve, which narratives amplify them, and which sources you can trust when speed matters.
            </p>
            <div className="mt-8 grid gap-6">
              {signals.map(signal => (
                <div key={signal.label} className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6">
                  <h3 className="text-base font-semibold text-emerald-300">{signal.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{signal.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent p-8 text-sm text-white/80 shadow-lg">
            <h3 className="text-xl font-semibold text-white">Why it matters</h3>
            <p className="mt-4 leading-relaxed">
              The core disease isn&apos;t lack of data; it&apos;s the erosion of <em>epistemic trust</em>. Factara addresses that disease directly with transparent methodologies, auditable trails, and governance tooling that stands up in politically charged environments.
            </p>
            <p className="mt-4 leading-relaxed">
              With Factara, teams can counter information warfare, accelerate due diligence, and rebuild the compact between institutions and the public.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Who we serve</h2>
          <p className="mt-3 max-w-3xl text-base text-white/70 sm:text-lg">
            Credibility is a network effect. Factara gives every stakeholder a synchronized, transparent view of reality—so collaboration replaces confusion.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {audiences.map(audience => (
              <div key={audience.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-2 text-sm text-white/70">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent p-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Bring credibility back online</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Partner with Factara to turn overwhelming information flows into defensible intelligence. In an age of synthetic content, credibility isn&apos;t optional—it&apos;s infrastructure.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/claims"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              See the verification engine
            </Link>
            <a
              href="mailto:hello@factara.ai"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-300/70"
            >
              Request a pilot
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
