import React from "react";
import { Link } from "react-router-dom";
import { Property } from "../types/Property";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.property_id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-[#881c1c] via-[#770b0b] to-[#701515] bg-opacity-90 text-white flex flex-col h-full w-full transform transition-transform duration-300 hover:-translate-y-2">
        <img
          src={property.image_url}
          alt="placeholder"
          className="h-48 w-full object-cover"
        />

        <div className="p-4 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-xl text-white font-bold">
              {property.address_line_1}
            </div>
            <h3 className="bg-[#212721] rounded-full px-3 text-sm text-white flex items-center">
              {property.school}
            </h3>
          </div>
          <p className="text-sm">Pricing: ${property.price}/month</p>
          <div className="text-sm">Storage Space: {property.size}</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
