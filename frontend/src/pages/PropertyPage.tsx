import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Property } from "../types/Property";
import { people } from "../types/people"; // Updated to import People type
import {
  Accessibility,
  AlertTriangle,
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
  const [properties, setProperties] = useState<Property[]>([]);
  const [people, setPeople] = useState<people[]>([]); // Updated to use People state
  const { id } = useParams<{ id: string }>(); // Get id from the URL
  const propertyId = id ? parseInt(id, 10) : null; // Handle undefined id

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
            </div>
            {/* property details */}
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

          {/* <div className="flex w-full">
            <div className="w-1/5">
              <img
                src={person.profile_picture_url}
                alt={person.first_name + " " + person.last_name}
                className="w-full h-auto rounded-full object-cover mb-4"
              />
            </div>
            <div className="flex flex-col">
              <Mail className="h-4 w-4" />

              <div className="flex">
                <p>{person.email}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
