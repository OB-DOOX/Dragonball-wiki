import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/dragon ball wiki.png";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {/* Navigation gauche */}
      <nav className="nav-left">
        <ul className="nav-list">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === "/characters" ? "active" : ""}>
            <Link to="/characters">Sensei</Link>
          </li>
        </ul>
      </nav>

      {/* Logo au centre */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Dragon Ball Logo" className="logo" />
        </Link>
      </div>

      {/* Navigation droite */}
      <nav className="nav-right">
        <ul className="nav-list">
          <li className={location.pathname === "/episodes" ? "active" : ""}>
            <Link to="/episodes">Histoire</Link>
          </li>
          <li className={location.pathname === "/gallery" ? "active" : ""}>
            <Link to="/gallery">Auteur</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
