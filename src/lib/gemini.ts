import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const summarizeWithGemini = async (event: {
  summary: string
  description?: string
  location?: string
  start: { dateTime?: string; date?: string }
}) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

  const prompt = `Summarize this calendar event in one sentence:\n
  Title: ${event.summary}\n
  Description: ${event.description || 'N/A'}\n
  Location: ${event.location || 'N/A'}\n
  Start Time: ${event.start?.dateTime || event.start?.date}`

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}
