import React from "react";
import { Search } from "lucide-react";

const Landing: React.FC = () => {
  return (
    <div
      className="h-screen w-screen flex items-center pl-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/images/moving-boxes.jpg)`,
      }}
    >
      <div className="flex flex-col items-start gap-6 bg-opacity-80 p-6 rounded-md">
        <p className="text-6xl">Your Space, Your Storage</p>
        <button
          className="flex items-center justify-center p-4 bg-white text-black text-xl rounded-md w-2/5 gap-2"
          onClick={() => {
            window.location.href = "/search";
          }}
        >
          <Search size={24} />
          Rent a Space
        </button>
      </div>
    </div>
  );
};

export default Landing;
