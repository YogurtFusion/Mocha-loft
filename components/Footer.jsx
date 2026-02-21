import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import FooterBtn from "./UI/FooterBtn";

const Footer = () => {
  return (
    <footer className="bg-[#1B120E] ">
      {/* Footer head */}
      <div className="">
        {/* Logo */}
        <div className="">
          <div className="relative rounded-full w-16 h-16 overflow-hidden">
            <Image
              src={Logo}
              alt="Logo image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <span className="text-primary ">Mocha Loft</span>
        </div>
        <p>Your favorite multi-cuisine cloud kitchen, delivering comfort food with love and quality you can taste.</p>
<FooterBtn/>
      </div>
    </footer>
  );
};

export default Footer;
