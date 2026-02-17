import React from "react";
import ProcessCard from "./UI/ProcessCard";
import BrowseIcon from "./UI/BrowseIcon";
import MessageCloud from "./UI/MessageCloud";
import OrderIcon from "./UI/OrderIcon";

const cardBody = [
  {
    num: 1,
    title: "Browse Menu",
    desc: "Explore our curated selection of multi-cuisine favorites",
    svg: <BrowseIcon />,
  },
  {
    num: 2,
    title: "Click Order",
    desc: "Select your dishes and add them to your order",
    svg: <MessageCloud />,
  },
  {
    num: 3,
    title: "Confirm on WhatsApp",
    desc: "Finalize your order through a quick WhatsApp cha",
    svg: <OrderIcon />,
  },
];
const Process = () => {
  return (
    <section className="">
      {/* wrap */}
      <div className="">
        <h1 className="text-center text-primary text-3xl/relaxed leading-16  font-playfair ">
          How It Works
        </h1>
        {/* cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3   gap-10 max-w-6xl mx-auto w-full  ">
          {cardBody.map((item) => (
            <ProcessCard
              key={item.num}
              title={item.title}
              desc={item.desc}
              svg={item.svg}
              num={item.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
