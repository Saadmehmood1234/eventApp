import Event from "@/models/Event";
import connectToMongoDb from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

interface EventBody {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organiser: string; 
  imageUrl?: string;
  tags?: string[];
}



export const POST = async (req: NextRequest) => {
  await connectToMongoDb();

  try {
    const body: EventBody = await req.json();

    const {
      title,
      description,
      startDate,
      endDate,
      location,
      imageUrl,
      tags,
      organiser
    } = body;


    if (!title || !description || !startDate || !endDate ||  !location || !organiser) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newEvent = new Event({
      title,
      description,
      startDate,
      endDate,
      location,
      organiser,
      imageUrl,
      tags,
    });

    await newEvent.save();

    return NextResponse.json({
      _id: newEvent._id,
      title: newEvent.title,
      description: newEvent.description,
      startDate: newEvent.startDate,
      endDate: newEvent.endDate,
      location: newEvent.location,
      organiser: newEvent.organiser,
      imageUrl: newEvent.imageUrl,
      tags: newEvent.tags,
    }, { status: 201 });
  } catch (error: any) {
    console.error("Error in event creation:", error.message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};