"use server"
// app/events/actions.ts

// import { NextResponse } from 'next/server';
// import Event from '@/models/Event';
// import connectToMongoDb from '@/utils/dbConnect';

// // // Server Action to fetch events
// // export const fetchEvents = async () => {
// //   await connectToMongoDb();
// //   try {
// //     const events = await Event.find();
// //     console.log(events)
// //     return NextResponse.json({ events }, { status: 200 });
// //   } catch (error) {
// //     console.error('Error fetching events:', error);
// //     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
// //   }
// // };
// import { ObjectId } from "mongodb";

// // Assuming you are fetching data from MongoDB like this:
// export const fetchEvents = async () => {
//     const db=await connectToMongoDb();
//   const events = await db.collection("events").find().toArray();

//   // Serialize data to remove ObjectId and Date issues
//   const serializedEvents = events.map((event:any) => ({
//     ...event,
//     _id: event._id.toString(), // Convert ObjectId to string
//     startDate: event.startDate.toISOString(), // Convert Date to ISO string
//     endDate: event.endDate.toISOString(), // Convert Date to ISO string
//   }));

//   return serializedEvents;
// };

import { NextResponse } from 'next/server';
import Event from '@/models/Event';
import connectToMongoDb from '@/utils/dbConnect';
import EventParticipant from '@/models/Participants';
export async function getEvents() {
  try {
    await connectToMongoDb(); // Connect to MongoDB
    const events = await Event.find(); // Fetch events from DB
    return events.map((event) => ({
      id: event._id,
      title: event.title,
      startDate: event.startDate,
      endDate: event.endDate,
      image: event.imageUrl,
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}


export async function fetchEventById(eventId: string) {
  await connectToMongoDb(); // Connect to MongoDB

  if (!eventId || eventId.length !== 24) {
    throw new Error('Invalid ID'); // Handle invalid ID
  }

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      throw new Error('Event not found'); // Handle event not found
    }

    return {
        id: event._id,
        title: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        image: event.imageUrl,
    };
  } catch (error) {
    console.error('Error fetching event:', error);
    throw new Error('Internal server error'); // Handle internal error
  }
}



export async function getParticipants() {
    try {
      await connectToMongoDb(); // Connect to MongoDB
      const participants = await EventParticipant.find();
      return participants.map((participant) => ({
        id: participant._id,
        fullname: participant.fullname,
        enrollment: participant.enrollment,
        semester: participant.semester,
        course: participant.course,
        eventId: participant.eventId,
        phone: participant.phone,
        email: participant.email,
        event: participant.event,
      }));
    } catch (error) {
      console.error("Error fetching participants:", error);
      return [];
    }
  }
  