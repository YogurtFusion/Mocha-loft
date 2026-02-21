import React from "react";
import Cards from "./UI/WhyChooseUsCards";
import LeafOutLine from "./UI/LeafOutline";
import PackingBox from "./UI/PackingBox";
import SheildProtection from "./UI/SheildProtection";

const cardBody = [
  {
    id: 1,
    svg: <LeafOutLine />,
    title: "Fresh Ingredients",
    desc: "Farm-fresh produce and premium ingredients sourced daily",
  },
  {
    id: 2,
    svg: <SheildProtection />,
    title: "Hygiene First",
    desc: "Stringent hygiene protocols at every step of preparation",
  },
  {
    id: 3,
    svg: <PackingBox />,
    title: "Quality Packaging",
    desc: "Eco-friendly packaging that keeps your food hot & fresh",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-16 px-6 md:px-12 ">
      {/* wrap */}
      <div className=" flex flex-col items-center justify-center gap-12 max-w-6xl mx-auto w-full ">
        <h2 className="text-3xl text-primary text-center font-playfair border-b border-primary mx-auto w-fit pb-3  ">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
          {cardBody.map((item) => (
            <div
              key={item.id}
            >
              <Cards svg={item.svg} title={item.title} desc={item.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
