
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { getParticipants } from "@/actions/data";
interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}

interface Participant {
  id: string;
  fullname: string;
  enrollment: string;
  semester: string;
  course: string;
  eventId: string;
  phone: string;
  email: string;
  event: string;
}

const ParticipantPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getevent");
        if (!response.ok) throw new Error("Network response was not ok");
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

  // Fetch participants
 
  // useEffect(() => {
  //   const fetchParticipant = async () => {
  //     try {
  //       const participantsData = await getParticipants();
  //       console.log(participantsData) // Call the server action
  //       setParticipants(participantsData);
  //     } catch (err) {
  //       console.error("Error fetching event:", err);
  //       // setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchParticipant();
  // }, [])
  // Fetch participants
useEffect(() => {
  const fetchParticipant = async () => {
    try {
      const participantsData = await getParticipants();
      
      // Cast participantsData to Participant[]
      const formattedParticipants: Participant[] = participantsData.map((participant: any) => ({
        id: participant.id as string, // Ensure id is treated as a string
        fullname: participant.fullname,
        enrollment: participant.enrollment,
        semester: participant.semester,
        course: participant.course,
        eventId: participant.eventId,
        phone: participant.phone,
        email: participant.email,
        event: participant.event,
      }));

      setParticipants(formattedParticipants);
    } catch (err) {
      console.error("Error fetching participants:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchParticipant();
}, []);


  // Toggle the expanded state of an event
  const toggleExpand = (eventId: string) => {
    setExpandedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="flex justify-between items-center pt-6 py-4 lg:px-8 px-3 bg-slate-50">
        <div className="flex w-full gap-4 items-center max-md:flex-col max-md:justify-center max-md:items-center">
          <h1 className="text-3xl font-bold text-purple-600">Participants</h1>
          <div className="text-xl font-semibold text-gray-600">
            All Participants:{" "}
            <span className="text-purple-600">{participants.length}</span>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-100 min-h-screen">
        {events.map((event, index) => {
          // Filter participants for the current event
          const eventParticipants = participants.filter(
            (participant) => participant.eventId === event.id
          );

          const shouldShowButton = eventParticipants.length > 5;
          const displayedParticipants = expandedEvents.has(event.id)
            ? eventParticipants
            : eventParticipants.slice(0, 5);

          return (
            <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex max-md:flex-col justify-between">
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl max-lg:text-2xl font-semibold text-gray-700">
                    {event.title}
                  </h2>
                </div>
                <div className="font-semibold max-md:mb-4">
                  Participants:{" "}
                  <span className="text-purple-600">
                    {eventParticipants.length}
                  </span>
                </div>
              </div>

              {/* List of participants */}
              <ul className="list-disc ml-6 mt-4">
                {displayedParticipants.length > 0 ? (
                  displayedParticipants.map((participant, index) => (
                    <div key={participant.id} className="flex justify-between">
                      <Link href={`/admin/participants/${participant.id}`}>
                      <li className="text-gray-600 hover:text-blue-500">{participant.fullname}</li>
                      </Link>
                      <Link href={`/admin/participants/${participant.id}`}>
                        <BiSolidUserDetail />
                      </Link>
                    </div>
                  ))
                ) : (
                  <li className="text-gray-500">
                    No participants for this event
                  </li>
                )}
              </ul>

              {/* Show "View All" button if needed */}
              {shouldShowButton && (
               <div className="flex justify-start items-center">
                 <button
                  onClick={() => toggleExpand(event.id)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
                >
                  {expandedEvents.has(event.id) ? "Show Less" : "View All"}
                </button>
               </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ParticipantPage;
