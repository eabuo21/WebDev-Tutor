/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
