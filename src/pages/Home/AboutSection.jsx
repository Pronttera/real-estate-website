import React from "react";
import Modernhouse1 from "../../assets/images/Modern_house_1.png";
import Modernhouse2 from "../../assets/images/Modern_house_2.png";

const AboutSection = () => {
  return (
    <>
      <div className="pb-[100px]"></div>
      <section className="w-full px-4 md:px-8 lg:px-0 mx-auto flex flex-col items-center text-center">
        {/* Title Section */}
        <div className="max-w-2xl ">
          <h1 className="text-3xl md:text-[55px] font-extrabold text-[#262626] font-redhat">
            The Most Rental Listings
          </h1>
          <p className="text-lg md:text-[22px] text-[#717D7D] pt-[30px] opacity-75 font-redhat">
            Choose from over 1 million apartments, houses, condos, and townhomes for rent.
          </p>
        </div>
        <div className="pb-14"></div>
        {/* Image Section with Overlay Content */}
        <div className="relative w-full max-w-[1280px] h-[448px] rounded-[45px] overflow-hidden">
          <img 
            src={Modernhouse1} 
            alt="Modern_house_1" 
            className="w-full h-full object-cover rounded-[45px]"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-[45px] flex items-center justify-end p-6 sm:p-10 md:p-14">
            {/* Overlay Content Positioned to the Right */}
            <div className="max-w-[551px] text-white text-left">
              <h2 className="text-3xl md:text-[55px] font-extrabold font-redhat">
                Renting Made Simple
              </h2>
              <p className="mt-4 text-lg md:text-[18px] pt-[10px] pb-[15px] opacity-75 font-redhat">
                Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
              </p>
              <button className="mt-6 w-auto px-6 py-3 rounded-full border border-white text-white font-redhat hover:bg-white hover:text-black transition">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-[100px]"></div>
      <section className="w-full bg-[rgba(114,185,68,0.08)] flex flex-col items-center text-center px-4 md:px-8 py-16">
        {/* Title Section */}
        <h1 className="max-w-full text-3xl md:text-[55px] font-extrabold text-[#262626] font-redhat">
          Discover Homeownership on Yourself
        </h1>
        <p className="max-w-[1006px] mt-6 pt-[10px] text-lg md:text-[22px] text-[#717D7D] opacity-75 font-redhat">
        Renting is great, but if you're thinking about buying, Homes.com can help you find your dream home—even as a first-time buyer!
        </p>
        <div className="relative w-full max-w-[1280px] h-[448px] mt-10 overflow-hidden">
          <img 
            src={Modernhouse2} 
            alt="Modern_house_2" 
            className="w-full h-full object-cover rounded-[45px] scale-x-[-1]"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent rounded-[45px] flex items-center justify-start p-6 sm:p-10 md:p-14">
            {/* Overlay Content Positioned to the Left */}
            <div className="max-w-[554px] text-white text-left">
              <h2 className="text-3xl md:text-[55px] font-extrabold font-redhat">
                Explore Your Options
              </h2>
              <p className="mt-4 text-base md:text-[18px] pt-[15px] pb-[10px] opacity-75 font-redhat">
              Becoming a homeowner is a big step! Homes.com offers accurate listings, an agent directory, and tools to help you find the perfect home.
              </p>
              <button className="mt-6 w-auto px-6 py-3 rounded-full border border-white text-white font-redhat hover:bg-white hover:text-black transition">
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