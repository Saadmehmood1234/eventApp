// import { NextRequest, NextResponse } from 'next/server';
// import EventParticipant from '@/models/Participants';
// import connectToMongoDb from '@/utils/dbConnect';

// export async function GET(req: NextRequest) {
//   await connectToMongoDb();

//   try {
//     // Extract ID from URL
//     const url = new URL(req.url);
//     console.log(url)
//     console.log('Request URL:', req.url);
//     const participantId = url.pathname.split('/').pop();
//      console.log(participantId)
    

//     if (!participantId || participantId.length !== 24) {
//       return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
//     }


//     const participant = await EventParticipant.findById(participantId);
  
//     if (!participant) {
//       return NextResponse.json({ message: 'Particpant not found' }, { status: 404 });
//     }
//     console.log(participant)
//     return NextResponse.json({ participant }, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching particpant:', error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import EventParticipant from '@/models/Participants';
import connectToMongoDb from '@/utils/dbConnect';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectToMongoDb();

  const { id } = params; // Get the dynamic ID from params
  console.log('Request ID:', id);

  if (!id || id.length !== 24) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  try {
    const participant = await EventParticipant.findById(id);

    if (!participant) {
      return NextResponse.json({ message: 'Participant not found' }, { status: 404 });
    }

    return NextResponse.json({ participant }, { status: 200 });
  } catch (error) {
    console.error('Error fetching participant:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
