import React from "react";
import MenuLinks from "./UI/MenuLinks";

const Menu = () => {
  return (
    <section className="mb-12">
      {/* wrap */}
      <div className="flex flex-col  justify-center items-center p-6 gap-6">

      <h2 className="text-primary text-3xl leading-normal tracking-[-0.6px] font-semibold font-playfair text-center ">
        The Menu
      </h2>
      <MenuLinks/>
      </div>
    </section>
  );
};

export default Menu;
