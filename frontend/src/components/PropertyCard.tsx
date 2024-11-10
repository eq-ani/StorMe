import React from "react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  address: string;
  price: number;
  space: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="block"> {/* Wrap with Link to make it clickable */}
      <div className="rounded-lg overflow-hidden shadow-md bg-[#881c1c] text-white flex flex-col h-full w-full">
        <img
          src="/assets/images/hackathon-logo.svg"
          alt="placeholder"
          className="h-48 w-full object-cover"
        />

        <div className="p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-2">{property.address}</h2>
          <p className="text-sm">${property.price}/month</p>
          <div className="text-sm">{property.space}</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

