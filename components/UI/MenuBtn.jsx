import React from "react";
import OrderIcon from "./OrderIcon";

const MenuBtn = () => {
  return (
    <a href="" className="text-secondary bg-card/80  border border-primary rounded-full py-2 px-4 ">
      <button className="flex gap-2 stroke-primary text-primary">
        <OrderIcon/>
        <span>order now</span>
        </button>
    </a>
  );
};

export default MenuBtn