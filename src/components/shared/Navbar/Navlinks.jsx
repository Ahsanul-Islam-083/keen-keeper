"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, text, icon }) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link
            href={path}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
        ${isActive
                    ? "bg-[#2d5a4e] text-white"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
        >
            {icon}
            {text}
        </Link>
    );
};

export default NavLink;