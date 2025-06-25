"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ConnectGoogleCalendar } from "@/components/ConnectGoogleCalendar";
import { AccessRevokeButton } from "@/components/AccessRevokeButton";
import { EventCard } from "@/components/EventCard";
import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const { data: session } = useSession();
  const [events, setEvents] = useState<any[]>([]);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [summaries, setSummaries] = useState<Record<number, string>>({});

  useEffect(() => {
    const loadEvents = async () => {
      if (session?.accessToken && session.user?.email) {
        const res = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accessToken: session.accessToken,
            email: session.user.email,
          }),
        });
        const data = await res.json();
        setEvents(data.items);
      }
    };

    loadEvents();
  }, [session]);

  const handleSummarize = async (event: any, index: number) => {
    setLoadingIndex(index);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        body: JSON.stringify(event),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setSummaries((prev) => ({ ...prev, [index]: data.summary }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <Navbar />

      {/* Event list */}
      <main className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Upcoming Events</h2>

        {events?.length === 0 ? (
          <p className="text-zinc-500">No upcoming events found.</p>
        ) : (
          <ul className="space-y-5">
            {events?.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                index={index}
                summary={summaries[index]}
                loading={loadingIndex === index}
                onSummarize={() => handleSummarize(event, index)}
              />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
