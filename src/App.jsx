import React from "react";
import { Routes, Route } from "react-router-dom"; // Use only Routes and Route
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import Searchbar from "./components/Searchbar";
import ProfilePage from "./components/ProfilePage";
import BuyTicket from "./components/BuyTicket";
import Seating from "./components/Seating";
import Book_Summary from "./components/Book_Summary.jsx";


const App = () => {
  return (
    <Routes> {/* No need for Router here */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Searchbar" element={<Searchbar />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/BuyTicket" element={<BuyTicket />} />
      <Route path="/Seating" element={<Seating />} />
      <Route path="/Book_Summary" element={<Book_Summary/>} />
      
    </Routes>
  );
};

export default App;
