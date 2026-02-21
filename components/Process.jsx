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
    svg: <OrderIcon />,
  }, 
  {
    num: 3,
    title: "Confirm on WhatsApp",
    desc: "Finalize your order through a quick WhatsApp cha",
    svg:<MessageCloud />,
  },
];
const Process = () => {
  return (
    <section className="mb-12">
      {/* wrap */}
      <div className="p-12">
        <h1 className="text-center text-primary text-3xl/tight  font-playfair font-semibold border-b border-primary mx-auto w-fit mb-10 ">
          How It Works
        </h1>
        {/* cards */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3   gap-10 lg:max-w-6xl mx-auto w-full  ">
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
