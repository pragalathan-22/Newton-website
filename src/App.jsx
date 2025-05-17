import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home"; // Put your current landing page in this

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
