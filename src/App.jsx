// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}
