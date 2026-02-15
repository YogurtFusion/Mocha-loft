import React from "react";

const Hero = () => {
  return (
    <section className="">
      {/* warp */}
      <div className="p-7 flex flex-col justify-center items-center gap-2 ">
        {/* Delivery & Dine-in Available */}
        <div className=" bg-[#F5DEB280]/50 flex justify-center items-center gap-2.5 w-fit mx-auto py-1 px-4 rounded-full  ">
          <span className="w-[6px] h-[6px] aspect-square rounded-full bg-[#D99726] "></span>
          <span className="font-poppins text-[8px] text-amber-50" >Delivery & Dine-in Available</span>
        </div>

        {/* text */}
        <div className=" text-center flex flex-col gap-4 ">
          <h1 className="font-playfair font-semibold text-primary text-4xl">
            Comfort Food
          </h1>
          <p className="text-secondary max-w-xs leading-relaxed tracking-wider ">
            From crispy burgers to aromatic biryani, experience multi-cuisine
            favorites crafted with love at Mocha Loft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
