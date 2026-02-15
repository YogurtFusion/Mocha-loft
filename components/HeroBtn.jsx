import Link from "next/link";
import React from "react";

const HeroBtn = ({ text, link, padding, svg }) => {
  return (
    <Link
      href={`/${link}`}
      className={`text-primary ${padding} bg-[rgba(217,151,38,0.20)]  rounded-full border border-gold/80 hover:bg-[#271b0d] hover:border-gold flex items-center gap-1   `}
    >
      {svg}
      <span className="text-base">{text}</span>
    </Link>
  );
};

export default HeroBtn;
