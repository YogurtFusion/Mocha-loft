import React from "react";
import MenuLinks from "./UI/MenuLinks";
import MenuCard from "./UI/MenuCard";
import BestSellers from "./Bestsellers";

const Menu = () => {
  return (
    <section id="menu" className="mb-12">
      {/* wrap */}
      <div className="flex flex-col  justify-center items-center p-6 gap-6">
        <h2 className="text-primary text-3xl  tracking-tight font-semibold font-playfair text-center border-b border-primary mx-auto w-fit mb-3 ">
          The Menu
        </h2>
        <MenuLinks />
        {/* <MenuCard /> */}
        <BestSellers/>
      </div>
    </section>
  );
};

export default Menu;
