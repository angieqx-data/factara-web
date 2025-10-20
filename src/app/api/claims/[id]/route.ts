import { NextResponse } from 'next/server'
import { getClaim } from '@/lib/data'

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params
  const claim = getClaim(id)
  if (!claim) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(claim)
}
