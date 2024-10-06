"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSignIn = async (email: any, password: any) => {
    try {
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSignIn(email, password);
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-700">
      <div className="container p-6 max-w-md rounded-lg mx-4 bg-gray-950/90 border-2 border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-400  text-center">
          Sign In to <span className="text-gray-400">Eventify</span>
        </h1>
        <div className="sm:p-8 p-2 bg-gray-950/90 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <Link
              href="/signup"
              className="text-sm hover:underline hover:opacity-70 text-gray-300 mb-6 block text-center"
            >
              Don't have an account? Sign Up
            </Link>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
