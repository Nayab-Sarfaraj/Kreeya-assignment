import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // must be in server component or route
})

export const summarizeEvent = async (event: {
  summary: string
  description?: string
  location?: string
  start: { dateTime?: string; date?: string }
}) => {
  const prompt = `Summarize the following calendar event in one sentence:\n
  Title: ${event.summary}\n
  Description: ${event.description || "N/A"}\n
  Location: ${event.location || "N/A"}\n
  Start Time: ${event.start?.dateTime || event.start?.date}\n`

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // or "gpt-3.5-turbo"
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  })

  return res.choices[0].message.content
}
