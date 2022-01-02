// import './App.css';
import { Routes, Route} from "react-router-dom";
import Service from "./components/Home/Service/Service";
// import Banner from "./components/Home/Banner/Banner.js";



function App() {
  return (
    <div className="App">
          <Routes>
             <Route path="/" element={<Service />} />
            
          </Routes>
         
    </div>
  );
}

export default App;
