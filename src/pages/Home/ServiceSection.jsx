import React from "react";
import house3 from "../../assets/images/Modern_house_3.png";

const ServiceSection = () => {
  return (
    <section className="max-w-[1280px] w-full mx-auto flex flex-col items-center px-4 py-10">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row gap-[55px] items-center text-center lg:text-left w-full">
        <div className="max-w-[624px] w-full">
          <h1 className="text-[#262626] text-3xl lg:text-[55px] font-extrabold leading-[1.2] font-redhat tracking-[-1px]">
            The Perfect Place to Manage Your Property
          </h1>
          
          <p className="text-[#717D7D] text-[18px] lg:text-[24px] font-normal font-redhat leading-[1.6] opacity-75 mt-4">
            Work with the best suite of property management tools on the market.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full max-w-[624px] flex justify-end">
          <img src={house3} alt="Modern House" className="w-full h-auto object-cover rounded-[20px]" />
        </div>
      </div>
      {/* Two Card Sections */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 w-full max-w-[1280px]">
        {/* Advertise Your Rental */}
        <div className="flex flex-col items-center text-center bg-[#72B944] rounded-[20px] p-8 pt-[84px] w-full max-w-[624px] h-[354px]">
          <h2 className="max-w-[441px] text-white text-[28px] lg:text-[35px] font-extrabold font-redhat leading-[1.4]">
            Advertise Your Rental
          </h2>
          <p className="max-w-[441px] text-white text-opacity-80 text-[16px] font-normal font-redhat leading-[1.6] mt-4">
            Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform. <br /> List Your Property
          </p>
          <button className="mt-6 px-6 py-3 w-[167px] h-[49px] bg-white text-[#262626] text-[16px] font-normal rounded-full border hover:border-white hover:bg-[#72B944] hover:text-white transition">
            Find Out More
          </button>
        </div>
        {/* Lease 100% Online */}
        <div className="flex flex-col items-center text-center bg-[#262626] rounded-[20px] p-8 pt-[96px] w-full max-w-[624px] h-[354px]">
          <h2 className="max-w-[413px] text-white text-[28px] lg:text-[35px] font-extrabold font-redhat leading-[1.4]">
            Lease 100% Online
          </h2>
          <p className="max-w-[413px] text-white text-opacity-80 text-[16px] font-normal font-redhat leading-[1.6] pb-2 mt-4">
            Accept applications, process rent payments online, and sign digital leases all powered on a single platform.
          </p>
          <button className="mt-6 px-6 py-3 w-[167px] h-[49px] bg-white text-[#262626] text-[16px] font-normal rounded-full border hover:border-white hover:bg-[#262626] hover:text-white transition">
            Find Out More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
