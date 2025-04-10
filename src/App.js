import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgatPassword from "./pages/Authentication/ForgatPassword";
// import Category from "./Components/Card/Category";
import Category from "./Components/Category/Category";
import logout from "./pages/Authentication/Logout";
import Logout from "./pages/Authentication/Logout";
import ScrollToTop from "./Components/ScrollToTop";
// import SubCategoryP from "./Components/Categories/SubCategoryP";
import Knowledge from "./Components/Knowledge-Center/Knowledge";
import Shop from "./pages/Shop";
import ShuffleHero from "./pages/ShuffleHero";
// import DarkMode from "./Components/DarkMode";
import SelectionMenu from "./pages/SelectionMenu"
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import ContentPage from "./pages/ContentPage";
import Sub_category from "./Components/Sub_category";
import PageNotFound from "./pages/PageNotFound";









function App() {
  
 
  return (
    <BrowserRouter>
    <ScrollToTop/>
    {/* <DarkMode/> */}
   
      <Routes>
    
        <Route path="/" element={<Layout />}>
          <Route index exact element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/sub-category/:id" element={<Sub_category/>} />
          {/* <Route path="/subcategory/:id" element={<SubCategoryP />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="forgatpassword" element={<ForgatPassword />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shufflehero" element={<ShuffleHero/>}/>
          <Route path="SelectionMenu" element={<SelectionMenu/>}/>
          <Route path="cancel" element={<Cancel />} />
          <Route path="success" element={<Success />} />
          <Route path="contentpage" element={<ContentPage/>}/>
        
       
          <Route path="*"  element={<PageNotFound />} />
         
        
        
        </Route>
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
