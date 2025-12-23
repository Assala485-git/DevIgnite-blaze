import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import React from "react";


// Components
import Navbar from "./components/navbar.jsx";
import AllDepartments from "./pages/AllDepartments.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import DevelopmentPosts from "./pages/DevelopmentPosts.jsx";
import DepartmentPostDetails from "./pages/DepartmentPostDetails.jsx";
import GeneralPosts from "./pages/GeneralPosts.jsx";
import PostDetails from "./pages/PostDetails.jsx";
//import Login from "./pages/login.jsx";
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
      {/* EVERYTHING INSIDE DashboardLayout */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <LandingPage />
          </>
        }
       />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route element={<DashboardLayout />}>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/department/:dep" element={<DevelopmentPosts />} />
        <Route path="/department/:dep/:id" element={<DepartmentPostDetails />} />
        <Route path="/general" element={<GeneralPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
       <Route path="/profile" element={<Profile />} />
      </Route>
</Routes>
  );
}

export default App;
