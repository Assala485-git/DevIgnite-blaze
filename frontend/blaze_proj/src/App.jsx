import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar.jsx";

// Pages / Sections
import Hero from "./sections/hero.jsx";
import Posts from "./sections/posts.jsx";
import Departments from "./sections/departments.jsx";
import More from "./sections/more.jsx";
import Footer from "./sections/footer.jsx";
import Login from "./sections/login.jsx";
import  Signup from "./sections/signup.jsx";
import Profile from "./sections/profile.jsx"

function LandingPage() {
  return (
    <>
      <Hero />
      <Posts />
      <Departments />
      <More />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Landing page with Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <LandingPage />
          </>
        }
      />

      {/* Login page without Navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
