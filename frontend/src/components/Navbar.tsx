import { Search, Home } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation(); // get current location

  const isLandingPage = location.pathname === "/";

  return (
    <nav
      className={`absolute top-0 left-0 w-full h-24 z-10 flex items-center justify-between py-4 px-8 text-white transition-all duration-400 ease-in-out ${
        isLandingPage
          ? "bg-transparent hover:bg-black hover:bg-opacity-15"
          : "bg-[#881c1c] bg-opacity-15"
      }`}
    >
      <div className="flex gap-6">
        <div className="h-24 flex items-center">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/assets/images/hackathon-logo.svg"
              alt="StorMe Logo"
              className="h-12 w-auto"
            />
            <p className="text-3xl text-[#881c1c]">StorMe</p>
          </a>
        </div>

        {!isLandingPage && (
          <>
            <button
              onClick={() => {
                window.location.href = "/search";
              }}
            >
              <Search size={32} color="#881c1c" />
            </button>
            <button
              onClick={() => {
                window.location.href = "/listing";
              }}
            >
              <Home size={32} color="#881c1c" />
            </button>
          </>
        )}
      </div>

      <div className="hidden md:block">
        <button
          className="bg-[#881c1c] text-white px-4 py-2 rounded-lg transition-all duration-400 ease-in-out hover:bg-white hover:text-[#881c1c]"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Signup/Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
