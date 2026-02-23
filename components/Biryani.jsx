import React from "react";
import MenuCard from "./UI/MenuCard";
import Chickenbiryani from "@/public/chicken-biryani.png";
import Muttonbiryani from "@/public/mutton-biryani.png";
import Prawnbiryani from "@/public/prawn-biryani.png";
import VegBiryani from "@/public/Veg-Biryani.png";


const BiryaniData = [
  {
    title: "Chicken Biryani",
    image: Chickenbiryani,
    desc: "Aromatic basmati rice with golden saffron, tender chicken, fried onions and fresh coriander",
    price: "₹299",
    id: "item_13",
  },
  {
    title: "Mutton Biryani",
    image: Muttonbiryani,
    desc: "Slow-cooked tender mutton with golden saffron basmati, caramelized onions and fresh mint",
    price: "₹379",
    id: "item_14",
  },
  {
    title: "Veg Biryani",
    image: VegBiryani,
    desc: "Fluffy saffron basmati with colorful mixed vegetables, cashews and fresh coriander",
    price: "₹229",
    id: "item_15",
  },
  {
    title: "Prawn Biryani",
    image: Prawnbiryani,
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
