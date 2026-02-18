import React from "react";
import MenuImg from "@/public/menu-img.png";
import Image from "next/image";
import MenuBtn from "./MenuBtn";
const MenuCard = () => {
  return (
    <div className=" bg-card h-fit border border-primary/20 rounded-[2rem] overflow-hidden  font-poppins   ">
        {/* Img wrapper */}
        <div className="relative h-64 w-full">
      <Image
        src={MenuImg}
        
        className=" w-full h-full object-cover"
        alt="Menu card image"
        />
        </div>
      {/* wrap */}
      <div className="p-6 flex flex-col items-center  ">
        <h2 className="text-primary text-2xl font-serif font-medium tracking-wide text-center">
          Classic Smash Burger
        </h2>
        <p className="text-secondary/80 text-sm  text-center leading-relaxed mb-6 max-w-[80%] mx-auto ">
          Double patty with cheddar, caramelized onions & secret sauce
        </p>
        <div className=" flex justify-between items-center w-full px-2">
          <span className="text-gold text-lg font-semibold ">₹249 </span>
          <MenuBtn />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
