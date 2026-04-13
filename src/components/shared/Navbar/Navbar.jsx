// import { LuHouse, LuTimeline, LuChartLine } from "react-icons/lu";
import { LuChartLine, LuHouse } from "react-icons/lu";
import NavLink from "./Navlinks";
import { RiTimeLine } from "react-icons/ri";


const navItems = [
  { path: "/",         text: "Home",     icon: <LuHouse size={15} /> },
  { path: "/timeline", text: "Timeline", icon: <RiTimeLine size={15} /> },
  { path: "/stats",    text: "Stats",    icon: <LuChartLine size={15} /> },
];

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Keen<span className="font-extrabold">Keeper</span>
        </span>
        <ul className="flex items-center gap-1">
          {navItems.map(({ path, text, icon }) => (
            <li key={path}>
              <NavLink path={path} text={text} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;