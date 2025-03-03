import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobeAmericas,
  FaPhone,
  FaEnvelope,
  FaPinterest,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative md:w-full md:h-screen bg-white flex flex-col font-redhat">
      {/* 🌟 Top Bar */}
      <div className="bg-[#72B944] text-white flex flex-wrap justify-between items-center w-full text-xs md:text-sm p-2 md:p-4">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 px-4">
          <span className="flex items-center">
            <FaPhone className="mr-2 transform rotate-90" />
            9856425721
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" />
            support@zenithestates.com
          </span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 px-4">
          <a href="#" className="flex items-center hover:underline">
            <FaGlobeAmericas className="mr-2" />
            English
          </a>
          <a href="#" className="hover:underline">Sign Up/Sign In</a>
          <div className="flex space-x-3 mt-1">
            <a href="https://www.instagram.com"><FaInstagram /></a>
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://www.twitter.com"><FaTwitter /></a>
            <a href="https://www.pinterest.com"><FaPinterest /></a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row min-w-screen min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-center bg-[#f4f7ec] w-full md:w-1/2 p-4 md:pt-0 md:pb-20 text-center md:text-left">
        <div className="md:relative md:top-[-20%] md:left-[8%]">
          <div className="text-3xl md:text-4xl font-extrabold text-gray-900 ">
          Zenith <span className="text-[#72B944]">Estates</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mt-20">
            Discover Your <br />
            New <span className="text-[#72B944]">Home</span>
          </h1>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Helping 100 million renters find their perfect fit.
          </p>
        </div>  
        </div>

        {/* Right Section */}
        <div className="relative flex items-center w-full md:w-1/2 min-h-screen">
          <img
            src="./src/assets/images/buildings.png"
            alt="City Skyline"
            className="w-screen h-screen"
          />
          <div className="absolute top-4 right-10 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="text-black text-xs md:text-sm font-medium hover:underline">
      Manage Rentals
    </a>
    <button className="bg-[#72B944] text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition text-sm">
      Add Property
    </button>
    <button
    className=" text-black transition text-lg"
    onClick={() => setIsSidebarOpen(true)}
  >
    <FaBars />
  </button>
        </div>
        </div>
      </div>

      {/*Sidebar */}
      <div
        className={`fixed top-0 right-0 w-60 h-full bg-transparent shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="p-6 bg-white bg-opacity-70 ">
          <a href="#" className="block py-2 text-lg text-gray-800 hover:text-[#72B944] mt-20">
            About Us
          </a>
          <a href="#" className="block py-2 text-lg text-gray-800 hover:text-[#72B944]">
            Services
          </a>
          <a href="#" className="block py-2 text-lg text-gray-800 hover:text-[#72B944]">
            Work
          </a>
          <a href="#" className="block py-2 text-lg text-gray-800 hover:text-[#72B944]">
            Contact
          </a>
          <a href="#" className="block py-2 text-lg text-gray-800 hover:text-[#72B944]">
            More
          </a>
        </div>
      </div>

      {/* Card Section */}
      <div className="relative md:absolute top-0  md:top-[60%] left-[50%] md:left-[55%] transform -translate-x-1/2 w-[90%] md:w-[100%]  md:h-[18%] flex  z-20 mt-6 md:mt-0">

        <div className="flex flex-col md:flex-row items-center gap-9 px-6 md:px-10 py-6 bg-white shadow-lg rounded-xl border-2 border-[#72B944] w-full md:w-[70%] bg-opacity-90">
          <div className="flex flex-col items-center w-full md:w-auto ">
            <select className="text-xl font-bold text-gray-700 bw-full md:w-auto ">
              <option selected disabled>Current location</option>
              <option>Los Angeles</option>
              <option>New York</option>
            </select>
            <p className="text-xs text-gray-500 mt-1 ml-[-60px]">Enter your location</p>
          </div>
          <div className="border-l-2 border-gray-300 h-10 hidden md:block"></div>
          <div className="flex flex-col items-center w-full md:w-auto ">
            <select className="text-xl font-bold text-gray-700 w-full md:w-auto border border-white">
              <option selected disabled>Type</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
            <p className="text-xs text-gray-500 mt-1 ml-[-30px]">Enter house type</p>
          </div>
          <div className="border-l-2 border-gray-300 h-10 hidden md:block"></div>
          <div className="flex flex-col items-center w-full md:w-auto">
            <select className="text-xl font-bold text-gray-700 w-full md:w-auto border border-white">
              <option selected disabled>Price</option>
              <option>$1000-$2000</option>
              <option>$2000-$3000</option>
            </select>
            <p className="text-xs text-gray-500 mt-1 ml-[-20px]">Enter the price you want</p>
          </div>
          <div className="border-l-2 border-gray-300 h-10 hidden md:block"></div>
          <button className="bg-[#72B944] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition flex items-center w-full md:w-auto">
            Explore Now <FaChevronRight className="ml-1 text-2xl" />
          </button>
        </div>
      </div>

      {/* Hero Stats */}
<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-center px-6 md:absolute md:top-[84%] md:left-[3%]">
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
    <div className="flex flex-col">
      <p className="text-3xl font-extrabold">20+</p>
      <p className="text-gray-600 text-sm">Years of experience</p>
    </div>
    <div>
      <p className="text-3xl font-extrabold">800+</p>
      <p className="text-gray-600 text-sm">Property Ready</p>
    </div>
    <div>
      <p className="text-3xl font-extrabold">1450+</p>
      <p className="text-gray-600 text-sm">Happy Customers</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
