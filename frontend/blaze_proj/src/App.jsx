import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import AllDepartments from "./pages/AllDepartments.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import DevelopmentPosts from "./pages/DevelopmentPosts.jsx";
import DepartmentPostDetails from "./pages/DepartmentPostDetails.jsx";
import GeneralPosts from "./pages/GeneralPosts.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <Routes>
      {/* EVERYTHING INSIDE DashboardLayout (so Outlet context works) */}
      <Route element={<DashboardLayout />}>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/department/:dep" element={<DevelopmentPosts />} />
        <Route path="/department/:dep/:id" element={<DepartmentPostDetails />} />
        <Route path="/general" element={<GeneralPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
