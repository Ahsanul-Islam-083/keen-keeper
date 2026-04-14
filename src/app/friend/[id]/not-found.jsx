import Link from "next/link";
import { LuHouse, LuUserX } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-4">

      {/* Animated icon */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-6">
        <div className="absolute w-32 h-32 rounded-full bg-[#2d5a4e]/10 animate-ping" />
        <div className="absolute w-24 h-24 rounded-full bg-[#2d5a4e]/15 animate-pulse" />
        <div className="relative w-16 h-16 rounded-full bg-[#2d5a4e] flex items-center justify-center shadow-lg">
          <LuUserX size={28} className="text-white" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-6xl font-black text-[#2d5a4e] mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Friend not found</h2>
      <p className="text-gray-400 text-sm max-w-xs mb-8">
        Looks like this connection doesn't exist — or maybe they moved on.
      </p>

      {/* Buttons */}
      <div className="flex items-center">
        <Link
          href="/"
          className="btn bg-[#2d5a4e] hover:bg-[#24483e] text-white border-none gap-2 rounded-xl px-6"
        >
          <LuHouse size={16} />
          Back to home
        </Link>
      </div>

    </div>
  );
}