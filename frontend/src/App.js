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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/customer" element={<CustomerManagement />} />
            <Route path="/admin/order" element={<OrderManagement />} />
            <Route path="/admin/product" element={<ProductManagement />} />
            <Route path="/admin/seller" element={<SellerManagment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
