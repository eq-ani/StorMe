import React, { useState, useEffect } from "react";
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
  },
  {
    id: 2,
    address_line_1: "5678 Rental Rd.",
    price: 150,
    size: "15x15 feet",
    image_url: "",
  },
  {
    id: 3,
    address_line_1: "9876 Warehouse Ave.",
    price: 200,
    size: "20x20 feet",
    image_url: "",
  },
  {
    id: 4,
    address_line_1: "1010 Storage Blvd.",
    price: 120,
    size: "8x10 feet",
    image_url: "",
  },
  {
    id: 5,
    address_line_1: "2020 Rent Dr.",
    price: 180,
    size: "12x12 feet",
    image_url: "",
  },
  {
    id: 6,
    address_line_1: "3030 Depot Ln.",
    price: 160,
    size: "15x10 feet",
    image_url: "",
  },
];

const Search: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Fetch properties from the backend when the component mounts
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties"); // Backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data); // Set the fetched properties in state
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <div className="flex justify-center pt-8 z-20 relative w-1/4">
        <input
          type="text"
          placeholder="Find your institution.."
          className="w-full py-2 px-4 rounded-full bg-stone-200 text-black text-sm"
        />
      </div>
      <div className="flex justify-center pt-16 w-full">
        <div className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
