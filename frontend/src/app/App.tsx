import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Signup from "../pages/Signup";
import Property from "../pages/Property"; // Import the Property page
import Login from "../pages/Login";
import Listing from "../pages/Listing";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
