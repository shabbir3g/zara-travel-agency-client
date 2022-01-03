// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Home/Banner/Banner.js";
import Service from "./components/Home/Service/Service.js";
import Login from "./components/Home/Login/Login/Ligin.js";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.js";
import Order from "./components/Order/Order.js";
import Cart from "./components/Cart/Cart.js";
import PrivetRoute from "../src/components/Home/Login/PrivetRoute/PrivetRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/service" element={<Service />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/addCart/:id" element={<PrivetRoute><Cart /></PrivetRoute>} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
