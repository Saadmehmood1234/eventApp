"use server";

import MyUser from "@/models/usermodel";
import connectToMongoDb from "@/utils/dbConnect";
export async function createUser(user: any) {
  try {
    await connectToMongoDb();
    const newUser = await MyUser.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}