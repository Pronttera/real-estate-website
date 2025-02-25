import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const rentals = [
  {
    id: 1,
    name: "Presidential Towers",
    address: "555 W Madison St, Chicago, IL 60661",
    price: "$1,475 - $6,080",
    beds: "Studio - 2 Beds",
    image: "./src/assets/images/property.png",
  },
  {
    id: 2,
    name: "Shoreham And Tides",
    address: "400 E South Water, Chicago, IL 60601",
    price: "$2,009 - $5,357",
    beds: "Studio - 2 Beds",
    image: "./src/assets/images/property2.png",
  },
  {
    id: 3,
    name: "Elevate",
    address: "930 W Altgeld St, Chicago, IL 60614",
    price: "$1,890 - $13,200",
    beds: "Studio - 3 Beds",
    image: "./src/assets/images/property3.png",
  },
  {
    id: 4,
    name: "Lakeshore East",
    address: "345 E Wacker Dr, Chicago, IL 60601",
    price: "$1,600 - $8,500",
    beds: "Studio - 2 Beds",
    image: "./src/assets/images/property4.png",
  },
];

export default function WorksSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      direction === "left"
        ? (current.scrollLeft -= scrollAmount)
        : (current.scrollLeft += scrollAmount);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg h-[550px] mt-16 font-redhat relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 px-10">
        <h2 className="text-3xl font-bold">Explore Rentals in Chicago, IL</h2>
        <a href="#" className="text-gray-300 hover:text-white transition">
          View All
        </a>
      </div>

      {/* Scrollable Section */}
      <div className="relative h-full pb-40">
        {/* Scrollable Rental Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth px-10 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="min-w-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={rental.image}
                alt={rental.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{rental.name}</h3>
                <p className="text-sm text-gray-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {rental.address}
                </p>
                <p className="text-sm text-gray-300 mt-1">{rental.beds}</p>
                <p className="text-lg font-bold mt-2">{rental.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Buttons*/}
      <div className="absolute bottom-10 right-12 flex space-x-3">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
}
