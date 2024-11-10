import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// Example property data (replace with actual data fetching)
const fakeProperties = [
  {
    id: 1,
    address: "1234 Storage St.",
    price: 100,
    space: "10x10 feet",
    description: "A spacious storage unit perfect for all your needs.",
  },
  {
    id: 2,
    address: "5678 Rental Rd.",
    price: 150,
    space: "15x15 feet",
    description: "Ideal storage with 24/7 access and security.",
  },
];

const Property: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get id from the URL
  const propertyId = id ? parseInt(id, 10) : null; // Handle undefined id

  const property = fakeProperties.find((p) => p.id === propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-grow mt-16">
        {/* Property Details */}
        <div className="w-3/4 p-8">
          <h1 className="text-3xl font-bold mb-4">{property.address}</h1>
          <div className="border-4 border-gray-700 p-2 mb-4">
            <img
              src="/assets/images/hackathon-logo.svg"
              alt="property"
              className="w-full h-96 object-contain mb-4"
            />
          </div>
          <p className="text-lg mb-2">Price: ${property.price}</p>
          <p className="text-lg mb-2">Space: {property.space}</p>
          <p className="text-base text-gray-700">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Property;
