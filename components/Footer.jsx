import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import FooterBtn from "./UI/FooterBtn";
import { Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1B120E] border-t border-[#352C27] ">
      
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Footer head */}
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-col gap-3">
              {/* Logo */}
              <div className=" flex  items-center gap-4">
                <div className="relative rounded-full size-12 md:size-15 overflow-hidden  border-white/20">
                  <Image
                    src={Logo}
                    alt="Logo image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <span className="text-primary text-2xl font-playfair font-semibold ">
                  Mocha Loft
                </span>
              </div>
              <p className="text-secondary/80 leading-relaxed max-w-xs w-full font-poppins">
                Your favorite multi-cuisine cloud kitchen, delivering comfort
                food with love and quality you can taste.
              </p>
            </div>
            <FooterBtn />
          </div>

          {/* Quick Info */}
          <div className="flex flex-col  gap-6">
            <h2 className="text-2xl  text-primary font-playfair font-semibold">
              Quick Info
            </h2>
            <div className="flex items-start flex-col  gap-3 font-poppins ">
              {/* Item 1 */}
              <div className=" flex gap-3 items-start ">
                <div className="text-primary  mt-1 ">
                  <Clock />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base text-primary font-medium">
                    Operating Hours
                  </span>
                  <span className="text-secondary/80 text-sm max-w-3xs">
                    11 AM - 11 PM (All days)
                  </span>
                </div>
              </div>

              {/* Item 2 */}

              <div className="  flex gap-3 items-start ">
                <div className="text-primary mt-1">
                  <MapPin />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base text-primary font-medium">
                    Delivery Area
                  </span>
                  <span className="text-secondary/80 leading-relaxed text-sm max-w-3xs">
                    Within 5 km radius • Free delivery above ₹299
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact us */}
          <div className=" flex flex-col gap-6">
            <h2 className="text-primary text-2xl font-playfair font-semibold">
              Connect With Us
            </h2>
            <p className="text-secondary/80 text-sm leading-relaxed max-w-xs ">
              Have questions? We're just a message away. Reach out on WhatsApp
              for quick assistance.
            </p>
            <div className=" bg-white/5 border border-white/10 p-5 text-[#EBE5DA] text-sm leading-relaxed font-poppins font-medium rounded-xl ">
              <span className="text-gold font-semibold ">Pro tip: </span>Save
              our number to get exclusive offers and updates!
            </div>
          </div> 
        </div>
     

      <div className=" flex flex-col items-center justify-center text-secondary/80 text-xs leading-relaxed  gap-4 p-6 font-poppins border-t border-white/5 ">
        <p>© {new Date().getFullYear()} Mocha Loft. All rights reserved.</p>
        <p>
          Crafted with 
          <span role="img" aria-label="love">
            💛
          </span>
          {""}
           for food lovers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
