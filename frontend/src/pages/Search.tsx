import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

const fakeProperties = [
  {
    id: 1,
    address: "1234 Storage St.",
    price: 100,
    space: "10x10 feet",
  },
  {
    id: 2,
    address: "5678 Rental Rd.",
    price: 150,
    space: "15x15 feet",
  },
  {
    id: 3,
    address: "9876 Warehouse Ave.",
    price: 200,
    space: "20x20 feet",
  },
  {
    id: 4,
    address: "1010 Storage Blvd.",
    price: 120,
    space: "8x10 feet",
  },
  {
    id: 5,
    address: "2020 Rent Dr.",
    price: 180,
    space: "12x12 feet",
  },
  {
    id: 6,
    address: "3030 Depot Ln.",
    price: 160,
    space: "15x10 feet",
  },
];

interface Property {
  id: number;
  address_line_1: string;
  price: number;
  size: string;
  image_url: string;
}

const Search: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]); // State for storing properties


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
    <div>
      <Navbar />

      <div className="flex justify-center pt-8 z-20 relative w-full">
        <input
          type="text"
          placeholder="Find your institution.."
          className="w-1/4 py-2 px-4 rounded-full bg-stone-200 text-black text-sm"
        />
      </div>

      <div className="flex justify-center pt-16">
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
