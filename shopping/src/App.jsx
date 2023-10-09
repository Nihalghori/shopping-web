
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/AboutPage";





const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
      
          <li>
            <Link to={`/About`}>WEAR HOUSE</Link>
          </li>
         
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
       
      
      
        
        
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
};

export default App;
















