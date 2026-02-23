import React from "react";
import burgure from "@/public/menu-img.png";
import MenuCard from "./MenuCard";
import Margerita from "@/public/margerita.png"
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

  // Burger (2 more)
  {
    id: 21,
    image: burgure,
    title: "burgure",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, temporibus!",
    price: "234",
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
