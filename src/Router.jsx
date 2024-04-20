import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Order/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Result/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Componets/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51P6Svd2K2g538Uj1XSWE87uIsqnsG4WBKnJTbIx6TyEl3KK8wO0XsE5V6xSP1ZBl6yuwfk3tmycaMoGWbcXEfPqt00VMa31lxz');

function Routing() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/payments" element={
      <ProtectedRoute msg={"you must log in to pay"} redirect={"/payments"}>
                <Elements stripe={stripePromise}>
              <Payment />
              </Elements>
    </ProtectedRoute>
    } />
    <Route path="/orders" element={
      <ProtectedRoute
      msg={"you must log in to access your orders"} redirect={"/orders"}
      >

      <Orders />



      </ProtectedRoute>


    } />
    <Route path="/category/:categoryName" element={<Results />} />
    <Route path="/product/:productId" element={<ProductDetail/>} />
    <Route path="/cart" element={<Cart />} />

    </Routes>
   </Router>
  )
}

export default Routing;