"use server"
import { NextResponse } from 'next/server';
import Event from '@/models/Event';
import connectToMongoDb from '@/utils/dbConnect';
import EventParticipant from '@/models/Participants';
export async function createEvent(eventData: {
  id:string;
  title: string;
  members: number;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organiser: string;
  sponsers: string;
  imageUrl?: string;
  tags?: string[];
}) {
  await connectToMongoDb();
  const {
    title,
    members,
    description,
    startDate,
    endDate,
    location,
    organiser,
    sponsers,
    imageUrl,
    tags,
  } = eventData;

  if (!title || !description || !startDate || !location || !organiser || !members) {
    throw new Error("Missing required fields");
  }

  try {
    const newEvent = new Event({
      title,
      members,
      description,
      startDate,
      endDate,
      location,
      organiser,
      sponsers,
      imageUrl,
      tags,
    });

    await newEvent.save();

    return {
      title: newEvent.title,
      members: newEvent.members,
      description: newEvent.description,
      startDate: newEvent.startDate,
      endDate: newEvent.endDate,
      location: newEvent.location,
      organiser: newEvent.organiser,
      sponsers: newEvent.sponsers,
      imageUrl: newEvent.imageUrl,
      tags: newEvent.tags,
    };
  } catch (error) {
    console.error("Error in event creation:", error);
    throw new Error("Internal server error");
  }
}

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
      location: event.location,
      description: event.description,
      organiser: event.organiser,
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
        location: event.location,
        description: event.description,
        organiser: event.organiser,
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
  


  export async function fetchParticipantsById(participantId: string) {
    await connectToMongoDb(); // Connect to MongoDB
  
    if (!participantId || participantId.length !== 24) {
      throw new Error('Invalid ID'); // Handle invalid ID
    }
  
    try {
      const participants = await EventParticipant.findById(participantId);
  
      if (!participants) {
        throw new Error('Event not found'); // Handle event not found
      }
  
      return {
        id: participants._id,
        fullname: participants.fullname,
        enrollment: participants.enrollment,
        semester: participants.semester,
        course: participants.course,
        eventId: participants.eventId,
        phone: participants.phone,
        email: participants.email,
        event: participants.event,
      };
    } catch (error) {
      console.error('Error fetching event:', error);
      throw new Error('Internal server error'); // Handle internal error
    }
  }