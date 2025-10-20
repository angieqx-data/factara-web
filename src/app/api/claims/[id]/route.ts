import { NextResponse } from 'next/server'
import { getClaim } from '@/lib/data'

// In Next 15, `params` may be a Promise — await it.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }  // 👈 note Promise here
) {
  const { id } = await params                           // 👈 await it
  const claim = getClaim(id)

  if (!claim) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(claim)
}
