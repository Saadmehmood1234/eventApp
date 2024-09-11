import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
const Header = () => {
  const { userId } = auth();
  return (
    <header className="w-full flex justify-between items-center p-6 bg-red-200 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-b-lg shadow-lg">
      <div className="text-2xl font-bold text-gray-900">Eventify</div>
      <nav className="space-x-8 flex max-[410px]:hidden items-center">
        {!userId ? (
          <>
          <Link href="/sign-in" className="hover:underline text-gray-700">
            Login
          </Link>
          <Link href="/sign-up" className="hover:underline text-gray-700">
          SignUp
        </Link>
        </>
        ) : (
          <>
            <Link href="/" className="hover:underline text-gray-700">
              Events
            </Link>
            <Link href="/admin" className="hover:underline text-gray-700">
              Admin
            </Link>
            <Link href="/user/profile">
          
            <li className="flex items-center">
                <UserButton />
              </li>
            </Link>
            <Link
              href="/event-history"
              className="hover:underline text-gray-700"
            >
              Event History
            </Link>
            {/* <button className="hover:underline text-gray-700">Logout</button> */}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
