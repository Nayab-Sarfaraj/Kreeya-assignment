// app/api/events/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { accessToken, email } = await req.json()

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(email)}/events?maxResults=10&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!res.ok) {
    console.error('Google API error:', await res.text())
    return NextResponse.json({ error: 'Google Calendar fetch failed' }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
