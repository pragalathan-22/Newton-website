// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import productsData from "./data/data.json";   // ← import your JSON once
import { Navigation } from "./components/navigation";

export default function App() {
  return (
    <Router>
      {/* The nav bar is always visible */}
      <Navigation/>

      {/* Routed pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Matches /products/info-kiosk, /products/touch-table, etc. */}
        <Route
          path="/products/:prodId"
          element={<ProductDetails data={productsData.Products} />}
        />

        {/* Fallback (optional) */}
        <Route path="*" element={<h2 style={{ padding: 40 }}>404 – Page not found</h2>} />
      </Routes>
    </Router>
  );
}
