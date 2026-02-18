import React from "react";
import OrderIcon from "./OrderIcon";

const MenuBtn = () => {
  return (
    <a
      href="https://wa.me/919471090662?text=👋%20Hi!"
      target="_blank"
      rel="noopener noreferrer"
      className="button-primary-custom py-2 px-4  flex items-center gap-2 w-fit "
    >
      <OrderIcon />
      <span className="font-medium">Order</span>
    </a>
  );
};

export default MenuBtn;
