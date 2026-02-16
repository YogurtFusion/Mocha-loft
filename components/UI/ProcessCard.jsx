import React from "react";

const ProcessCard = ({ title, desc, num, svg }) => {
  return (
    <div className="relative bg-gold/15 h-fit rounded-2xl border-[0.5px] border-gold  hover:border-gold-hover transition-colors  ">
      {/* Wrap */}
      <div className=" flex justify-center items-center flex-col gap-5 p-10 pt-12  text-center">
        {/* num */}
        <div className="absolute  -top-5 left-1/2 -translate-x-1/2 flex justify-center items-center  bg-overlay-black rounded-full border border-gold text-gold w-10 h-10 text-center shadow-md text-base ">
          {num}
        </div>

        <div className="bg-gold/30  text-gold p-4  rounded-full  ">{svg} </div>

        <h2 className="text-primary text-2xl leading-relaxed font-playfair font-semibold ">
          {title}
        </h2>
        <p className="text-secondary text-sm font-poppins  font-semibold max-w-[200px] ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
