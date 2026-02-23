import React from "react";
import MenuCard from "./UI/MenuCard";
import Margerita from "@/public/margerita.png";
i

const BiryaniData = [
  {
    title: "Chicken Biryani",
    image: MenuImg,
    desc: "Aromatic basmati rice with golden saffron, tender chicken, fried onions and fresh coriander",
    price: "₹299",
    id: "item_13",
  },
  {
    title: "Mutton Biryani",
    image: MenuImg,
    desc: "Slow-cooked tender mutton with golden saffron basmati, caramelized onions and fresh mint",
    price: "₹379",
    id: "item_14",
  },
  {
    title: "Veg Biryani",
    image: MenuImg,
    desc: "Fluffy saffron basmati with colorful mixed vegetables, cashews and fresh coriander",
    price: "₹229",
    id: "item_15",
  },
  {
    title: "Prawn Biryani",
    image: MenuImg,
    desc: "Large juicy prawns with golden saffron rice, caramelized onions and fresh coriander",
    price: "₹399",
    id: "item_16",
  },
];
const Biryani = () => {
  return <div>
    <MenuCard
    cardData={BiryaniData}
    />
  </div>;
};

export default Biryani;
