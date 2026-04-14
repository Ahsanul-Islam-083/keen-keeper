// import { LuHouse, LuTimeline, LuChartLine } from "react-icons/lu";
import { LuChartLine, LuHouse } from "react-icons/lu";
import NavLink from "./Navlinks";
import { RiTimeLine } from "react-icons/ri";
import Link from "next/link";


const navItems = [
  { path: "/", text: "Home", icon: <LuHouse size={15} /> },
  { path: "/timeline", text: "Timeline", icon: <RiTimeLine size={15} /> },
  { path: "/stats", text: "Stats", icon: <LuChartLine size={15} /> },
];

const Navbar = () => {
  return (
    <div className="bg-white z-10 sticky top-0 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems.map(({ path, text, icon }) => (
                <li key={path}>
                  <NavLink path={path} text={text} icon={icon} />
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-xl font-medium text-[#2d5a4e]">
            <span className="font-bold text-black">Keen</span>Keeper
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map(({ path, text, icon }) => (
              <li key={path}>
                <NavLink path={path} text={text} icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;