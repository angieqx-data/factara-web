import { NextResponse } from 'next/server'
import { getClaims } from '@/lib/data'

export async function GET() {
  return NextResponse.json(getClaims())
}
