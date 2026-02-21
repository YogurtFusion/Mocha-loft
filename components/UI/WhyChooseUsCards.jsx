import React from "react";
import LeafOutLine from "./LeafOutline";
const Cards = ({title, svg, desc}) => {
  return (
    <div className="bg-gold/15 border border-gold/60  rounded-3xl  max-w-sm h-full mx-auto w-full ">
      {/* wrap */}
      <div className="flex flex-col items-start   gap-4 p-8 md:p-10   ">
        <div className="bg-gold/10 text-gold  p-4 rounded-2xl  ">
          <LeafOutLine />
        </div>
        <div className="space-y-2 mt-2">

        <h2 className="text-primary text-2xl tracking-tight font-playfair font-semibold">
          Fresh Ingredients
        </h2>
        <p className="text-secondary/80 text-sm leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
