// /src/lib/dbConnect.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient: mongoose.Mongoose | null = null;

async function dbConnect(): Promise<void> {
  if (cachedClient) {
    return;
  }

//   cachedClient = await mongoose.connect(MONGODB_URI, {
//     // useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
}

export default dbConnect;
