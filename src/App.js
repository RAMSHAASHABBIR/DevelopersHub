import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import AdminPage from './pages/adminpage';
import ProductView from './pages/productlist';
import Productdetails from './pages/productdetails';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Cart />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />       
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/ProductView" element={<ProductView />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />     
      </Routes>
    </Router>
  );
}

export default App;
 