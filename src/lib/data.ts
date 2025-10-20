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
  modelVerdicts: {
    label: string
    confidence: number
  }[]
  humanVerdicts: {
    user: string
    label: string
    notes?: string
    createdAt: string
  }[]
}

const CLAIMS: Claim[] = [
  {
    id: 'claim-001',
    text: 'Factara reduced misinformation exposure for a beta social platform by 42% in six weeks.',
    entity: 'Factara Labs',
    firstSeenAt: '2024-03-22',
    status: 'SUPPORTED',
    sources: [
      {
        id: 'source-001',
        url: 'https://example.com/factara-case-study',
        title: 'Case study: Trust tooling for emerging social networks',
        excerpt:
          'An early-stage social platform deployed Factara scoring to pre-rank trending topics and cut misinformation exposure by 42%.',
        publishedAt: '2024-04-01',
      },
      {
        id: 'source-002',
        url: 'https://example.com/interview',
        title: 'Interview with the platform trust lead',
        excerpt:
          'The trust lead discusses how credibility scoring changed their moderation workflow and reduced manual review time.',
        publishedAt: '2024-04-11',
      },
    ],
    modelVerdicts: [
      { label: 'SUPPORTED', confidence: 0.88 },
      { label: 'SUPPORTED', confidence: 0.91 },
    ],
    humanVerdicts: [
      {
        user: 'nina@factara.ai',
        label: 'SUPPORTED',
        notes: 'Independent audit validated the exposure drop with log-level sampling.',
        createdAt: '2024-04-20T10:12:00Z',
      },
    ],
  },
  {
    id: 'claim-002',
    text: 'A viral video claimed a major bank halted all mortgage lending nationwide.',
    entity: 'Northbridge Financial',
    firstSeenAt: '2024-05-03',
    status: 'REFUTED',
    sources: [
      {
        id: 'source-101',
        url: 'https://example.com/bank-press-release',
        title: 'Northbridge confirms mortgage operations remain active',
        excerpt: 'The bank clarified that only a regional promotional offer expired and lending continues nationwide.',
        publishedAt: '2024-05-03',
      },
      {
        id: 'source-102',
        url: 'https://example.com/regulatory-filing',
        title: 'Regulatory filing on mortgage issuances',
        excerpt: 'Weekly disclosures show a consistent volume of new mortgages issued after the viral video was posted.',
        publishedAt: '2024-05-08',
      },
    ],
    modelVerdicts: [
      { label: 'REFUTED', confidence: 0.79 },
      { label: 'REFUTED', confidence: 0.83 },
      { label: 'NEEDS_REVIEW', confidence: 0.54 },
    ],
    humanVerdicts: [
      {
        user: 'oscar@factara.ai',
        label: 'REFUTED',
        notes: 'Direct confirmation from the bank and regulator contradicts the viral claim.',
        createdAt: '2024-05-04T15:43:00Z',
      },
      {
        user: 'marco@factara.ai',
        label: 'REFUTED',
        notes: 'Video traced to a satirical channel misrepresented as legitimate coverage.',
        createdAt: '2024-05-04T19:20:00Z',
      },
    ],
  },
  {
    id: 'claim-003',
    text: 'A public health blog alleges that a new antiviral scored 95% efficacy in global trials.',
    entity: 'Helixor Therapeutics',
    firstSeenAt: '2024-04-18',
    status: 'NEEDS_REVIEW',
    sources: [
      {
        id: 'source-201',
        url: 'https://example.com/clinical-summary',
        title: 'Clinical summary for HX-21 antiviral',
        excerpt: 'Phase II data shows promising early signals, but global trial results are pending peer review.',
        publishedAt: '2024-04-15',
      },
      {
        id: 'source-202',
        url: 'https://example.com/blog-analysis',
        title: 'Blog post claiming 95% efficacy',
        excerpt: 'The blog cites anonymous sources without linking to trial registries or published results.',
        publishedAt: '2024-04-17',
      },
    ],
    modelVerdicts: [
      { label: 'NEEDS_REVIEW', confidence: 0.62 },
      { label: 'PENDING', confidence: 0.58 },
    ],
    humanVerdicts: [
      {
        user: 'daria@factara.ai',
        label: 'NEEDS_REVIEW',
        notes: 'Awaiting peer-reviewed data; blog lacks sourcing.',
        createdAt: '2024-04-19T09:05:00Z',
      },
    ],
  },
]

export const getClaim = (id: string) => CLAIMS.find(claim => claim.id === id)

export const getClaims = () => CLAIMS
