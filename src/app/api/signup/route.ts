import EventUser from "@/models/User";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "@/utils/generateToken";
import { NextRequest, NextResponse } from "next/server";
import connectToMongoDb from "@/utils/dbConnect";

export const POST = async (req: NextRequest) => {
  await connectToMongoDb();
  
  try {
    const { fullname, username, password, confirmPassword, email } =
      await req.json();

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    const existingUser = await EventUser.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new EventUser({
      fullname,
      username,
      password: hashPassword,
      email,
      profilePic: boyProfilePicture,
    });

    await newUser.save();

    // Generate token and get it
    const token = generateTokenAndCookie(newUser._id);
    console.log(token);
    console.log(newUser);

    return NextResponse.json(
      {
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        token, 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup controller:", (error as Error).message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
