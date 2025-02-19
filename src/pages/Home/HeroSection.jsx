import React from "react";
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaGlobeAmericas, FaPhone, FaEnvelope, FaPinterest  ,FaChevronDown, FaChevronRight} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-[200vh] h-[100vh] bg-white">
      {/* Top Bar */}
      <div className="bg-[#72B944] text-white flex justify-between items-center px-8 py-2 text-sm">
        <div className="flex space-x-4  mr-auto pl-6">
          <span className="flex items-center">
          <FaPhone className="mr-2 transform rotate-90" />
            (888) 111-222
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" />
            support@apartmentz.com
          </span>
        </div>
        <div className="flex space-x-6 ml-auto pr-8">
          <a href="#" className="flex items-center hover:underline">
            <FaGlobeAmericas className="mr-2" />
            English
          </a>
          <a href="#" className="hover:underline ">Sign Up/Sign In</a>
          <div className="flex space-x-3 mt-1">
           <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterest /></a> 
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex w-full h-full">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center px-12 bg-[#f4f7ec] relative z-10">
          <h1 className="text-7xl font-bold text-gray-900 leading-tight">
            Discover Your <br />
            New<span className="text-[#72B944]"> Home</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Helping 100 million renters find their perfect fit.
          </p>

          {/* Stats */}
          <div className="flex space-x-20 mt-40">
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-gray-600">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">800+</p>
              <p className="text-gray-600">Property Ready</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1450+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 relative">
          <img src="./src/assets/buildings.png" alt="City Skyline" className="w-full h-full object-cover" />
          <button className="absolute top-5 right-24 bg-[#72B944] text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition">
            Add A Property
          </button>
          <button className="absolute top-8 right-14 text-black text-2xl">
            <FaBars />
          </button>
          <div className="absolute top-9 left-60 right-30 text-black text-1xl">
            <a href="#" className="hover:underline">Manage Rentals</a>
          </div>
        </div>

        {/* Card Section  */}
        <div className="absolute top-[320px] left-[45%] transform -translate-x-1/2 w-[984px] h-[100px] flex justify-center z-20">
          <div className="flex flex-row items-center gap-8 px-10 py-6 bg-white shadow-lg rounded-xl border-2 border-[#72B944]">
          <div className="flex flex-col items-center">
      <div className="flex items-center">
        <select className="text-xl font-semibold text-gray-700">
        <option selected disabled>Current location</option>
        <option>Los Angeles</option>
        <option>New York</option>
        </select>
      </div>
      <p className="text-xs text-gray-500 mt-1">Enter your location</p>
    </div>
          <div className="border-l-1 border-gray-300 h-10 mx-4"></div> 
          <div className="flex flex-col items-center">
      <div className="flex items-center">
        <select className="text-xl font-semibold text-gray-700">
          <option selected disabled> Type</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>
      <p className="text-xs text-gray-500 mt-1">Enter house type</p>
    </div>
            <div className="border-l-2 border-gray-300 h-10 mx-4"></div>
            <div className="flex flex-col items-center">
      <div className="flex items-center">
        <select className="text-xl font-semibold text-gray-700">
          <option selected disabled>Price</option>
          <option>$1000-$2000</option>
          <option>$2000-$3000</option>
        </select>
      </div>
      <p className="text-xs text-gray-500 mt-1">Enter the price you want</p>
    </div>
            <div className="border-l-2 border-gray-300 h-10 mx-4"></div> 
            <button className="bg-[#72B944] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition flex items-center">
              Explore Now  <FaChevronRight className="ml-1 text-xl" />
            </button>
          </div>
        </div>
      </div>

  {/* ApartmentZ Branding  */}
  <div className="absolute top-16 left-12 text-3xl font-bold z-30">
        Apartment<span className="text-[#72B944]">Z</span>
      </div>      
    </div>
  );
};

export default HeroSection;