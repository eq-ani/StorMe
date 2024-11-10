import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-24 z-10 flex items-center justify-between hover:bg-black hover:bg-opacity-15 transition-all duration-400 ease-in-out py-4 px-8  text-white">
      <div className="h-24 flex items-center gap-4">
        <a href="/" className="">
          <img
            src="/assets/images/hackathon-logo.svg"
            alt="StorMe Logo"
            className="h-12 w-auto"
          />
        </a>
        <p className="text-xl text-[#212721]">StorMe</p>
      </div>

      <div className="hidden md:block">
        <button
          className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
