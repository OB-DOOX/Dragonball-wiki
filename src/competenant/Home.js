import React, { useEffect, useState } from "react";
import "./Header.css"; // Importation du fichier CSS

function Home() {
  const [dragonBallData, setDragonBallData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/home") // Chemin relatif au dossier public
      .then((response) => response.json())
      .then((data) => setDragonBallData(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);
  console.log(dragonBallData);

  if (!dragonBallData) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="home-container">
      <h1>{dragonBallData.welcomeMessage}</h1>
      <p>{dragonBallData.description}</p>
      <div className="section-container">
        {dragonBallData.sections.map((section, index) => (
          <div className="section-card" key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
