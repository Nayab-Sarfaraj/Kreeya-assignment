"use client";

import { superbase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await superbase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return setError(error.message);
    }
    console.log("Logged in");
    router.push("/dashboard");
  };

  const handleSignUp = async () => {
    const { error } = await superbase.auth.signUp({ email, password });
    if (error) {
      return setError(error.message);
    }
    console.log("registered");
    router.push("/dashboard");
  };
  const switchMode = () => {
    setIsLogin((state) => !state);
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-zinc-800 bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">🔐 Welcome Back</h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <div className="flex flex-col gap-2 mt-4">
            {isLogin ? (
              <button
                onClick={handleLogin}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className="w-full border border-zinc-600 text-zinc-300 hover:bg-zinc-800 py-3 rounded-lg transition"
              >
                Sign Up
              </button>
            )}
            <button
              onClick={switchMode}
              className="mt-4 text-sm text-indigo-400 hover:underline"
            >
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <span className="font-medium">Register now</span>
                </>
              ) : (
                <>
                  Already a user?{" "}
                  <span className="font-medium">Log in here</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-center text-sm mt-4">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
