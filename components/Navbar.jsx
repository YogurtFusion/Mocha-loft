"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Hero from "./Hero";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/#Menu" },
    { name: "Contact", href: "https://wa.me/9386183875", isExternal: true },
  ];
  return (
    <header className="text-amber-50 sticky top-0 z-50 w-full shadow-md bg-[#1A1614] ">
      {/* Wrap */}
      <div className="flex justify-between items-center max-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <div className="relative size-15 rounded-full overflow-hidden border border-white/20 ">
            <Image
              src={Logo}
              className="object-cover"
              alt="Logo"
              fill
              priority
            />
          </div>
          <span className=" hidden sm:block font-playfair text-white ">
            Mocha Loft
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item.name} className=" hover:text-amber-400 ">
                <Link
                  href={`${item.href}`}
                  target={item.isExternal ? "_blank" : "_self"}
                  className="relative group py-1 block"
                >
                  <span className="group-hover:text-amber-400  transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="absolute h-[0.5px] left-0 bottom-0 w-0 bg-amber-400 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className=" text-amber-50 md:hidden hover:text-amber-400 transition-colors  "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* mobile nav */}
      {isOpen && (
        <div className=" border-t border-white/10 bg-[#1A1614] px-6 py-4   ">
          <ul className="flex flex-col justify-center text-amber-50 gap-4">
            {navLinks.map((item) => (
              <li key={item.name} className="">
                <Link
                  href={`${item.href}`}
                  className="block w-full py-2 hover:text-amber-40"
                  onClick={() => setIsOpen(false)}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
