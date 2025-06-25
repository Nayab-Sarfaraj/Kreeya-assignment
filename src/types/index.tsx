// types/index.ts or types/calendar.ts
export type CalendarEvent = {
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
};
