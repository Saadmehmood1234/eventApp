"use client";

import { signOut } from "firebase/auth";
import {auth} from "@/utils/firebase"
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/signin"); // Redirect to sign-in page after sign-out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
