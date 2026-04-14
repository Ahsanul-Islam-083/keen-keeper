import Link from "next/link";
import { LuHouse, LuMapPinOff } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-4">


      <div className="relative flex items-center justify-center w-32 h-32 mb-6">
        <div className="absolute w-32 h-32 rounded-full bg-[#2d5a4e]/10 animate-ping" />
        <div className="absolute w-24 h-24 rounded-full bg-[#2d5a4e]/15 animate-pulse" />
        <div className="relative w-16 h-16 rounded-full bg-[#2d5a4e] flex items-center justify-center shadow-lg">
          <LuMapPinOff size={28} className="text-white" />
        </div>
      </div>

  
      <h1 className="text-6xl font-black text-[#2d5a4e] mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Page not found</h2>
      <p className="text-gray-400 text-sm max-w-xs mb-8">
        This page doesn't exist or was moved. Let's get you back to somewhere familiar.
      </p>

  
      <Link
        href="/"
        className="btn bg-[#2d5a4e] hover:bg-[#24483e] text-white border-none gap-2 rounded-xl px-6"
      >
        <LuHouse size={16} />
        Back to home
      </Link>

    </div>
  );
}