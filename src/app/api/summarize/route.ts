// app/api/summarize/route.ts
import { summarizeWithGemini } from '@/lib/gemini'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  try {
    const summary = await summarizeWithGemini(body)
    return NextResponse.json({ summary })
  } catch (e) {
    console.error('Gemini Error:', e)
    return NextResponse.json({ error: 'Gemini failed' }, { status: 500 })
  }
}
