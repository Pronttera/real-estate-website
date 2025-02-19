// import React from "react";
// import house from './assets/Modern house.png'

// const HeroSection = () => {
//   return (
//     <section className="w-[1280px] h-[636px] mx-auto border border-white flex flex-col items-center text-center py-12 px-4">
//       {/* Title Section */}
//       <div className="w-[733px] h-[132px] space-y-4">
//         <h1 className="text-[55px] font-extrabold leading-[62px] tracking-[-1px] text-[#262626] font-['Red_Hat_Display']">
//           The Most Rental Listings
//         </h1>
//         <p className="text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] font-['Red_Hat_Display']">
//           Choose from over 1 million apartments, houses, condos, and townhomes for rent.
//         </p>
//       </div>
      
//       {/* Image Section with Renting Info & CTA Button */}
//       <div 
//         className="relative w-[1280px] h-[448px] rounded-[45px] mt-8 overflow-hidden flex items-center justify-center"
//         style={{
//           background: "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(260.98deg, #000000 -14.78%, rgba(104, 104, 104, 0) 75.7%), linear-gradient(257.92deg, #000000 -6.04%, rgba(0, 0, 0, 0) 69.56%)"
//         }}
//       >
//         <img 
//           src={house}
//           alt="Modern House" 
//           className="w-full h-full object-cover rounded-[45px] absolute top-0 left-0" 
//         />
        
//         {/* Overlay Content */}
//         <div className="relative z-10 text-center text-white px-8">
//           <h2 className="text-[55px] font-extrabold leading-[62px] tracking-[-1px] font-['Red_Hat_Display']">
//             Renting Made Simple
//           </h2>
//           <p className="text-[20px] font-normal leading-[25px] tracking-[0px] opacity-75 font-['Red_Hat_Display']">
//             Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
//           </p>
//           <button 
//             className="mt-6 w-[167px] h-[49px] border border-white rounded-full py-[19px] px-[32px] text-[16px] font-normal leading-[24px] tracking-[0px] text-center hover:bg-white hover:text-black transition">
//             Find Out More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// const HeroSection = () => {
//   return (
//     <section className="w-[1280px] h-[636px] mx-auto flex flex-col items-center text-center py-12 px-4">
//       {/* Title Section */}
//       <div className="w-[733px] h-[132px] space-y-4">
//         <h1 className="text-[55px] font-extrabold leading-[62px] tracking-[-1px] text-[#262626] font-redhat">
//           The Most Rental Listings
//         </h1>
//         <p className="text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] font-redhat">
//           Choose from over 1 million apartments, houses, condos, and townhomes for rent.
//         </p>
//       </div>
      
//       {/* Image Section with Overlay Content */}
//       <div 
//         className="relative w-[1280px] h-[448px] rounded-[45px] mt-8 overflow-hidden"
//       >
//         {/* Background Image */}
//         <img src={house} alt="Modern House" className="w-[1280px] h-[448px] top-[2061px] left-[80px] object-cover rounded-[45px] bg-[linear-gradient(0deg,_#D9D9D9,_#D9D9D9),_linear-gradient(260.98deg,_#000000_-14.78%,_rgba(104,_104,_104,_0)_75.7%),_linear-gradient(257.92deg,_#000000_-6.04%,_rgba(0,_0,_0,_0)_69.56%)]" 
//         />

//         {/* Dark Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent rounded-[45px] flex items-center justify-end pr-10">
//           {/* Overlay Content Positioned to the Right */}
//           <div className="w-[547px] h-[115px] top-[2183px] left-[733px] gap-[37px]">
//             <h2 className="w-[547px] h-[39px] text-[55px] font-extrabold leading-[62px] tracking-[-1px] font-redhat text-left text-[#ffffff]">
//               Renting Made Simple
//             </h2>
//             <p className="w-[547px] h-[39px] text-[20px] font-normal leading-[25px] tracking-[0px] opacity-75 text-left font-redhat text-[#ffffff]">
//               Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
//             </p>
          
//             <button className="w-[167px] h-[49px] top-[2338px] left-[733px] rounded-[50px] border border-[#ffffff] pt-[19px] pr-[32px] pb-[19px] pl-[32px] gap-[10px] hover:bg-white hover:text-black transition">
//                 <span className="w-[103px] h-[11px] font-redhat font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-[#ffffff] hover:text-black transition">Find Out More</span>
//             </button>
//             </div>
//             </div>
        
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import house from "./assets/Modern house 1.png";

const HeroSection = () => {
  return (
    <section className="w-[1280px] h-[636px] top-[1873px] left-[80px] mx-auto flex flex-col items-center text-center">
      {/* Title Section */}
      <div className="w-[733px] h-[132px] top-[1873px] left-[354px] gap-[37px] space-y-4">
        <h1 className="w-[733px] h-[39px] text-[55px] font-extrabold leading-[62px] tracking-[-1px] text-[#262626] font-redhat">
          The Most Rental Listings
        </h1>
        <br />
        <p className="w-[733px] h-[56px] text-[24px] font-normal leading-[39.63px] tracking-[0px] opacity-75 text-[#717D7D] text-center font-redhat">
          Choose from over 1 million apartments, houses, condos, and townhomes for rent.
        </p>
      </div>
      <br />
      {/* Image Section with Overlay Content */}
      <div className="relative w-[1280px] h-[448px] rounded-[45px] mt-8 overflow-hidden">
        {/* Background Image */}
        <img 
          src={house} 
          alt="Modern House" 
          className="w-[1280px] h-[448px] top-[2061px] left-[80px] object-cover rounded-[45px] bg-[linear-gradient(0deg,_#D9D9D9,_#D9D9D9),_linear-gradient(260.98deg,_#000000_-14.78%,_rgba(104,_104,_104,_0)_75.7%),_linear-gradient(257.92deg,_#000000_-6.04%,_rgba(0,_0,_0,_0)_69.56%)]"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent rounded-[45px] flex items-center justify-end pr-10">
          {/* Overlay Content Positioned to the Right */}
          <div className="max-w-[547px] text-white text-left">
            <h2 className="text-[55px] font-extrabold leading-[62px] tracking-[-1px] font-redhat">
              Renting Made Simple
            </h2>
            <br />
            <p className="text-[20px] font-normal leading-[25px] tracking-[0px] opacity-75 font-redhat">
              Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
            </p>
            <br />
            <button className="mt-6 w-[169px] h-[49px] rounded-full border border-white py-[12px] px-[32px] text-[16px] font-normal leading-[24px] tracking-[0px] text-center text-white font-redhat hover:bg-white hover:text-black transition">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
