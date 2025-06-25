"use client";
import type { CalendarEvent } from "@/types";

type Props = {
  event: CalendarEvent;
  index: number;
  summary?: string;
  loading: boolean;
  onSummarize: () => void;
};

export const EventCard = ({
  event,
  index,
  summary,
  loading,
  onSummarize,
}: Props) => {
  console.log(index);
  return (
    <li className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md p-4 transition">
      <p className="text-lg font-semibold text-white">{event.summary}</p>
      <p className="text-sm text-zinc-400">
        {event.start?.dateTime || event.start?.date}
      </p>

      {summary ? (
        <div className="mt-3 text-sm text-emerald-400 font-medium flex flex-col gap-2">
          🧠 {summary}
          <button
            onClick={onSummarize}
            className="text-indigo-400 hover:underline text-xs self-start"
          >
            Regenerate
          </button>
        </div>
      ) : (
        <button
          onClick={onSummarize}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 disabled:opacity-40"
        >
          {loading ? "Summarizing..." : "Summarize with AI"}
        </button>
      )}
    </li>
  );
};
