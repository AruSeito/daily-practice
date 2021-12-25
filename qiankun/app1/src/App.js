import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Home />} />
    </Routes>

  );
}

export default App;
