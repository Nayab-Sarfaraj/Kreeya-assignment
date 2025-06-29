"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session)
    return (
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    );

  return (
    <div>
      <p>{session.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
