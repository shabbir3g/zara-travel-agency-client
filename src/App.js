// import './App.css';
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Home/Banner/Banner.js";
import Login from "./components/Home/Login/Login/Ligin.js";
import Register from "./components/Home/Login/Register/Register.js";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.js";
=======
import { Routes, Route} from "react-router-dom";
import Service from "./components/Home/Service/Service";
// import Banner from "./components/Home/Banner/Banner.js";


>>>>>>> 3a6117f0bb444b6c7af0fa450cde3c6ed68f3dd5

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
=======
          <Routes>
             <Route path="/" element={<Service />} />
            
          </Routes>
         
>>>>>>> 3a6117f0bb444b6c7af0fa450cde3c6ed68f3dd5
    </div>
  );
}

export default App;
