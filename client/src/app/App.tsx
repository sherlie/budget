import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import Navbar from "../components/navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
