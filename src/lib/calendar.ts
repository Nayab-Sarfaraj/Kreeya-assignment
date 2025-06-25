export const fetchCalendarEvents = async (accessToken: string, email: string) => {
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(email)}/events?maxResults=10&orderBy=startTime&singleEvents=true&timeMin=` +
      new Date().toISOString(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  console.log(res)

  if (!res.ok) throw new Error('Failed to fetch calendar events')
  const data = await res.json()
  return data.items
}
