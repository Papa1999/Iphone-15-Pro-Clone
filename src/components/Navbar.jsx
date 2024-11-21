import { navLists } from "../constants";
import { apple, bag, search } from "../utils";

export default function Navbar() {
  return (
    <nav className="max-w-full px-[80px] max-lg:px-[40px] flex justify-between items-center h-[50px] text-white mt-[10px] ">
      <div id="logo">
        <img src={apple} width={24} alt="Apple Logo" />
      </div>
      <ul id="navLinks" className="flex gap-[30px] max-md:hidden">
        {navLists.map((item, index) => (
          <li
            id="navLink"
            className="font-roboto text-sm text-gray-500 hover:text-white font-normal cursor-pointer"
            key={index}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div id="icons" className="flex gap-[20px]">
        <div className="flex items-center justify-center">
          <img src={search} width={24} alt="search" />
        </div>
        <div>
          <img src={bag} width={24} alt="bag" />
        </div>
      </div>
    </nav>
  );
}
