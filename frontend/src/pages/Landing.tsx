import React from "react";
import Navbar from "../components/Navbar";
import { Search, HousePlus } from "lucide-react";

const Landing: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-screen flex items-center pl-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/images/moving-boxes.jpg)`,
        }}
      >
        <div className="flex flex-col items-start gap-6 bg-opacity-80 p-6 rounded-md">
          <p className="text-6xl text-[#212721]">Your Space, Your Storage</p>
          <div className="flex w-4/5 gap-4">
            <button
              className="flex items-center justify-center p-4 bg-[#212721] text-white text-xl rounded-md w-full gap-2"
              onClick={() => {
                window.location.href = "/search";
              }}
            >
              <Search size={24} />
              Rent a Space
            </button>
            <button
              className="flex items-center justify-center p-4 bg-[#212721] text-white text-xl rounded-md w-full gap-2"
              onClick={() => {
                window.location.href = "/Listing";
              }}
            >
              <HousePlus size={24} />
              List a Space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
