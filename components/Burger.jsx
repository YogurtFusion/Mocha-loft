import React from "react";
import MenuCard from "./UI/MenuCard";
import BeefBurger from "@/public/beef-burger.png";
import FriedChicken from "@/public/fried-chicken.png";
import VeggieBurger from "@/public/Veggie-Burger.png";
import Hamburger from "@/public/hamburger.png";

const BurgerData = [
  {
    title: "Classic Beef Burger",
    image: BeefBurger,
    desc: "Juicy beef patty with melted cheddar, crispy lettuce, tomato and pickles on a toasted brioche bun",
    price: "₹249",
    id: "item_1",
  },
  {
    title: "Chicken Burger",
    image: FriedChicken,
    desc: "Crispy fried chicken with coleslaw and pickles on a toasted brioche bun",
    price: "₹229",
    id: "item_2",
  },
  {
    title: "Veggie Burger",
    image: VeggieBurger,
    desc: "Gourmet plant-based patty with fresh avocado, caramelized onions and vibrant greens on a dark sesame bun",
    price: "₹199",
    id: "item_3",
  },
  {
    title: "Ham Burger",
    image: Hamburger,
    desc: "Juicy ham patty with melted cheese, mustard, pickles and fresh lettuce on a toasted bun",
    price: "₹269",
    id: "item_4",
  },
];

const Burger = () => {
  return (
    <div className="">
      <MenuCard cardData={BurgerData} />
    </div>
  );
};

export default Burger;
