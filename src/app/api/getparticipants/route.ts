import { NextRequest, NextResponse } from 'next/server';
import EventParticipant from '@/models/Participants';
import connectToMongoDb from '@/utils/dbConnect';

export async function GET(req: NextRequest) {
  await connectToMongoDb();
  try {
    const participants = await EventParticipant.find();
     console.log(participants)
    return NextResponse.json({ participants }, { status: 200 });
  } catch (error) {
    console.error('Error fetching participants:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
