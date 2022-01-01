// import './App.css';
import { Routes, Route} from "react-router-dom";
import Banner from "./components/Home/Banner/Banner.js";



function App() {
  return (
    <div className="App">
          <Routes>
             <Route path="/" element={<Banner />} />
            
          </Routes>
         
    </div>
  );
}

export default App;
