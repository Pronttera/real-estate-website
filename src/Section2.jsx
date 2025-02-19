import React from "react";
import house from "./assets/Modern house 2.png";

const HeroSection = () => {
  return (
    <section className="w-[1440px] h-[869px] bg-[rgba(114,185,68,0.08)] mx-auto flex flex-col items-center text-center">
      {/* Title Section */}
      <br />
      <br />
      <div className="space-y-4 max-w-[919px] mx-auto">
        <h1 className="w-[1006px] h-[39px] top-[2690px] left-[260px] text-[55px] font-extrabold text-center leading-[62px] tracking-[-1px] text-[#262626] font-redhat">
          Discover Homeownership on yourself
        </h1>
        <br />
        <p className="w-[1006px] h-[96px] top-[2773px] left-[219px] text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] text-center font-redhat">
          Renting is great, but maybe you're thinking about buying a home instead. We want you to find the right place. That's why our sister site, Homes.com, is designed to help you find your dream home, even if you're a first time buyer.
        </p>
      </div>
      <br />
      <br />

      {/* Image Section with Overlay Content */}
      <div className="relative w-[1280px] h-[448px] rounded-[45px] mt-8 overflow-hidden">
        {/* Background Image */}
        <img 
          src={house} 
          alt="Modern House" 
          className="w-[1280px] rounded-[45px] object-cover scale-x-[-1]"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent rounded-[45px] flex items-center justify-start pl-16">
          {/* Overlay Content Positioned to the Left*/}
          <div className="max-w-[547px] text-white text-left space-y-7">
            <h2 className="text-[55px] font-extrabold leading-[62px] tracking-[-1px] font-redhat">
              Explore Your Options
            </h2>
            <p className="text-[20px] font-normal leading-[25px] tracking-[0px] opacity-75 font-redhat">
              Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.
            </p>
            <button className="mt-6 w-[189px] h-[49px] rounded-full border border-white py-[12px] px-[32px] text-[16px] font-normal leading-[24px] tracking-[0px] text-center text-white font-redhat hover:bg-white hover:text-black transition">
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
