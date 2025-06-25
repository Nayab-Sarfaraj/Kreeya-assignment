"use client";

import { useSession, signIn } from "next-auth/react";
import { AccessRevokeButton } from "./AccessRevokeButton";

export const ConnectGoogleCalendar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Checking calendar connection...</p>;
  // console.log(session);

  return (
    <div>
      {!session?.accessToken ? (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={async () => await signIn("google")}
        >
          Connect Google Calendar
        </button>
      ) : (
        <AccessRevokeButton />
      )}
    </div>
  );
};
