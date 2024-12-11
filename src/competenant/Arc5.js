import React, { useEffect, useState } from "react";
import "./Header.css"; // Fichier CSS pour styliser la galerie

function Arc5() {
  const [episodesData, setEpisodesData] = useState(null);

  // Charger les données depuis un fichier JSON
  useEffect(() => {
    fetch("http://localhost:3000/episodes") // Assure-toi que le fichier JSON est dans le bon emplacement
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les épisodes pour l'arc "Dragonball"
        const dragonballEpisodes = data.filter(
          (episode) => episode.arc === "DragonBallSUPER"
        );
        setEpisodesData(dragonballEpisodes);
      })
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  // Vérifier si les données sont en cours de chargement
  if (!episodesData) {
    return <p className="loading">Chargement des épisodes...</p>;
  }

  return (
    <div className="episodes-container">
      <h1 className="episodes-title">Les Épisodes de Dragon Ball</h1>

      {/* Affichage des épisodes */}
      <div className="episodes-list">
        {episodesData.map((episode) => (
          <div className="episode-card" key={episode.id}>
            <h2 className="episode-title">{episode.title}</h2>
            {/* Vérifier s'il y a une description */}
            {episode.description && (
              <p className="episode-description">{episode.description}</p>
            )}

            {/* Vérifier s'il y a un logo */}
            {episode.logodb && (
              <img
                src={episode.logodb}
                alt="Logo Dragon Ball"
                className="episode-logo"
              />
            )}

            {/* Affichage des images (GIFs ou statiques) */}
            <div className="episode-images">
              {episode.src && (
                <div className="episode-image">
                  <img
                    src={episode.src}
                    alt={episode.alt}
                    className="episode-gif"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arc5;
