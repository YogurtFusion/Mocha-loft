"use client";
import React, { useState } from "react";
import MenuLinks from "./UI/MenuLinks";
import MenuCard from "./UI/MenuCard";
import BestSellers from "./Bestsellers";
import Pasta from "./Pasta";
import Pizza from "./Pizza";
import Burger from "./Burger";
import  Biryani from "./Biryani";
const Menu = () => {
  const [activeTab, SetActiveTab] = useState("Best Sellers");
  const renderCategory = () => {
    switch (activeTab) {
      case "Pizza":
        return <Pizza />;
      case "Pasta":
        return <Pasta />;
      case "Burger":
        return <Burger />;
      case "Biryani":
        return <Biryani />;
      default:
        return <BestSellers />;
    }
  };
  return (
    <section id="menu" className="mb-12">
      {/* wrap */}
      <div className="flex flex-col  justify-center items-center p-6 gap-6">
        <h2 className="text-primary text-3xl  tracking-tight font-semibold font-playfair text-center border-b border-primary mx-auto w-fit mb-3 ">
          The Menu
        </h2>
        <MenuLinks activeTab={activeTab} SetActiveTab={SetActiveTab} />
        {/* <MenuCard /> */}
       {renderCategory()}
        {/* <Pizza />
        <Pasta />
        <Burger />
        <Biryani /> */}
      </div>
    </section>
  );
};

export default Menu;
