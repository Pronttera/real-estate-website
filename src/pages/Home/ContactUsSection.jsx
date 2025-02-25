import React from 'react';

const ContactUsSection = () => { // Function Component  

    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] w-full bg-gray-200 px-20 py-20 ">
            <div className="relative w-5/6 container w-full mx-auto max-h-[500px] text-center rounded-[40px] ml-10 mr-10 mb-20 mt-20 px-39 py-60 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('./src/assets/images/contactus_background.png')",
                    backgroundSize: "contain",  // or "cover", "auto", "100% 100%", etc.
                    backgroundPosition: "center center", // or "left top", "center", etc.
                    backgroundRepeat: "no-repeat"
                }}>

                <div >
                    <h1 className="text-white text-6xl text-center font-bold font-redhat mb-3 ml-250  mr-120 mt-[-90px]  ">
                        Search over 1 million listings
                    </h1>
                    <p className="text-white text-lg mb-6 ml-[460px] mr-[420px] font-redhat">
                        Search over 1 million listings including apartments, houses, condos, and townhomes available for rent.
                        You’ll find your next home in any style you prefer.
                    </p>

                    {/* Input and Button */}
                    <div className="flex items-center justify-center gap-2">
                        <input
                            type="text"
                            className="bg-white/30 backdrop-blur-md text-white ml-10 mt-5 px-4 py-3 w-2/6 rounded-md placeholder-gray-300 outline-none"
                            placeholder="Enter Keyword"
                        />
                        <button className="px-6 py-3 rounded-md bg-white  mt-5 text-black font-bold transition duration-300 hover:bg-gray-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection; // Exporting the function component