import { apple, bag, search } from "../assets/images";
export default function Navbar() {
  return (
    <nav className="mt-[30px] flex justify-between items-center xl:w-[945px] h-[50px] mx-auto text-white">
      <div id="logo">
        <img src={apple} alt="Apple Logo" />
      </div>
      <ul id="navLinks" className="flex xl:gap-[30px]">
        <li id="navLink">Store</li>
        <li id="navLink">Mac</li>
        <li id="navLink">iPhone</li>
        <li id="navLink">Support</li>
      </ul>
      <div id="icons" className="flex xl:gap-[20px]">
        <div>
          <img src={search} alt="search" />
        </div>
        <div>
          <img src={bag} alt="bag" />
        </div>
      </div>
    </nav>
  );
}
