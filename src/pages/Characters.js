import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Charger les données JSON avec fetch
    fetch("/dragonball.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div>
      <h1>Personnages</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
