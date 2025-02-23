import React from "react";
import house3 from "./assets/Modern_House_3.png";

const ServiceSection = () => {
  return (
    <section className="w-[1280px] h-[717px] top-[3553px] left-[83px] pt-[43px] mx-auto flex flex-col items-center">
      {/* Text Section */}
      <div className="flex gap-8">
        <div className="w-[1280px] h-[327px] gap-[78px] flex ">
          <div className="w-[578px] h-[194px] top-[3639px] left-[83px] pt-[86px]  pb-[47px] ">
            <h1 className="w-[578px] h-[101px] text-[#262626] text-[55px] font-extrabold leading-[62px] font-redhat tracking-[-1px]">
              The Perfect Place to Manage Your Property
            </h1>
            <p className="w-[578px] h-[56px] pt-[37px] text-[#717D7D] text-[24px] font-normal font-redhat leading-[39.63px] tracking-[0px] opacity-75">
              Work with the best suite of property management tools on the market.
            </p>
          </div>
          {/* Image Section */}
          <div className="w-[624px] h-[327px] top-[3553px] left-[739px] rounded-[20px]">
            <img src={house3} alt="Modern House" className="w-full h-full object-cover rounded-[20px]" />
          </div>
        </div>
      </div>
      {/* Two Card Sections */}
      <div className="flex gap-8">
        <div className="w-[1280px] h-[354px] top-[3916px] left-[83px] mx-auto flex gap-[32px] pt-[36px]">
          {/* Advertise Your Rental */}
          <div className="w-[624px] h-[354px] bg-[#72B944] rounded-[20px] gap-[33px] flex flex-col items-center text-center">
            <div className="w-[441px] h-[104px] pt-[84px] pb-[33px]">
              <h2 className="w-[441px] h-[25px] text-white text-[35px] font-extrabold font-redhat leading-[49px] tracking-[0px]">
                Advertise Your Rental
              </h2>
              <p className="w-[441px] h-[59px] pt-[20px] text-white  text-opacity-80 text-[16px] font-normal font-redhat leading-[24px] tracking-[0px]">
                Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform. <br /> List Your Property
              </p>
            </div>
            <div className="pb-[33px]"></div>
            <button className="mt-6 w-[167px] h-[49px] gap-[10px] bg-white text-[#262626] text-[16px] font-normal leading-[24px] rounded-full border hover:border-white hover:bg-[#72B944] hover:text-white transition">
              Find Out More
            </button>
          </div>
          
          {/* Lease 100% Online */}
          <div className="w-[624px] h-[354px] bg-[#262626] rounded-[20px] gap-[33px] flex flex-col items-center text-center">
            <div className="w-[413px] h-[80px] pt-[96px] pb-[33px]">
              <h2 className="w-[413px] h-[25px] text-white text-[35px] font-extrabold font-redhat leading-[49px] tracking-[0px]">
                Lease 100% Online
              </h2>
              <p className="w-[413px] h-[35px] pt-[20px] text-white  text-opacity-80 text-[16px] font-normal font-redhat leading-[24px] tracking-[0px]">
                Accept applications, process rent payments online, and sign digital leases all powered on a single platform.
              </p>
            </div>
            <div className="pt-[33px]"></div>
            <button className=" w-[167px] h-[49px] gap-[10px] bg-white text-[#262626] text-[16px] font-normal leading-[24px] rounded-full border hover:border-white hover:bg-[#262626] hover:text-white transition">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default ServiceSection;
