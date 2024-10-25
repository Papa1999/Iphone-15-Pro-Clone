import { apple, bag, search } from "../assets/images";


export default function Navbar() {
 
  return (
    <nav className="container mt-[30px] flex justify-between items-center h-[50px] text-white">
      <div id="logo">
        <img src={apple} width={24} alt="Apple Logo" />
      </div>
      <ul id="navLinks" className="flex gap-[30px] max-md:hidden">
        <li id="navLink" className="font-serif text-[22px] font-normal ">
          Store
        </li>
        <li id="navLink" className="font-roboto text-[22px] font-normal ">
          Mac
        </li>
        <li id="navLink" className="font-roboto text-[22px] font-normal ">
          iPhone
        </li>
        <li id="navLink" className="font-roboto text-[22px] font-normal ">
          Support
        </li>
      </ul>
      <div id="icons" className="flex gap-[20px]">
        <div className="flex items-center justify-center">
          <img src={search} width={24}  alt="search" />
        </div>
        <div>
          <img src={bag} width={24} alt="bag" />
        </div>
      </div>
    </nav>
  );
}
