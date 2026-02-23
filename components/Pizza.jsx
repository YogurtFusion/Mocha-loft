import React from "react";
import Margerita from "@/public/margerita.png";
import Gourmetpizza from "@/public/gourmet-pizza.png";
import BBQchicken from "@/public/BBQ-chicken.png";
import Pepperoni from "@/public/pepperoni.png";
import MenuCard from "./UI/MenuCard";

const pizzaData = [
  {
    title: "Margherita Pizza",
    image: Margerita,
    desc: "Classic pizza with fresh mozzarella, vibrant tomato sauce and fresh basil leaves",
    price: "₹299",
    id: "item_5",
  },
  {
    title: "Pepperoni Pizza",
    image: Pepperoni,
    desc: "Crispy curled pepperoni cups, bubbling mozzarella and golden crust on a rustic base",
    price: "₹349",
    id: "item_6",
  },
  {
    title: "BBQ Chicken Pizza",
    image: BBQchicken,
    desc: "Pulled chicken, red onions, melted cheese and a glossy BBQ sauce drizzle on a golden crust",
    price: "₹369",
    id: "item_7",
  },
  {
    title: "Gourmet Pizza",
    image: Gourmetpizza,
    desc: "Truffle oil, wild mushrooms, burrata and arugula on a charcoal thin crust",
    price: "₹399",
    id: "item_8",
  },
];

const PizzaPage = () => {
  return (
    <div className="">
      <MenuCard cardData={pizzaData} />
    </div>
  );
};

export default PizzaPage;
