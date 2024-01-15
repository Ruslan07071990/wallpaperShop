import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";
import FavoritsPage from "./Pages/FavoritsPage/FavoritsPage";
import HomePage from "./Pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorits" element={<FavoritsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
export default AppRoutes;
