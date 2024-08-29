import EventUser from "@/models/User";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "@/utils/generateToken";
import { NextRequest, NextResponse } from "next/server";
import connectToMongoDb from "@/utils/dbConnect";

export const POST = async (req: NextRequest) => {
  await connectToMongoDb();

  try {
    const { username, password } = await req.json();
    const user = await EventUser.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 400 }
      );
    }
// Inside your POST routes in API
const token = generateTokenAndCookie(user._id);
return NextResponse.json(
  {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    email: user.email,
    token, // Include token in the response
  },
  { status: 201 }
);

  } catch (error) {
    console.error("Error in signup controller:", (error as Error).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
