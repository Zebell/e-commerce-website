import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Cart,
  Checkout,
  Login,
  ProductDetails,
  Shop,
  Signup,
} from "../pages/index";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
