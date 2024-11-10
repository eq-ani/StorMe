import { prototype } from "events";
import React from "react";
import { Link } from "react-router-dom";
import { Property } from "../types/Property";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-md bg-[#881c1c] text-white flex flex-col h-full w-full">
        <img
          src={property.image_url}
          alt="placeholder"
          className="h-48 w-full object-cover"
        />

        <div className="p-4 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2">
              {property.address_line_1}
            </h2>
            <h3 className="bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white flex items-center">
              {property.school}
            </h3>
          </div>
          <p className="text-sm">${property.price}/month</p>
          <div className="text-sm">{property.size}</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
