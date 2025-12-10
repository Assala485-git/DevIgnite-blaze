import { Routes, Route } from "react-router-dom";
import DevelopmentPosts from "./pages/DevelopmentPosts.jsx";
import GeneralPosts from "./pages/GeneralPosts.jsx";

function App() {
  return (
    <Routes>
      <Route path="/development" element={<DevelopmentPosts />} />
      <Route path="/general" element={<GeneralPosts />} />
    </Routes>
  );
}

export default App;
