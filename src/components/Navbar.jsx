import { navLists } from "../constants";
import { apple, bag, search } from "../utils";

export default function Navbar() {
  return (
    <nav className="container mt-[30px] flex justify-between items-center h-[50px] text-white">
      <div id="logo">
        <img src={apple} width={24} alt="Apple Logo" />
      </div>
      <ul id="navLinks" className="flex gap-[30px] max-md:hidden">
        {navLists.map((item, index) => (
          <li
            id="navLink"
            className="font-roboto text-[22px] font-normal cursor-pointer"
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
