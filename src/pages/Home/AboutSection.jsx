import React from "react";

const AboutSection = () => {
  return (
    <>
    <div className="pb-[92px]"></div>
    <section className="w-[1280px] h-[636px] top-[1873px] left-[80px] right-[80px] mx-auto flex flex-col items-center text-center">
      {/* Title Section */}
      <div className="w-[733px] h-[132px] top-[1873px] left-[354px] space-y-4">
        <h1 className="w-[733px] h-[39px] text-[55px] font-extrabold leading-[62px] tracking-[-1px] text-[#262626] font-redhat">
          The Most Rental Listings
        </h1>
        
        <p className="w-[733px] h-[56px] pt-[37px] text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] text-center font-redhat">
          Choose from over 1 million apartments, houses, condos, and townhomes for rent.
        </p>
      </div>
      <div className="pb-[56px] "></div>
      {/* Image Section with Overlay Content */}
      <div className="relative w-[1280px] h-[448px] rounded-[45px] mt-8 overflow-hidden">
        {/* Background Image */}
        <img 
          src={house1}
          alt="Modern House" 
          className="w-[1280px] h-[448px] top-[2061px] left-[80px] object-cover rounded-[45px] bg-[linear-gradient(0deg,_#D9D9D9,_#D9D9D9),_linear-gradient(260.98deg,_#000000_-14.78%,_rgba(104,_104,_104,_0)_75.7%),_linear-gradient(257.92deg,_#000000_-6.04%,_rgba(0,_0,_0,_0)_69.56%)]"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-[45px] flex items-center justify-end pr-10">
          {/* Overlay Content Positioned to the Right */}
          <div className="w-[547px] top-[122px] bottom-[211px] left-[653px] right-[80px] text-white text-left">
            <h2 className="text-[55px] pb-[37px] font-extrabold leading-[62px] tracking-[-1px] font-redhat">
              Renting Made Simple
            </h2>
            <p className="text-[20px] pb-[40px] font-normal leading-[25px] tracking-[0px] opacity-75 font-redhat">
              Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
            </p>
            <button className="mt-6 w-[169px] h-[49px] rounded-full border border-white py-[12px] px-[32px] text-[16px] font-normal leading-[24px] tracking-[0px] text-center text-white font-redhat hover:bg-white hover:text-black transition">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </section>
    <div className="pb-[132px]"></div>
    <section className="w-[1440px] h-[869px] top-[2641px] left-[3px] right-[3px] bg-[rgba(114,185,68,0.08)] mx-auto flex flex-col items-center text-center">
      {/* Title Section */}
        <h1 className="w-[919px] h-[39px] pt-[49px] pb-[44px] top-[49px] left-[257px] right-[264px] bottom-[781px] text-[55px] font-extrabold text-center leading-[62px] tracking-[-1px] text-[#262626] font-redhat">
          Discover Homeownership on yourself
        </h1>
        <p className="w-[1006px] h-[96px] top-[132px] left-[216px] right-[218px] bottom-[641px] pt-[44px] pb-[75px] text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] text-center font-redhat">
          Renting is great, but maybe you're thinking about buying a home instead. We want you to find the right place. That's why our sister site, Homes.com, is designed to help you find your dream home, even if you're a first time buyer.
        </p>
    

      {/* Image Section with Overlay Content */}
      <div className="relative w-[1280px] h-[448px] top-[75px] rounded-[45px] mt-8 overflow-hidden">
        {/* Background Image */}
        <img 
          src={house2}
          alt="Modern House" 
          className="w-[1280px] rounded-[45px] top-[303px] left-[80px] bottom-[118px] right-[80px] object-cover scale-x-[-1]"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent rounded-[45px] flex items-center justify-start pl-16">
          {/* Overlay Content Positioned to the Left*/}
          <div className="max-w-[547px] top-[93px] left-[93px] right-[640px] bottom-[140px] text-white text-left space-y-7">
            <h2 className="text-[55px] font-extrabold leading-[62px] bottom-[176px] tracking-[-1px] font-redhat">
              Explore Your Options
            </h2>
            <p className="top-[37px] text-[20px] font-normal leading-[25px] pb-[9px] tracking-[0px] opacity-75 font-redhat">
              Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.
            </p>
            <button className="mt-6 w-[189px] h-[49px] rounded-full border border-white py-[12px] px-[32px] text-[16px] font-normal leading-[24px] tracking-[0px] text-center text-white font-redhat hover:bg-white hover:text-black transition">
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;