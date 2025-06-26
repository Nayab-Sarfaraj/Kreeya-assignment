"use client";

import { superbase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await superbase.auth.getSession();
      setSession(data.session);
    };

    fetchSession();

    const {
      data: { subscription },
    } = superbase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          🧠 Kreeya AI Calendar
        </h1>
        <p className="text-zinc-400 text-base">
          Connect your Google Calendar and get AI-powered event summaries
          instantly.
        </p>

        {session ? (
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition"
          >
            Go to Dashboard
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="px-6 py-3 bg-white text-black hover:bg-zinc-200 font-medium rounded-xl transition"
          >
            Login to Get Started
          </button>
        )}
      </div>
    </div>
  );
}
