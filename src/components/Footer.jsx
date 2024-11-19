import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="container text-white pdy-20 text-xs">
      <p className="max-w-[352px]">
        More ways to shop :{" "}
        <span className="underline text-[#2997ff] cursor-pointer">
          Find an apple store
        </span>{" "}
        or{" "}
        <span className="underline text-[#2997ff] cursor-pointer">
          {" "}
          other retail
        </span>{" "}
        near you. Or call +221 78 018 29 29.
      </p>
      <div className="h-[3px] w-full bg-[#1E1E1E] my-[20px]"></div>
      <div className="w-full flex justify-between">
        <p className="max-w-[400px]">
          Copyright 2024 Apple Inc . All rights reserved .
        </p>
        <ul className="flex gap-4">
          {footerLinks.map((link, i) => (
            <li key={i} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
