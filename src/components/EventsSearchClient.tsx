"use client"; // Client-side logic

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import EventsCard from "@/components/EventCard";

const EventsSearchClient: React.FC<{ events: any[] }> = ({ events }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
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
      <EventsCard events={filteredEvents} searchQuery={searchQuery} />
    </div>
  );
};

export default EventsSearchClient;
