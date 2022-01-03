import './App.css';
import { Routes, Route } from "react-router-dom";
import Service from "./components/Home/Service/Service.js";
import Login from "./components/Home/Login/Login/Login.js";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.js";
import Home from "./components/Home/Home/Home.js";

import AddProduct from "./components/Deshboard/AddProduct/AddProduct.js";
import Dashboard from "./components/Deshboard/Dashboard/Dashboard.js";
import DashboardHome from "./components/Deshboard/DashboardHome/DashboardHome.js";
import MakeAdmin from "./components/Deshboard/MakeAdmin/MakeAdmin.js";
import ManageAllOrders from "./components/Deshboard/ManageAllOrders/ManageAllOrders.js";
import ManageProducts from "./components/Deshboard/ManageProducts/ManageProducts.js";
import MyOrders from "./components/Deshboard/MyOrders/MyOrders.js";
import Pay from "./components/Deshboard/Pay/Pay.js";
import UserReview from "./components/Deshboard/UserReview/UserReview.js";
import AboutUs from "./components/AboutUs/AboutUs/AboutUs.js";
import NotFound from "./components/NotFound/NotFound"
import ContactUs from './components/ContactUs/ContactUs/ContactUs';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route exact path="/dashboard" element={<DashboardHome />} />
          <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
          <Route path={`/dashboard/addReview`} element={<UserReview />} />
          <Route path={`/dashboard/addProduct`} element={<AddProduct />} />
          <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />} />
          <Route path="/dashboard/manageAllOrders" element={<ManageAllOrders />} />
          <Route path={`/dashboard/manageProducts`} element={<ManageProducts />} />
          <Route path={`/dashboard/pay`} element={<Pay />} />
        </Route>
        <Route path="*" element={  <NotFound /> } />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
