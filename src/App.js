import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./competenant/Header";
import Home from "./competenant/Home";
import Characters from "./competenant/Characters";
import About from "./competenant/About";
import Gallery from "./competenant/Gallery";
import Episodes from "./competenant/Episodes";
import Arc1 from "./competenant/Arc1";
import Arc2 from "./competenant/Arc2";
import Arc3 from "./competenant/Arc3";
import Arc4 from "./competenant/Arc4";
import Arc5 from "./competenant/Arc5";
import Arc6 from "./competenant/Arc6";
import ScrollToTop from "./competenant/Scrolltotop";

function App() {
  return (
    <Router>
      <Header /> {}
      <ScrollToTop /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Episodes />} />

        <Route path="/histoire/1" element={<Arc1 />} />
        <Route path="/histoire/34" element={<Arc2 />} />
        <Route path="/histoire/67" element={<Arc3 />} />
        <Route path="/histoire/68" element={<Arc4 />} />
        <Route path="/histoire/89" element={<Arc5 />} />
        <Route path="/histoire/116" element={<Arc6 />} />
      </Routes>
    </Router>
  );
}

export default App;
