"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { superbase } from "@/lib/supabase";

const Logout = () => {
  const router = useRouter();
  const logout = async () => {
    const { error } = await superbase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("Signed out successfully");
      router.push("/login");
    }
  };
  return (
    <button
      onClick={logout}
      className="px-4 py-2 rounded bg-red-600 text-white  hover:bg-red-500 transition duration-200"
    >
      Log Out
    </button>
  );
};

export default Logout;
