// "use client";
// import { useEffect, useState } from "react";

// interface Participant {
//   fullname: string;
//   enrollment: string;
//   semester: string;
//   course: string;
//   eventId: string;
//   phone: string;
//   email: string;
//   event: string;
// }
// interface EventDetailProps {
//     params: {
//       id: string;
//     };
//   }
// const ParticipantDetailPage : React.FC<EventDetailProps> = ({params}) => {
//   const { id } = params; // Fetch participant ID from the route
//   const [participant, setParticipant] = useState<Participant | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch participant details by ID
//   useEffect(() => {
//     if (!id) return;

//     const fetchParticipantDetails = async () => {
//         try {
//           setLoading(true);
//           const response = await fetch(`/api/getparticipants/${id}`);
//           if (!response.ok) {
//             throw new Error(`Network response was not ok, status: ${response.status}`);
//           }
//           const data = await response.json();
          
//           const formattedParticipant: Participant = {
//             fullname: data.participant.fullname,
//             enrollment: data.participant.enrollment,
//             semester: data.participant.semester,
//             course: data.participant.course,
//             eventId: data.participant.eventId,
//             phone: data.participant.phone,
//             email: data.participant.email,
//             event: data.participant.event,
//           };
//           setParticipant(formattedParticipant);
//         } catch (error) {
//           console.error("Error fetching participant details:", error);
//         } finally {
//           setLoading(false);
//         }
//       };
      
      

//     fetchParticipantDetails();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!participant) {
//     return <div>No participant found</div>;
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-purple-600">
//           {participant.fullname}
//         </h1>
//         <div className="mt-4">
//           <p className="text-lg">
//             <strong>Enrollment:</strong> {participant.enrollment}
//           </p>
//           <p className="text-lg">
//             <strong>Semester:</strong> {participant.semester}
//           </p>
//           <p className="text-lg">
//             <strong>Course:</strong> {participant.course}
//           </p>
//           <p className="text-lg">
//             <strong>Phone:</strong> {participant.phone}
//           </p>
//           <p className="text-lg">
//             <strong>Email:</strong> {participant.email}
//           </p>
//           <p className="text-lg">
//             <strong>Event:</strong> {participant.event}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParticipantDetailPage;
"use client";
import { useEffect, useState } from "react";

interface Participant {
  fullname: string;
  enrollment: string;
  semester: string;
  course: string;
  eventId: string;
  phone: string;
  email: string;
  event: string;
}

interface EventDetailProps {
  params: {
    id: string;
  };
}

const ParticipantDetailPage: React.FC<EventDetailProps> = ({ params }) => {
  const { id } = params; // Fetch participant ID from the route
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch participant details by ID
  useEffect(() => {
    if (!id) return;

    const fetchParticipantDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/getparticipants/${id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        const data = await response.json();

        const formattedParticipant: Participant = {
          fullname: data.participant.fullname,
          enrollment: data.participant.enrollment,
          semester: data.participant.semester,
          course: data.participant.course,
          eventId: data.participant.eventId,
          phone: data.participant.phone,
          email: data.participant.email,
          event: data.participant.event,
        };
        setParticipant(formattedParticipant);
      } catch (error) {
        console.error("Error fetching participant details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipantDetails();
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-200">Loading...</div>;
  }

  if (!participant) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-200 text-red-500">No participant found</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-purple-100 to-blue-100  flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold text-gray-800">{participant.fullname}</h1>
          <p className="text-xl text-gray-600 mt-2">{participant.event}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Details</h2>
              <p className="text-gray-600"><strong>Enrollment:</strong> {participant.enrollment}</p>
              <p className="text-gray-600"><strong>Semester:</strong> {participant.semester}</p>
              <p className="text-gray-600"><strong>Course:</strong> {participant.course}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h2>
              <p className="text-gray-600"><strong>Phone:</strong> {participant.phone}</p>
              <p className="text-gray-600"><strong>Email:</strong> {participant.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetailPage;
