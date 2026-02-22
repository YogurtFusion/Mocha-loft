import Link from "next/link";
import React from "react";

const HeroBtn = ({ text, link, padding, svg, target }) => {
  return (
    <a
      target={target}
      rel="noopener noreferrer"
      href={link}
      className={`text-secondary ${padding} bg-[rgba(217,151,38,0.20)]  rounded-full border border-gold/80 hover:border-gold  hover:text-primary hover:bg-amber-500/30 flex items-center gap-1 scroll-smooth  `}
    >
      {svg}
      <span className="text-base">{text}</span>
    </a>
  );
};

export default HeroBtn;
