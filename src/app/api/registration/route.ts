import EventRegistration from "@/models/Participants";
import { NextRequest, NextResponse } from "next/server";
import connectToMongoDb from "@/utils/dbConnect";
import Event from "@/models/Event";

import mongoose from "mongoose";

export const POST = async (req: NextRequest) => {
  await connectToMongoDb();

  try {
    const { fullname, enrollment, semester, course, email, phone, eventId } = await req.json();
    const existingUser = await EventRegistration.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Already registered" },
        { status: 400 }
      );
    }
    const ParticipantEvent = await Event.findById(eventId);
    const event=ParticipantEvent?.title
    const newUser = new EventRegistration({
      fullname,
      enrollment,
      semester,
      email,
      course,
      phone,
      event,
      eventId
    });
    await newUser.save();

    // if (!event) {
    //   return NextResponse.json({ message: "Event not found" }, { status: 404 });
    // }

    // if (!event.attendees) {
    //   event.attendees = [];
    // }
    // event.attendees.push(newUser._id as mongoose.Schema.Types.ObjectId);

    // console.log("Attendees before saving:", event.attendees);

    // await event.save();

    console.log("Event after saving:", event); 
    return NextResponse.json(
      {
        _id: newUser._id,
        fullname: newUser.fullname,
        enrollment: newUser.enrollment,
        semester: newUser.semester,
        course: newUser.course,
        phone: newUser.phone,
        event:newUser.event,
        email: newUser.email,
        eventId:newUser.eventId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in registration controller:", (error as Error).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
