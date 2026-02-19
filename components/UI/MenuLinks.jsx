"use client";
import React, { useState } from "react";

const Links = [
  { title: "Best Sellers" },
  { title: "Pizza" },
  { title: "Burger" },
  { title: "Biryani" },
  { title: "Pasta" },
];
const MenuLinks = () => {
  const [active, setactive] = useState("Best Sellers");
  return (
    <div className="flex flex-wrap justify-center items-center gap-5    max-w-sm mx-auto">
      {Links.map((item) => (
        <button
          key={item.title}
          className={`  rounded-full active:text-gold active:border-gold-hover  transition-all duration-300 active:bg-card active:scale-95 flex items-center justify-center px-6 py-2.5 
            ${active === item.title ? "border bg-card text-gold border-gold-hover scale-105 " : "bg-card/60 text-secondary border-[0.5px] border-primary  hover:bg-card hover:text-gold  hover:border-none "}`}
          onClick={() => setactive(item.title)}
        >
          <span className="text-base"> {item.title} </span>
        </button>
      ))}
    </div>
  );
};

export default MenuLinks;
