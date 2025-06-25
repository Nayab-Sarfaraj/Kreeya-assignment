// src/types/next-auth.d.ts
import  { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    refreshToken?: string
    user: DefaultSession['user']
  }

  interface JWT {
    accessToken?: string
    refreshToken?: string
  }
}
