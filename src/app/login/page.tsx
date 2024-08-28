"use client";
import React, { useState } from "react";
import Link from "next/link";
// import useLogin from "@/hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { loading, login } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await login(username, password);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="container mx-auto p-6 max-w-md rounded-lg bg-gradient-to-r from-teal-200 to-blue-200">
        <h1 className="text-4xl font-extrabold text-gray-600 mb-8 text-center">
          Welcome to <span className="text-gray-600">Eventify</span>
        </h1>
        <div className="bg-gradient-to-r from-teal-200 to-blue-200 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <Link
              href="/signup"
              className="text-sm hover:underline hover:opacity-70 text-gray-700 mb-6 inline-block"
            >
              {"Don't"} have an account?
            </Link>
            <button
              // disabled={loading}
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-teal-600 shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {/* {loading ? <span className="animate-spin inline-block w-5 h-5 border-4 border-t-4 border-white border-opacity-30 rounded-full"></span> : "Login"} */}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
