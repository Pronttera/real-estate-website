import React from 'react';
import background from "../../assets/images/contactus_background.png";

const ContactUsSection = () => {   

    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] w-full bg-gray-200 px-20 py-20 ">
            <div
                className="relative w-5/6 max-w-full mx-auto max-h-[500px] 
                            text-center rounded-[40px] 
                            px-20 py-40 lg:px-16 lg:py-32 md:px-12 md:py-24 sm:px-8 sm:py-16
                            bg-cover bg-no-repeat"
                            style={{
                                backgroundImage:`url(${background})`,
                                backgroundSize: "cover", 
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                            }}
            >

                <div >
                    <h1 className="text-white text-5xl text-center font-bold font-redhat mb-2 ml-250  mr-120 mt-[-20px]  ">
                        Search over 1 million listings
                    </h1>
                    <p className="text-white text-center text-lg mb-6 font-redhat w-3/5 lg:w-4/5 md:w-5/6 sm:w-full mx-auto">
                
                        Search over 1 million listings including apartments, houses, condos, and townhomes available for rent.
                        You’ll find your next home in any style you prefer.
                    </p>

                    {/* Input and Button */}
                    <div className="flex items-center justify-center gap-2">
                        <input
                            type="text"
                            className="bg-white/30 backdrop-blur-md text-white  font-redhat ml-10 mt-5 px-4 py-3 w-2/6 rounded-md placeholder-gray-300 outline-none"
                            placeholder="Enter Keyword"
                        />
                        <button className="px-6 py-3 rounded-md bg-white  font-redhat mt-5 text-black font-bold transition duration-300 hover:bg-gray-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;