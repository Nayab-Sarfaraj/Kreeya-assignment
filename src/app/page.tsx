"use client";
import { superbase } from "@/lib/supabase";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState(null);
  const router = useRouter();
  const fetchSession = async () => {
    const { data } = await superbase.auth.getSession();
    console.log(data);
    setSession(data.session);
  };
  useEffect(() => {
    fetchSession();
    const { data: authListener } = superbase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <ConnectGoogleCalendar /> */}
      {session ? (
        <button onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </button>
      ) : (
        <button onClick={() => router.push("/login")}>Login</button>
      )}
    </div>
  );
}
