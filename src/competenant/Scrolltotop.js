import React, { useState, useEffect } from "react";
import "./Header.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  //  surveiller la position de défilement de la page
  const handleScroll = () => {
    // rendre l'image visible
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un écouteur d'événement pour surveiller le défilement
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour faire défiler la page jusqu'en haut
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="frontpage">
      <img
        src="/pods.png" // Assurez-vous que votre image est dans le dossier public
        alt="Retour en haut"
        onClick={handleScrollToTop}
        className={`scrollToTopImg ${isVisible ? "visible" : ""}`} // Ajoute la classe "visible" lorsque nécessaire
      />
    </div>
  );
};

export default ScrollToTop;
