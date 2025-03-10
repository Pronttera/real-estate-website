import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import property from "../../assets/images/property.png";
import property2 from "../../assets/images/property2.png";
import property3 from "../../assets/images/property3.png";
import property4 from "../../assets/images/property4.png";
import property5 from "../../assets/images/property5.png";
import property6 from "../../assets/images/property6.png";
import property7 from "../../assets/images/property7.png";


const rentals = [
  {
    id: 1,
    name: "Presidential Towers",
    address: "555 W Madison St, Chicago, IL 60661",
    price: "$1,475 - $6,080",
    beds: "Studio - 2 Beds",
    image: property,
  },
  {
    id: 2,
    name: "Shoreham And Tides",
    address: "400 E South Water, Chicago, IL 60601",
    price: "$2,009 - $5,357",
    beds: "Studio - 2 Beds",
    image: property2,
  },
  {
    id: 3,
    name: "Elevate",
    address: "930 W Altgeld St, Chicago, IL 60614",
    price: "$1,890 - $13,200",
    beds: "Studio - 3 Beds",
    image:property3,
  },
  {
    id: 4,
    name: "Lakeshore East",
    address: "345 E Wacker Dr, Chicago, IL 60601",
    price: "$1,600 - $8,500",
    beds: "Studio - 2 Beds",
    image: property4,
  },
  {
    id: 5,
    name: "The Sinclair",
    address: "1201 N LaSalle Dr, Chicago, IL 60610",
    price: "$2,000 - $7,500",
    beds: "Studio - 3 Beds",
    image: property5,
  },
  {
    id: 6,
    name: "Grand Plaza",
    address: "540 N State St, Chicago, IL 60654",
    price: "$1,900 - $9,200",
    beds: "Studio - 3 Beds",
    image: property6,
  },
  {
    id: 7,
    name: "The Parker Fulton Market",
    address: "730 W Couch Pl, Chicago, IL 60661",
    price: "$2,150 - $6,800",
    beds: "Studio - 2 Beds",
    image: property7,
  }
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
    <div className="bg-gray-900 text-white p-8 rounded-lg h-full mt-15 font-redhat relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 px-10">
        <h2 className="text-5xl mt-8 font-bold">Explore Rentals in Chicago, IL</h2>
        <button className="text-gray-300 hover:text-white transition flex items-center cursor-pointer mt-[130px] md:mt-0">
         View All <ChevronRight className="ml-2" />
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="relative h-full pb-40">
        {/* Scrollable Rental Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className=" min-w-full md:min-w-[300px] relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 snap-center"
            >
              <img
                src={rental.image}
                alt={rental.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h3 className="font-semibold text-lg text-white">{rental.name}</h3>
                <p className="text-sm text-gray-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {rental.address}
                </p>
                <p className="text-sm text-gray-300 mt-1">{rental.beds}</p>
                <p className="text-lg font-bold mt-2 text-white">{rental.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Buttons*/}
      <div className="absolute bottom-20 right-12 flex space-x-3">
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
