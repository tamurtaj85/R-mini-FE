// Importing React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all the neccessary routing pages
import Home from "./homePage/home";
import About from "./aboutPage/about";
import Products from "./productPage/products";
import Cart from "./cartPage/cart";
import Account from "./accountPage/account";
import { Auth } from "./authPage/auth";

// Importing Navigation Bar
import NavigationBar from "../components/header/navBar";

// Setting Up react router setup
export default function reactRouterSetup() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}
