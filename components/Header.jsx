import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-10 p-1 bg-slate-400 rounded-3xl"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a7 7 0 1 0 10 10" />
              </svg>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </Link>
                {/* <!-- Logged In Only --> */}
                <Link
                  href="/bookings.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Bookings
                </Link>
                <Link
                  href="/add-room.html"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              <Link
                href="login.html"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignInAlt className="inline" /> Login
              </Link>
              <Link
                href="register.html"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaUser className="inline" /> Register
              </Link>
              <Link href="my-rooms.html">
                <FaBuilding className="inline" /> My Rooms
              </Link>
              <Link
                href="login.html"
                className="mx-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignOutAlt className="inline" /> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>
          {/* <!-- Logged In Only --> */}
          <Link
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/add-room.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  );
}
