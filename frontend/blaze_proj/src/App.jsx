import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import React, { useRef } from "react";

// Components / Pages
import Navbar from "./components/navbar.jsx";
import AllDepartments from "./pages/AllDepartments.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import DevelopmentPosts from "./pages/DevelopmentPosts.jsx";
import DepartmentPostDetails from "./pages/DepartmentPostDetails.jsx";
import GeneralPosts from "./pages/GeneralPosts.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import CreatePost from "./pages/CreatePost.jsx";

// Sections
import Hero from "./sections/hero.jsx";
import Posts from "./sections/posts.jsx";
import Departments from "./sections/departments.jsx";
import More from "./sections/more.jsx";
import Footer from "./sections/footer.jsx";
import Login from "./sections/login.jsx";
import Signup from "./sections/signup.jsx";
import Profile from "./sections/profile.jsx";


function LandingPage() {
  // Create refs for scrolling
  const postsRef = useRef(null);
  const departmentsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} postsRef={postsRef} departmentsRef={departmentsRef} />

      <section ref={postsRef}>
        <Posts />
      </section>

      <section ref={departmentsRef}>
        <Departments />
      </section>

      <section>
        <More />
      </section>

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
       <Route path="/create-post" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App;










