import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/Property";

const fakeProperties = [
  {
    id: 1,
    address_line_1: "1234 Storage St.",
    price: 100,
    size: "10x10 feet",
    image_url: "",
    school: "UMass",
  },
  {
    id: 2,
    address_line_1: "5678 Rental Rd.",
    price: 150,
    size: "15x15 feet",
    image_url: "",
    school: "UMass",
  },
  {
    id: 3,
    address_line_1: "9876 Warehouse Ave.",
    price: 200,
    size: "20x20 feet",
    image_url: "",
    school: "Boston University",
  },
  {
    id: 4,
    address_line_1: "1010 Storage Blvd.",
    price: 120,
    size: "8x10 feet",
    image_url: "",
    school: "MIT",
  },
  {
    id: 5,
    address_line_1: "2020 Rent Dr.",
    price: 180,
    size: "12x12 feet",
    image_url: "",
    school: "MIT",
  },
  {
    id: 6,
    address_line_1: "3030 Depot Ln.",
    price: 160,
    size: "15x10 feet",
    image_url: "",
    school: "Harvard",
  },
];

const placeholderSchools = [
  "UMass",
  "Boston University",
  "Northeastern University",
  "Harvard",
  "MIT",
];

const Search: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // used for event listener to close dropdown when clicked off

  useEffect(() => {
    // fetch properties on load
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties"); // backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedSchool) {
      setFilteredProperties(
        properties.filter((property) => property.school === selectedSchool)
      );
    } else {
      setFilteredProperties(properties); // show all properties if no school is selected
    }
  }, [selectedSchool, properties]);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <div
        className="flex justify-center pt-8 z-20 relative w-1/4"
        ref={dropdownRef}
      >
        <div className="flex items-center justify-between w-full bg-stone-200 rounded-full pl-4 pr-2 py-2">
          <input
            type="text"
            placeholder="Find your institution..."
            className="bg-stone-200 text-black text-sm w-full outline-none"
            value={selectedSchool}
            readOnly
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {selectedSchool && (
            <button
              onClick={() => {
                setSelectedSchool("");
                setFilteredProperties(properties);
                setShowDropdown(false);
              }}
              className="text-sm text-gray-700 hover:text-white hover:bg-[#881c1c] rounded-full px-2"
            >
              Reset
            </button>
          )}
        </div>
        {showDropdown && (
          <div className="absolute top-full my-2 w-full bg-stone-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
            {placeholderSchools.map((school) => (
              <div
                key={school}
                onClick={() => {
                  setSelectedSchool(school);
                  setShowDropdown(false);
                }}
                className="cursor-pointer py-2 px-4 rounded-full hover:bg-stone-300 text-black text-sm m-1"
              >
                {school}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center pt-16 w-full">
        <div className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
