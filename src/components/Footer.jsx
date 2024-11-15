import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="container text-white pdy-40">
      <p className="max-w-[352px]">
        More ways to shop : Find an apple store or other retail near you. Or
        call +221 78 018 29 29.
      </p>
      <div className="h-[3px] w-full bg-[#1E1E1E] my-[40px]"></div>
      <div className="w-full flex justify-between">
        <p className="max-w-[400px]">
          Copyright 2024 Apple Inc . All rights reserved .
        </p>
        <ul className="flex gap-4">
          {footerLinks.map((link, i, array) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
