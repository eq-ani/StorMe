import React from "react";
import Navbar from "../components/Navbar";

const Search: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="absolute z-20 top-8 left-1/2 transform -translate-x-1/2 text-white w-1/4">
        <input
          type="text"
          placeholder="Find your institution.."
          className="w-full py-2 px-4 rounded-full bg-stone-200 text-black text-sm"
        />
      </div>
    </div>
  );
};

export default Search;
