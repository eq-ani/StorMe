import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Property } from "../types/Property";
import { people } from "../types/people"; // Updated to import People type
import {
  Accessibility,
  ArrowLeft,
  Calendar,
  Mail,
  MapPin,
  PawPrint,
  Ruler,
  Snowflake,
  Sofa,
  Star,
} from "lucide-react";

const PropertyPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]); // needed to access information about the current property
  const [people, setPeople] = useState<people[]>([]); // needed to access information about the person hosting the current property
  const { id } = useParams<{ id: string }>();
  const propertyId = id ? parseInt(id, 10) : null;
  const [isModalOpen, setIsModalOpen] = useState(false); // for the booking form

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const fetchProperties = async () => {
      const propertyResponse = await fetch(
        "http://localhost:5000/api/properties"
      );
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

  const person = people.find((p) => p.id === prop.user_id);
  if (!person) {
    return <div>Person information not found</div>;
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <Navbar />

      {/* main container */}
      <div className="w-4/5 flex flex-col justify-center pt-32 flex-grow gap-6">
        {/* property address */}
        <div className="flex gap-4 items-center">
          <Link to="/search" className="881c1c">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <MapPin></MapPin>
          <div className="text-2xl font-bold">{prop.address_line_1}</div>
        </div>
        <div className="flex gap-6">
          {/* left container */}
          <div className="w-2/3 flex flex-col gap-6">
            {/* property image */}
            <div className="aspect-[16/9] overflow-hidden rounded-xl border bg-muted">
              <img
                src={prop.image_url}
                alt="property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* property details */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <Calendar className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-lg">${prop.price}/month</p>
                </div>
              </div>

              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <Ruler className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Space</p>
                  <p className="text-lg">{prop.size}</p>
                </div>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className="w-1/3 flex flex-col gap-6 self-start">
            {/* upper div */}
            <div className="rounded-lg shadow-md space-y-6 p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={person.profile_picture_url}
                  alt={person.first_name + " " + person.last_name}
                  className="h-24 w-auto rounded-full object-cover"
                />
                <div>
                  <div className="text-xl">
                    {person.first_name + " " + person.last_name}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <div className="text-sm">{person.email}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-[gray] rounded-full px-3 py-1 text-sm text-white flex items-center">
                    {"Rented " + prop.stays_count + " times"}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#881c1c]" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-sm italic text-muted-foreground">
                  {prop.review_comm}
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  - Anonymous Reviewer
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="bg-[#881c1c] text-white rounded-md px-4 py-2 hover:bg-[#701515] focus:outline-none"
              >
                Request to Rent
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                    <h2 className="text-lg font-semibold mb-4">
                      Request to Rent
                    </h2>
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                      <input
                        type="date"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                      />
                    </label>
                    <label className="block text-sm font-medium text-gray-700 mt-4">
                      End Date
                      <input
                        type="date"
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                      />
                    </label>
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={toggleModal}
                        className="text-gray-500 mr-4"
                      >
                        Cancel
                      </button>
                      <button className="bg-[#881c1c] text-white rounded-md px-4 py-2">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* more property details */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <Snowflake className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Temperature Control</p>
                  <p className="text-lg">{prop.temp_control ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <PawPrint className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Allergen Free</p>
                  <p className="text-lg">{prop.allergen_free ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <Sofa className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Large Space</p>
                  <p className="text-lg">{prop.big_access ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="flex items-center bg-white rounded-lg shadow-md py-4 flex-1">
                <Accessibility className="h-5 w-5 text-[#881c1c] mx-4" />
                <div>
                  <p className="text-sm text-gray-500">Accessible</p>
                  <p className="text-lg">{prop.accessibility ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
