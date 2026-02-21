import React from "react";
const Cards = ({ title, svg, desc }) => {
  return (
    <div className="bg-gold/15 border border-gold/60  rounded-3xl  max-w-sm h-full mx-auto w-full  ">
      {/* wrap */}
      <div className="flex flex-col items-start   gap-4 p-8 md:p-10   ">
        <div className="bg-gold/10 text-gold  p-4 rounded-2xl  ">{svg}</div>
        <div className="space-y-2 mt-2">
          <h2 className="text-primary text-2xl tracking-tight font-playfair font-semibold">
            {title}
          </h2>
          <p className="text-secondary/80 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
