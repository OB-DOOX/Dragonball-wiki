import React, { useEffect, useState } from "react";
import "./Header.css"; // Importation du CSS pour le style

function Characters() {
  const [senseiData, setSenseiData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/sensei")
      .then((response) => response.json())
      .then((data) => setSenseiData(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);
  console.log(senseiData);

  if (!senseiData) {
    return <p className="loading">Chargement des données...</p>;
  }

  return (
    <div className="characters-container">
      <h1 className="characters-title">Les Maîtres de Dragon Ball</h1>
      <div className="characters-grid">
        {senseiData.map((sensei, index) => (
          <div className="character-card" key={index}>
            <img
              src={sensei.image}
              alt={sensei.name}
              className="character-image"
            />
            <h2 className="character-name">{sensei.name}</h2>
            <p className="character-alias">Alias : {sensei.alias}</p>
            <p className="character-description">{sensei.description}</p>
            <div className="character-details">
              <strong>Élèves :</strong>
              <ul>
                {sensei.students.map((student, i) => (
                  <li key={i}>{student}</li>
                ))}
              </ul>
              <strong>Techniques :</strong>
              <ul>
                {sensei.signature_techniques.map((technique, i) => (
                  <li key={i}>{technique}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
