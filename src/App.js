import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importer les pages
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/characters">Personnages</Link>
            </li>
            <li>
              <Link to="/episodes">Épisodes</Link>
            </li>
            <li>
              <Link to="/gallery">Galerie</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
