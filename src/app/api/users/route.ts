// import User from "@/models/User"; 


// export const getUsersForSidebar = async (req, res) => {
//   try {
//     const loggedInUserId = req.user._id;

//     const filteredUsers = await User.find({
//       _id: { $ne: loggedInUserId },
//     }).select("-password");

//     res.status(200).json(filteredUsers);
//   } catch (error) {
//     console.error("Error in getUsersForSidebar:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


import User from "@/models/User"; 
import { NextApiRequest, NextApiResponse } from "next";
import { Types } from "mongoose"; // For handling MongoDB ObjectId types

interface CustomNextApiRequest extends NextApiRequest {
  user: {
    _id: Types.ObjectId; // Assuming _id is a MongoDB ObjectId
  };
}

export const getUsersForSidebar = async (
  req: CustomNextApiRequest, 
  res: NextApiResponse
) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar:", (error as Error).message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
