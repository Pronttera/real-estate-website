import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-redhat">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900">
        Renting Made Easy for Residents <br className="hidden md:block" /> and Property Managers
      </h1>
      <p className="text-gray-600 text-center mt-2 mb-8 max-w-2xl">
        Our articles, guides, and videos help you through the process, start to finish.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {/* Tips For Renters */}
        <div className="bg-[#72B944] p-6 rounded-lg text-white text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold mt-4">Tips For Renters</h2>
          <p className="mt-4 text-sm md:text-base">
            Find answers to all of your renting questions with the best renter’s guide in the galaxy.
          </p>
          <button className="mt-6 bg-white text-green-500 font-semibold px-4 py-2 rounded-full">
            Browse Articles
          </button>
        </div>

        {/* Property Manager Resources */}
        <div className="bg-gray-900 p-6 rounded-lg text-white text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold mt-4">Property Manager Resources</h2>
          <p className="mt-4 text-sm md:text-base">
            Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.
          </p>
          <button className="mt-6 bg-white text-gray-900 font-semibold px-4 py-2 rounded-full">
            Stay Informed
          </button>
        </div>

        {/* Take Us With You */}
        <div className="bg-[#72B944] p-6 rounded-lg text-white text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold mt-4">Take Us With You</h2>
          <p className="mt-4 text-sm md:text-base">
            Keep Apartments.com in the palm of your hand throughout your rental journey.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 w-full">
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-[180px]">
              <FaGooglePlay className="mr-2 text-white text-lg" />
              <div className="flex flex-col text-left">
                <span className="text-[10px]">GET IT ON</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </button>
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-[180px] mt-2">
              <FaApple className="mr-2 text-white text-lg" />
              <div className="flex flex-col text-left">
                <span className="text-[10px]">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;