import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Property } from "../types/Property";
import { people } from "../types/people";  // Updated to import People type

const PropertyPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [people, setPeople] = useState<people[]>([]);  // Updated to use People state
  const { id } = useParams<{ id: string }>();  // Get id from the URL
  const propertyId = id ? parseInt(id, 10) : null;  // Handle undefined id

  useEffect(() => {
    // Fetch properties and people data from the backend
    const fetchProperties = async () => {
      const propertyResponse = await fetch("http://localhost:5000/api/properties");
      const propertyData = await propertyResponse.json();
      setProperties(propertyData);
    };

    const fetchPeople = async () => {
      const peopleResponse = await fetch("http://localhost:5000/api/people");
      const peopleData = await peopleResponse.json();
      setPeople(peopleData);
    };

    fetchProperties();
    fetchPeople();
  }, []);

  const prop = properties.find((p) => p.id === propertyId);
  if (!prop) {
    return <div>Property not found</div>;
  }

  // Find the person linked to the property by matching user_id in Property with id in People
  const person = people.find((p) => p.id === prop.user_id);
  if (!person) {
    return <div>Person information not found</div>;
  }

  // Randomly pick a review if available
  //const randomReview = person.reviews[Math.floor(Math.random() * person.reviews.length)];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content container */}
      <div className="flex justify-center py-24 flex-grow">
        <div className="flex w-3/4 bg-white rounded-lg shadow-md h-auto">
          {/* Left side - Property Info */}
          <div className="w-2/3 p-8">
            <h1 className="text-3xl font-bold mb-4">{prop.address_line_1}</h1>
            <div className="border-4 border-gray-700 p-2 mb-4">
              <img
                src= {prop.image_url}
                alt="property"
                className="w-full h-96 object-contain mb-4"
              />
            </div>
            <p className="text-lg mb-2">Price: ${prop.price}</p>
            <p className="text-lg mb-2">Space: {prop.size}</p>
          </div>

          {/* Right side - People Info and Stats/Review */}
          <div className="w-1/3 p-8">
            {/* People Section */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6 mt-12">
              <div className="flex flex-col items-center pt-6">
                <img
                  src={person.profile_picture_url}
                  alt={person.first_name + " " + person.last_name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{person.first_name + " " + person.last_name}</h2>
                <p className="text-sm text-gray-600 mb-4">{person.email}</p>
                <p className="text-sm text-gray-600">{person.phone_number}</p>
              </div>
            </div>

            {/* People Stats Section */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600">Rented {prop.stays_count} times</p>
                {/* Star Rating next to the number of rents */}
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={index < 5 ? "#FFD700" : "#D3D3D3"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">- Anonymous Reviewer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
