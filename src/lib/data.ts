export type Claim = {
  id: string
  text: string
  entity?: string
  firstSeenAt?: string
  status: 'PENDING' | 'SUPPORTED' | 'REFUTED' | 'NEEDS_REVIEW'
  sources: {
    id: string
    url: string
    title?: string
    excerpt?: string
    publishedAt?: string
  }[]
  modelVerdicts: { label: string; confidence: number }[]
  humanVerdicts: {
    user: string
    label: string
    notes?: string
    createdAt: string
  }[]
}

const CLAIMS: Claim[] = [
  {
    id: 'claim-1',
    text: 'The city council approved a 10% increase in public transit funding for 2024.',
    entity: 'Springfield City Council',
    firstSeenAt: '2024-05-12T00:00:00Z',
    status: 'SUPPORTED',
    sources: [
      {
        id: 'source-1',
        url: 'https://news.example.com/transit-budget',
        title: 'Springfield boosts transit spending',
        excerpt:
          'During Tuesday\'s budget meeting, council members voted 7-2 in favor of increasing the transit allocation by ten percent.',
        publishedAt: '2024-05-13T00:00:00Z',
      },
      {
        id: 'source-2',
        url: 'https://documents.example.com/2024-budget-minutes.pdf',
        title: 'Meeting Minutes: May 12, 2024',
        excerpt: 'Line item 14 documents the adoption of the amended transit budget.',
        publishedAt: '2024-05-12T00:00:00Z',
      },
    ],
    modelVerdicts: [
      { label: 'SUPPORTED', confidence: 0.82 },
      { label: 'NEEDS_REVIEW', confidence: 0.1 },
      { label: 'REFUTED', confidence: 0.08 },
    ],
    humanVerdicts: [
      {
        user: 'analyst.jane',
        label: 'SUPPORTED',
        notes: 'Confirmed with official minutes uploaded to the municipal portal.',
        createdAt: '2024-05-14T15:30:00Z',
      },
      {
        user: 'editor.sam',
        label: 'SUPPORTED',
        notes: 'Cross-checked figures against local newspaper coverage.',
        createdAt: '2024-05-15T09:12:00Z',
      },
    ],
  },
  {
    id: 'claim-2',
    text: 'A new recycling plant in Riverton will be fully operational by July 2024.',
    entity: 'Riverton Sustainability Office',
    firstSeenAt: '2024-04-01T00:00:00Z',
    status: 'NEEDS_REVIEW',
    sources: [
      {
        id: 'source-3',
        url: 'https://press.example.com/riverton-recycling-plant',
        title: 'Press release: Riverton recycling facility timeline',
        excerpt: 'Construction remains on schedule with final equipment installation slated for late June.',
        publishedAt: '2024-04-01T00:00:00Z',
      },
      {
        id: 'source-4',
        url: 'https://localpaper.example.com/riverton-plant-delays',
        title: 'Contractor hints at potential supply delays',
        excerpt:
          'A supplier backlog could delay commissioning tests by several weeks, according to the project manager.',
        publishedAt: '2024-05-28T00:00:00Z',
      },
    ],
    modelVerdicts: [
      { label: 'SUPPORTED', confidence: 0.46 },
      { label: 'PENDING', confidence: 0.32 },
      { label: 'REFUTED', confidence: 0.22 },
    ],
    humanVerdicts: [
      {
        user: 'analyst.lee',
        label: 'NEEDS_REVIEW',
        notes: 'Waiting on confirmation from the contractor after reported equipment delays.',
        createdAt: '2024-05-30T11:45:00Z',
      },
    ],
  },
  {
    id: 'claim-3',
    text: 'The state health department closed three rural clinics in Q1 2024 due to staffing shortages.',
    entity: 'Midwest State Health Department',
    firstSeenAt: '2024-03-05T00:00:00Z',
    status: 'REFUTED',
    sources: [
      {
        id: 'source-5',
        url: 'https://health.example.com/clinic-status',
        title: 'Health department response to clinic closure rumors',
        excerpt:
          'No clinics have been closed; temporary weekend hour reductions were implemented instead.',
        publishedAt: '2024-03-06T00:00:00Z',
      },
      {
        id: 'source-6',
        url: 'https://radio.example.com/midwest-clinic-update',
        title: 'Radio interview with deputy health commissioner',
        excerpt:
          'Commissioner states staffing challenges are real but closures have been avoided through rotating staff.',
        publishedAt: '2024-03-07T00:00:00Z',
      },
    ],
    modelVerdicts: [
      { label: 'REFUTED', confidence: 0.74 },
      { label: 'SUPPORTED', confidence: 0.16 },
      { label: 'NEEDS_REVIEW', confidence: 0.1 },
    ],
    humanVerdicts: [
      {
        user: 'analyst.nora',
        label: 'REFUTED',
        notes: 'Verified with department press release and confirmed with follow-up interview.',
        createdAt: '2024-03-08T08:05:00Z',
      },
      {
        user: 'editor.raj',
        label: 'REFUTED',
        notes: 'No evidence of clinic closures in statewide facility tracker.',
        createdAt: '2024-03-08T19:22:00Z',
      },
    ],
  },
]

export const getClaim = (id: string) => CLAIMS.find((c) => c.id === id)
export const getClaims = () => CLAIMS
