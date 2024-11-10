import React from "react";

interface PropertyCardProps {
  property: {
    id: number;
    address_line_1: string;
    price: number;
    size: string;
    image_url: string;
    // Add other fields from host_db as needed
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-[#881c1c] text-white flex flex-col h-full w-full">
      <img
        src={property.image_url}
        alt="placeholder"
        className="h-48 w-auto object-cover"
      />

      <div className="p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-2">{property.address_line_1}</h2>

        <p className="text-sm">${property.price}/month</p>

        <div className="text-sm">{property.size}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
