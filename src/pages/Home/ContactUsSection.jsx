import React from "react";
import background from "../../assets/images/contactus_background.png";

const ContactUsSection = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] w-full bg-gray-200 px-4 py-12">
            <div
                className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto rounded-[30px] text-center px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-18 lg:px-18 lg:py-22 xl:px-24 xl:py-28 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-redhat mb-3">
                        Search over 1 million listings
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center mb-6 font-redhat w-full sm:w-4/5 md:w-3/5">
                        Search over 1 million listings including apartments, houses, condos, and townhomes available for rent.
                        You’ll find your next home in any style you prefer.
                    </p>
                    {/* Input and Button - Responsive Flex Adjustments */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                        <input
                            type="text"
                            className="bg-white/30 backdrop-blur-md text-white font-redhat px-4 py-4 w-full sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-md placeholder-gray-300 outline-none"
                            placeholder="Enter Keyword"
                        />
                        <button className="px-6 py-3 w-full sm:w-auto rounded-md bg-white font-redhat text-black font-bold transition duration-300 hover:bg-gray-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;