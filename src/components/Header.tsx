"use client";
import React, { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="w-full flex justify-between items-center p-6 bg-red-200 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-b-lg shadow-lg">
      <div className="text-2xl font-bold text-gray-900">Eventify</div>
      <nav className="space-x-8 flex max-[410px]:hidden items-center">
        <Link href="/" className="hover:underline text-gray-700">
          Events
        </Link>

        {isLoggedIn ? (
          <>
            <Link href="/profile">
              <img
                src=""
                alt="User Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </Link>
            <Link
              href="/event-history"
              className="hover:underline text-gray-700"
            >
              Event History
            </Link>
            <button className="hover:underline text-gray-700">Logout</button>
          </>
        ) : (
          <Link href="/login" className="hover:underline text-gray-700">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
