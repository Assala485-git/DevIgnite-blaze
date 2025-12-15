import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import AllDepartments from "./pages/AllDepartments.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import DevelopmentPosts from "./pages/DevelopmentPosts.jsx";
import DepartmentPostDetails from "./pages/DepartmentPostDetails.jsx";
import GeneralPosts from "./pages/GeneralPosts.jsx";
import PostDetails from "./pages/PostDetails.jsx";

function App() {
  return (
    <Routes>
      {/* optional: default route */}
      <Route path="/" element={<Navigate to="/posts" replace />} />

     
      <Route element={<DashboardLayout />}>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/department/:dep" element={<DevelopmentPosts />} />
        <Route path="/department/:dep/:id" element={<DepartmentPostDetails />} />
        <Route path="/general" element={<GeneralPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
