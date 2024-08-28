// src/app/user/events/[id]/page.tsx
import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

interface EventDetailProps {
  params: {
    id: string;
  };
}

interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  duration: string;
  location: string;
  description: string;
  organiser: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    startDate: '2024-09-01',
    endDate: '2024-09-03',
    image: '/newEvent.jpeg',
    duration: '3 Days',
    location: 'Main Auditorium, College Campus',
    description: 'An exciting conference featuring the latest advancements in technology...',
    organiser: 'Tech Club',
  },
  // Add more events here
];

async function fetchEvent(id: string): Promise<Event | undefined> {
  return events.find(event => event.id === id);
}

export async function generateStaticParams() {
  return events.map(event => ({ id: event.id }));
}

const EventDetail: React.FC<EventDetailProps> = async ({ params }) => {
  const event = await fetchEvent(params.id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center text-gray-800">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>

        <div className="flex flex-wrap items-center text-gray-700 mb-6">
          <div className="flex items-center mr-6">
            <FaCalendarAlt className="mr-2 text-indigo-600" />
            <span>{event.startDate} - {event.endDate}</span>
          </div>
          <div className="flex items-center mr-6">
            <FaClock className="mr-2 text-indigo-600" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center mr-6">
            <FaMapMarkerAlt className="mr-2 text-indigo-600" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-700 mb-6">
          <FaUser className="mr-2 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Organised by:</h2>
          <span className="ml-2 text-lg text-gray-700">{event.organiser}</span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
          <p className="text-lg text-gray-700">{event.description}</p>
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
