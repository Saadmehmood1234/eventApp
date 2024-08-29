"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import Link from "next/link";
import EventsCard from "@/components/EventCard";
 
const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const userProfilePicture = "user.jpg";
 const [isLoggedIn,setIsLoggedIn]=useState(false)
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center text-gray-800">
      <header className="w-full flex justify-between items-center p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <div className="text-2xl font-bold text-gray-900">Eventify</div>
        <nav className="space-x-8 flex max-[410px]:hidden items-center">
          <Link href="/events" className="hover:underline text-gray-700">
            Events
          </Link>

          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <img
                  src={userProfilePicture}
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
              <button className="hover:underline text-gray-700">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:underline text-gray-700">
              Login
            </Link>
          )}
        </nav>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center text-center mt-12 px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
          Discover and Participate in Exciting Events
        </h1>
        <div className="mb-12 text-2xl max-w-3xl">
          <p>
            Welcome to Eventify, your go-to platform for staying up-to-date with
            all the exciting events happening around our college!
          </p>
        </div>
        <div className="w-full max-w-3xl mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search events..."
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mt-5">
          <EventsCard searchQuery={searchQuery} />
        </div>
      </main>
      <footer className="w-full bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Eventify</h2>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Eventify. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
