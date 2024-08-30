// import React from 'react';

// const EventHistory = () => {
//   const events = [
//     {
//       name: "Hackathon",
//       date: "2023-05-12",
//       description: "A 24-hour coding marathon to develop innovative solutions.",
//     },
//     {
//       name: "Coding Challenge",
//       date: "2023-07-18",
//       description: "Competitive coding event to solve algorithmic problems.",
//     },
//     {
//       name: "Robotics Workshop",
//       date: "2023-09-25",
//       description: "Hands-on workshop on building and programming robots.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
//       <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">Event History</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map((event, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-2">{event.name}</h2>
//             <p className="text-sm text-gray-500 mb-4">{new Date(event.date).toDateString()}</p>
//             <p className="text-gray-600">{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventHistory;

import React from 'react';

const EventHistory = () => {
  const events = [
    {
      name: "Hackathon",
      date: "2023-05-12",
      description: "A 24-hour coding marathon to develop innovative solutions.",
      participants: 120,
      winner: "John Doe",
    },
    {
      name: "Coding Challenge",
      date: "2023-07-18",
      description: "Competitive coding event to solve algorithmic problems.",
      participants: 80,
      winner: "Alice Brown",
    },
    {
      name: "Robotics Workshop",
      date: "2023-09-25",
      description: "Hands-on workshop on building and programming robots.",
      participants: 60,
      winner: "Charlie Black",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">Event History</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{event.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{new Date(event.date).toDateString()}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="text-gray-600">
              <p className="font-semibold">Participants: <span className="text-purple-600">{event.participants}</span></p>
              <p className="font-semibold">Winner: <span className="text-purple-600">{event.winner}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHistory;

