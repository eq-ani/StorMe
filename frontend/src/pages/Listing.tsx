import React, { useState } from "react";
import Navbar from "../components/Navbar";

const placeholderSchools = [
  "UMass",
  "Boston University",
  "Northeastern University",
  "Harvard",
  "MIT",
];

const Listing: React.FC = () => {
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [tempControlled, setTempControlled] = useState(false);
  const [allergenFree, setAllergenFree] = useState(false);
  const [bigAccess, setBigAccess] = useState(false);
  const [accessible, setAccessible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !price ||
      !width ||
      !length ||
      !addressLine1 ||
      !city ||
      !stateProvince ||
      !postalCode ||
      !country ||
      !imageUrl ||
      !school
    ) {
      setError("Please fill in all fields");
      return;
    }

    const formattedSize = `${length}x${width} ft`;

    try {
      const response = await fetch("http://localhost:5000/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price,
          size: formattedSize,
          address_line_1: addressLine1,
          city,
          state_province: stateProvince,
          postal_code: postalCode,
          country,
          image_url: imageUrl,
          school,
          temp_control: tempControlled,
          allergen_free: allergenFree,
          big_access: bigAccess,
          accessibility: accessible,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Listing submitted successfully!");
        setPrice("");
        setWidth("");
        setLength("");
        setAddressLine1("");
        setCity("");
        setStateProvince("");
        setPostalCode("");
        setCountry("");
        setImageUrl("");
        setSchool("");
        setTempControlled(false);
        setAllergenFree(false);
        setBigAccess(false);
        setAccessible(false);
      } else {
        setError(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Fetch error: ", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <div className="mt-16 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="text-2xl font-bold text-center mb-4">
            Listing Application
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Pricing (dollars per month)
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label
                  htmlFor="length"
                  className="block text-sm font-medium text-gray-700"
                >
                  Approximate Length (ft)
                </label>
                <input
                  type="number"
                  id="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="width"
                  className="block text-sm font-medium text-gray-700"
                >
                  Approximate Width (ft)
                </label>
                <input
                  type="number"
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="addressLine1"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="flex w-full gap-2">
              <div className="w-2/3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="w-1/3">
                <label
                  htmlFor="stateProvince"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="stateProvince"
                  value={stateProvince}
                  onChange={(e) => setStateProvince(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2 w-full">
              <div className="w-2/5">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="w-3/5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Property Image (URL format)
              </label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-gray-700"
              >
                School
              </label>
              <select
                id="school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              >
                <option value="">Select a school...</option>
                {placeholderSchools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={tempControlled}
                  onChange={() => setTempControlled(!tempControlled)}
                  className="mr-2"
                />
                Temperature Controlled
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={allergenFree}
                  onChange={() => setAllergenFree(!allergenFree)}
                  className="mr-2"
                />
                Allergen Free
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={bigAccess}
                  onChange={() => setBigAccess(!bigAccess)}
                  className="mr-2"
                />
                Large Item Access
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={accessible}
                  onChange={() => setAccessible(!accessible)}
                  className="mr-2"
                />
                Accessible
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2 bg-[#881c1c] text-white font-bold rounded-md hover:bg-[#991c1c] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Listing;
