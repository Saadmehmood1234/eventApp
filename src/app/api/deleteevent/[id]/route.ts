// /pages/api/events/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongoDb from '@/utils/dbConnect';
import Event from '@/models/Event';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  await connectToMongoDb();

  if (req.method === 'DELETE') {
    try {
      const deletedEvent = await Event.findByIdAndDelete(id);
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Error deleting event:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
