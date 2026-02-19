import React from "react";
import MenuImg from "@/public/menu-img.png";
import Image from "next/image";
import MenuBtn from "./MenuBtn";
import { Key } from "lucide-react";
const cardValue = [
  {
    title: "burger",
    image: MenuImg,
    desc: "Double patty with cheddar, caramelized onions & secret sauce",
    price: "₹249",
    id: "item_1"
  },
  {
    title: "burger",
    image: MenuImg,
    desc: "Double patty with cheddar, caramelized onions & secret sauce",
    price: "₹249",
    id: "item_2"
  },
  {
    title: "burger",
    image: MenuImg,
    desc: "Double patty with cheddar, caramelized onions & secret sauce",
    price: "₹249",
    id: "item_3"
  },
  {
    title: "burger",
    image: MenuImg,
    desc: "Double patty with cheddar, caramelized onions & secret sauce",
    price: "₹249",
    id: "item_4"
  },
 
]
const MenuCard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8 mt-12">
      {cardValue.map((item) =>(
        <div className="group bg-card h-fit border border-primary/20 rounded-[2rem] overflow-hidden  font-poppins transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] " key={item.id}>

                {/* Img wrapper */}
        <div  className="relative h-64 w-full" >
      <Image
        src={item.image}
        
        className=" w-full h-full object-cover transition-transform duration-300  group-hover:scale-105  "
        alt="Menu card image"
        />
        </div>
      {/* wrap */}
      <div className="p-6 flex flex-col items-center  ">
        <h2 className="text-primary text-2xl font-serif font-medium tracking-wide text-center">
         {item.title}
        </h2>
        <p className="text-secondary/80 text-sm  text-center leading-relaxed mb-6 max-w-[80%] mx-auto ">
        {item.desc}
            </p>
        <div className=" flex justify-between items-center w-full px-2">
          <span className="text-gold text-lg font-semibold ">{item.price} </span>
          <MenuBtn/>
        </div>
        </div>
      </div>
      ))}

    </div>
  );
};

export default MenuCard;
