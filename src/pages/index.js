// Importing React Router
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all the neccessary routing pages
import Home from "./homePage/home";
import About from "./aboutPage/about";
import Products from "./productPage/products";
import ProductsByCategory from "./productPage/productsByCategory";
import Cart from "./cartPage/cart";
import Account from "./accountPage/account";
import { Auth } from "./authPage/auth";
import { Order } from "./orderPage/order";

// Importing Navigation Bar
import NavigationBar from "../components/header/navBar";

export const AuthContext = createContext(null);
export let USER_TOKEN = " ";

// Setting Up react router setup
export function ReactRouterSetup() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (userInfo) USER_TOKEN = userInfo.USER_TOKEN;
  }, [userInfo]);

  console.log("AuthContext: ", userInfo);

  return (
    <AuthContext.Provider value={userInfo}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:cID" element={<ProductsByCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth" element={<Auth setUserInfo={setUserInfo} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
