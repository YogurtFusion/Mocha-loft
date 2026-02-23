import React from "react";
import burgure from "@/public/menu-img.png";
import MenuCard from "./UI/MenuCard";
import Margerita from "@/public/margerita.png";
import Lasagna from "@/public/lasagna.png";
const BestSellersData = [
  {
    title: "Classic Burger",
    image: burgure,
    desc: "Double patty with cheddar, caramelized onions & secret sauce",
    price: "₹249",
    id: "item_1",
    category: "best_sellers",
  },
  {
    title: "Margherita Pizza",
    image: Margerita,
    desc: "Classic tomato base with fresh mozzarella & basil leaves",
    price: "₹299",
    id: "item_2",
    category: "best_sellers",
  },

  {
    title: "Lasagna",
    image: Lasagna,
    desc: "Layers of pasta, rich bolognese, bechamel sauce and melted cheese baked to perfection",
    price: "₹319",
    id: "item_12",
  },
];
const BestSellers = () => {
  return (
    <div className="">
      <MenuCard cardData={BestSellersData} />
    </div>
  );
};

export default BestSellers;
