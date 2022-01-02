// import './App.css';
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/Deshboard/AddProduct/AddProduct.js";
import Dashboard from "./components/Deshboard/Dashboard/Dashboard.js";
import DashboardHome from "./components/Deshboard/DashboardHome/DashboardHome.js";
import MakeAdmin from "./components/Deshboard/MakeAdmin/MakeAdmin.js";
import ManageAllOrders from "./components/Deshboard/ManageAllOrders/ManageAllOrders.js";
import ManageProducts from "./components/Deshboard/ManageProducts/ManageProducts.js";
import MyOrders from "./components/Deshboard/MyOrders/MyOrders.js";
import Pay from "./components/Deshboard/Pay/Pay.js";
import UserReview from "./components/Deshboard/UserReview/UserReview.js";
import Banner from "./components/Home/Banner/Banner.js";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banner />} />
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
      </Routes>

    </div>
  );
}

export default App;
