import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import Navbar from "../entities/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
