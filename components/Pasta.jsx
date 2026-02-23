import React from "react";
import MenuCard from "./UI/MenuCard";
import Spaghetti from "@/public/spaghetti.png";
import Fettuccine from "@/public/fettuccine.png";
import Penne from "@/public/penne.png";
import Lasagna from "@/public/lasagna.png";


const PastaData = [
  {
    title: "Spaghetti Bolognese",
    image: Spaghetti,
    desc: "Rich meaty sauce with fresh parmesan shavings and basil on classic spaghetti",
    price: "₹279",
    id: "item_9",
  },
  {
    title: "Creamy Alfredo",
    image: Fettuccine,
    desc: "Fettuccine in thick white cream sauce with parmesan and cracked black pepper",
    price: "₹259",
    id: "item_10",
  },
  {
    title: "Penne Arrabbiata",
    image: Penne,
    desc: "Penne in glossy spicy tomato sauce with fresh chili flakes and basil leaves",
    price: "₹239",
    id: "item_11",
  },
  {
    title: "Lasagna",
    image: Lasagna,
    desc: "Layers of pasta, rich bolognese, bechamel sauce and melted cheese baked to perfection",
    price: "₹319",
    id: "item_12",
  },
];
const Pasta = () => {
  return <div>

    <MenuCard
    cardData={PastaData}
    />
  </div>;
};

export default Pasta;
