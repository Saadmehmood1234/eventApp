// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import Link from 'next/link';
// interface Event {
//   id:string;
//   title: string;
//   startDate: string;
//   endDate: string;
//   image: string;
// }

// interface EventsCardProps {
//   searchQuery: string;
// }

// const events: Event[] = [
//   {
//     id: '1',
//     title: "Tech Conference 2024",
//     startDate: "2024-09-01",
//     endDate: "2024-09-03",
//     image: "eventa1.jpg",
//   },
//   {
//     id: '2',
//     title: "Art Workshop",
//     startDate: "2024-09-15",
//     endDate: "2024-09-16",
//     image: "eventa2.jpg",
//   },
//   {
//     id: '3',
//     title: "Music Festival",
//     startDate: "2024-10-10",
//     endDate: "2024-10-12",
//     image: "eventa2.jpg",
//   },
//   {
//     id: '4',
//     title: "Business Summit",
//     startDate: "2024-11-05",
//     endDate: "2024-11-06",
//     image: "eventa1.jpg",
//   },
//   {
//     id: '5',
//     title: "Charity Gala",
//     startDate: "2024-12-01",
//     endDate: "2024-12-02",
//     image: "eventa1.jpg",
//   },
//   {
//     id: '6',
//     title: "Tech Talk",
//     startDate: "2024-08-30",
//     endDate: "2024-08-30",
//     image: "eventa2.jpg",
//   },
//   {
//     id: '6',
//     title: "Tech Talk",
//     startDate: "2024-08-30",
//     endDate: "2024-08-30",
//     image: "eventa2.jpg",
//   },
// ];

// const EventsCard: React.FC<EventsCardProps> = ({ searchQuery }) => {
//   const [showAll, setShowAll] = useState(false);

//   const filteredEvents = events.filter((event) =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

//   return (
//     <div className="min-h-screen p-6">
//       <div className="mb-8 text-3xl font-semibold text-orange-600">
//         <h1>Upcoming Events</h1>
//       </div>
//       {filteredEvents.length > 0 ? (
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {visibleEvents.map((event) => (

//               <Link key={event.id} href={`/user/events/${event.id}`}>
//                 <div
//                   className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 cursor-pointer"
//                 >
//                   <img
//                     className="w-full h-48 object-cover"
//                     src={event.image}
//                     alt={event.title}
//                   />
//                   <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2 text-gray-900">
//                       {event.title}
//                     </div>
//                     <p className="text-gray-700 text-base">
//                       <span className="font-semibold">Start Date:</span>{" "}
//                       {event.startDate}
//                     </p>
//                     <p className="text-gray-700 text-base">
//                       <span className="font-semibold">End Date:</span>{" "}
//                       {event.endDate}
//                     </p>
//                   </div>
//                   <div className="px-6 pb-4">
//                     <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
//                       Join Event
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           {filteredEvents.length > 6 && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="text-center text-gray-700 text-2xl">
//           No upcoming events
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsCard

// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import Link from "next/link";

// interface Event {
//   id: string;
//   title: string;
//   startDate: string;
//   endDate: string;
//   image: string;
// }

// interface EventsCardProps {
//   searchQuery: string;
// }
// const imageMap: { [key: string]: string } = {
//   "eventa1.jpg": "/eventa1.jpg",
//   "eventa2.jpg": "/eventa2.jpg",
// };
// const formatDate = (dateString: string) => {
//   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const EventsCard: React.FC<EventsCardProps> = ({ searchQuery }) => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("/api/getevent");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         const formattedEvents = data.event.map((event: any) => ({
//           id: event._id,
//           title: event.title,
//           startDate: event.startDate,
//           endDate: event.endDate,
//           description: event.description,
//           imageUrl: event.imageUrl,
//         }));

//         setEvents(formattedEvents);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const filteredEvents = events.filter((event) =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

//   return (
//     <div className="min-h-screen p-6">
//       <div className="mb-8 text-3xl font-semibold text-orange-600">
//         <h1>Upcoming Events</h1>
//       </div>
//       {filteredEvents.length > 0 ? (
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {visibleEvents.map((event) => (
//               <Link key={event.id} href={`/user/events/${event.id}`}>
//                 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 cursor-pointer">
//                   <img
//                     className="w-full h-48 object-cover"
//                     src={event.image || "eventa1.jpg"} 
//                     alt={event.title}
//                   />
               
//                   <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2 text-gray-900">
//                       {event.title}
//                     </div>
//                     <p className="text-gray-700 text-base">
//                       <span className="font-semibold">Start Date:</span>{" "}
//                       {formatDate(event.startDate)}
//                     </p>
//                     <p className="text-gray-700 text-base">
//                       <span className="font-semibold">End Date:</span>{" "}
//                       {formatDate(event.endDate)}
//                     </p>
//                   </div>
//                   <div className="px-6 pb-4">
//                     <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
//                       Join Event
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           {filteredEvents.length > 6 && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="text-center text-gray-700 text-2xl">
//           No upcoming events
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsCard;


"use client"
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  image: string;
}

interface EventsCardProps {
  searchQuery: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const EventsCard: React.FC<EventsCardProps> = ({ searchQuery }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/getevent");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formattedEvents = data.event.map((event: any) => ({
          id: event._id,
          title: event.title,
          startDate: event.startDate,
          endDate: event.endDate,
          description: event.description,
          imageUrl: event.imageUrl,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

  return (
    <div className="min-h-screen p-6">
      <div className="mb-8 text-3xl font-semibold text-orange-600">
        <h1>Upcoming Events</h1>
      </div>
      {loading ? (
        <div className="text-center text-gray-700 text-2xl">Loading...</div>
      ) : filteredEvents.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleEvents.map((event) => (
              <Link key={event.id} href={`/user/events/${event.id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 cursor-pointer">
                  <img
                    className="w-full h-48 object-cover"
                    src={event.image || "eventa1.jpg"} 
                    alt={event.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-900">
                      {event.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      <span className="font-semibold">Start Date:</span>{" "}
                      {formatDate(event.startDate)}
                    </p>
                    <p className="text-gray-700 text-base">
                      <span className="font-semibold">End Date:</span>{" "}
                      {formatDate(event.endDate)}
                    </p>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
                      Join Event
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredEvents.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-700 text-2xl">
          No upcoming events
        </div>
      )}
    </div>
  );
};

export default EventsCard;
