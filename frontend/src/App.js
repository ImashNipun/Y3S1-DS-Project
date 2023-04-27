import "./App.css";

import HomePage from "./components/Home/HomePage";

import ProductListPage from "./components/Product/ProductList/ProductListPage";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Dashboard from "./components/Admin/Pages/Dashboard";
import CustomerManagement from "./components/Admin/Pages/CustomerManagement";
import OrderManagement from "./components/Admin/Pages/OrderManagement";
import ProductManagement from "./components/Admin/Pages/ProductManagement";
import SellerManagment from "./components/Admin/Pages/SellerManagment";
import CartPage from "./components/Cart/CartPage";
import SuccessPage from "./components/MassagesPages/SuccessPage";
import About from "./components/Information/About";
import QandA from "./components/Information/QandA";
import Login from "./components/User/Auth/Login";
import Signup from "./components/User/Auth/Signup";
import Logout from "./components/User/Auth/Logout";
import BuyerProfile from "./components/User/Profile/BuyerProfile";
import SellerProfile from "./components/User/Profile/SellerProfile";
import SingleProduct from "./components/Product/SingleProduct/SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import AuthLayout from "./components/AuthLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* -------------------public routes-------------------------- */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ProductListPage />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/Q&A" element={<QandA />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route element={<AuthLayout allowedR={"buyer"} />}>
              <Route path="/customer/profile" element={<BuyerProfile />} />
            </Route>
            <Route element={<AuthLayout allowedR={"seller"} />}>
            <Route path="/seller/profile" element={<SellerProfile />} />
          </Route>
          </Route>

          {/* -------------------protected routes-------------------------- */}
          <Route element={<AuthLayout allowedR={"admin"} />}>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="/admin/customer" element={<CustomerManagement />} />
              <Route path="/admin/order" element={<OrderManagement />} />
              <Route path="/admin/product" element={<ProductManagement />} />
              <Route path="/admin/seller" element={<SellerManagment />} />
            </Route>
          </Route>

          {/* -------------------commen routes-------------------------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
