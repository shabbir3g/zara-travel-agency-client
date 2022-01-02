// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Service from "./components/Home/Service/Service.js";
import Login from "./components/Home/Login/Login/Ligin.js";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.js";
import Home from "./components/Home/Home/Home.js";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
