import React from "react";
import MessageCloud from "./MessageCloud";

const FooterBtn = () => {
  return (
    <a
    
      href="https://wa.me/919471090662?text=👋%20Hi!"
      target="_blank"
      rel="noopener noreferrer"
      className=" footer-btn-custom px-6 py-3  inline-flex items-center gap-2 w-fit font-medium font-poppins"
    >
   
      <div className="stroke-secondary">
        <MessageCloud />
      </div>
      <span>Chat on WhatsApp</span>
   
    </a>
  );
};

export default FooterBtn;
