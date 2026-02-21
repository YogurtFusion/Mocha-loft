import React from "react";
import Cards from "./UI/WhyChooseUsCards";

const WhyChooseUs = () =>{
    return(
<section className=" py-16 px-6 md:px-12 ">
    {/* wrap */}
    <div className=" flex flex-col items-center justify-center gap-12 max-w-6xl mx-auto w-full ">

    <h2 className="text-3xl text-primary text-center font-playfair border-b border-primary mx-auto pb-3 w-fit ">Why Choose Us</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
        <Cards/>
    </div>
    </div>
</section>
    )
}

export default WhyChooseUs