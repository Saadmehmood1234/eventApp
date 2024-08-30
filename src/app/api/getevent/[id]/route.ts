import { NextRequest, NextResponse } from 'next/server';
import Event from '@/models/Event';
import connectToMongoDb from '@/utils/dbConnect';

export async function GET(req: NextRequest) {
  await connectToMongoDb();


  const { pathname } = new URL(req.url);
  const eventId = pathname.split('/').pop();

  if (typeof eventId !== 'string') {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
