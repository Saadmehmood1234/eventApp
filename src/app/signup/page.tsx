"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
// import useSignup from "@/hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  
  // const { loading, signup } = useSignup();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // await signup(inputs);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="container mx-auto p-6 max-w-md rounded-lg bg-gradient-to-r from-teal-200 to-blue-200">
        <h1 className="text-4xl font-extrabold text-gray-600 mb-8 text-center">
          Welcome to <span className="text-gray-600">Eventify</span>
        </h1>
        <div className="bg-gradient-to-r from-teal-200 to-blue-200 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={inputs.fullname}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                placeholder="Enter Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                placeholder="Enter Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <Link
              href="/login"
              className="text-sm hover:underline hover:opacity-70 text-gray-700 mb-6 block text-center"
            >
              Already have an account?
            </Link>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-teal-600 shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              // disabled={loading}
            >
              {/* {loading ? <span className="animate-spin inline-block w-5 h-5 border-4 border-t-4 border-white border-opacity-30 rounded-full"></span> : "Sign Up"} */}
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
