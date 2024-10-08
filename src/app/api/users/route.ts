import { NextRequest, NextResponse } from 'next/server';
import EventUser from '@/models/User';
import connectToMongoDb from '@/utils/dbConnect';

export async function GET(req: NextRequest) {
  await connectToMongoDb();
  console.log("saad");

  try {
    const eventuser = await EventUser.find();
    console.log(eventuser);

    return NextResponse.json(eventuser, { status: 200 });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
