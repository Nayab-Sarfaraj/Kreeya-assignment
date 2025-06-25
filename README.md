# MVP Web App: Google Calendar AI Summarizer

## Overview

This is a simple full-stack web application that allows users to sign up and log in, connect their Google Calendar, and view AI-generated summaries of their upcoming events. The app uses Next.js with TypeScript and Tailwind CSS for the frontend, Supabase Auth for user authentication, NextAuth.js for OAuth with Google, and Gemini (OpenAI API) for event summarization.

## Features

- **User Authentication:** Sign up and login using Supabase Auth.
- **Google OAuth Integration:** Connect Google Calendar via NextAuth.js OAuth provider.
- **Google Calendar API:** Fetch upcoming events from the user’s calendar.
- **AI-Powered Summarization:** Use Gemini (OpenAI) to generate concise summaries for each event.
- **Dashboard UI:** Clean, responsive interface built with Tailwind CSS displaying events and their summaries.
- **Bonus (Optional):** Regenerate summary button for each event (can be extended with vector DB storage).

## Tech Stack

- **Frontend:** Next.js with TypeScript, Tailwind CSS
- **Backend:** Next.js
- **Authentication:** Supabase Auth (email/password), NextAuth.js (Google OAuth)
- **APIs:** Google Calendar API,  Gemini API
- **Hosting:** Vercel
- **Other:** ESLint, Prettier for code quality

## Setup Instructions

1. **Clone the repository:**  `git clone https://github.com/Nayab-Sarfaraj/Kreeya-assignment`
2. **Install dependencies:** ` npm install`
3. **Configure environment variables:** Create a `.env.local` file in the root directory with the following variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://ffeuajkzhfhbfmdcdkex.supabase.com
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsIn
GOOGLE_CLIENT_ID=590688189...
GOOGLE_CLIENT_SECRET=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
NEXTAUTH_SECRET=your_strong_secret
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=AIzaSyDi....
```

4. **Run the development server:** `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to view the app.




