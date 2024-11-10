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
    profile: {
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "(123) 456-7890", // New phone number
      numberOfRents: 20, // New number of rents
      rating: 4, // Rating out of 5
      imageUrl: "https://via.placeholder.com/150", // Example profile image URL
      reviews: [
        "Great storage unit, very secure!",
        "Convenient location, will rent again.",
        "A little small, but works for my needs."
      ], // List of reviews
    },
  },
  {
    id: 2,
    address: "5678 Rental Rd.",
    price: 150,
    space: "15x15 feet",
    profile: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "(987) 654-3210", // New phone number
      numberOfRents: 35, // New number of rents
      rating: 5, // Rating out of 5
      imageUrl: "https://via.placeholder.com/150", // Example profile image URL
      reviews: [
        "Excellent space and access, very happy!",
        "Perfect for my items, easy to use.",
        "A bit pricey but worth the security."
      ], // List of reviews
    },
  },
];

const Property: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get id from the URL
  const propertyId = id ? parseInt(id, 10) : null; // Handle undefined id

  const property = fakeProperties.find((p) => p.id === propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  // Randomly pick a review
  const randomReview = property.profile.reviews[Math.floor(Math.random() * property.profile.reviews.length)];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content container */}
      <div className="flex justify-center py-24 flex-grow">
        <div className="flex w-3/4 bg-white rounded-lg shadow-md h-auto">
          {/* Left side - Property Info */}
          <div className="w-2/3 p-8">
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
          </div>

          {/* Right side - Profile Info and Stats/Review */}
          <div className="w-1/3 p-8">
            {/* Profile Section */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6 mt-12"> {/* Added mt-12 for alignment */}
              <div className="flex flex-col items-center pt-6">
                <img
                  src={property.profile.imageUrl}
                  alt={property.profile.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{property.profile.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{property.profile.email}</p>
                <p className="text-sm text-gray-600">{property.profile.phoneNumber}</p>
              </div>
            </div>

            {/* Property Stats Section */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600">Rented {property.profile.numberOfRents} times</p>
                {/* Star Rating next to the number of rents */}
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={index < property.profile.rating ? "#FFD700" : "#D3D3D3"} // Gold for filled stars, gray for empty
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">"{randomReview}"</p> {/* Random review */}
              <p className="text-sm text-gray-600 mt-2">- Anonymous Reviewer</p> {/* Added "Anonymous Reviewer" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
