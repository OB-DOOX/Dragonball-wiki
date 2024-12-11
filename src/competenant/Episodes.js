import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation
import "./Header.css"; // Ajoute ton fichier CSS si nécessaire

function Episodes() {
  const [episodesData, setEpisodesData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/episodes") // Assure-toi que le fichier JSON est dans le bon emplacement
      .then((response) => response.json())
      .then((data) => setEpisodesData(data)) // Accéder à la clé "episodes"
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  if (!episodesData) {
    return <p className="loading">Chargement des épisodes...</p>;
  }

  // Liste des logos avec leur UID et l'URL vers l'histoire correspondante

  const logos = [
    {
      uid: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Dragon_Ball_anime_logo.png",
      alt: "Dragon Ball",
    },
    {
      uid: 34,
      src: "https://upload.wikimedia.org/wikipedia/fr/f/f2/Dragon_Ball_Z_Logo.svg",
      alt: "Dragon Ball Z",
    },
    {
      uid: 67,
      src: "https://upload.wikimedia.org/wikipedia/fr/5/55/Dbz_kai_logo_fr.png",
      alt: "Dragon Ball Kai",
    },
    {
      uid: 68,
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677b7403-76bf-4871-b1eb-996331c62c03/d4h8uas-3fdaa465-7e94-4b4a-b7da-ae5405fbdbfb.png/v1/fill/w_800,h_275/logo___dragon_ball_gt_anime_original_04_by_vicdbz_d4h8uas-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjc1IiwicGF0aCI6IlwvZlwvNjc3Yjc0MDMtNzZiZi00ODcxLWIxZWItOTk2MzMxYzYyYzAzXC9kNGg4dWFzLTNmZGFhNDY1LTdlOTQtNGI0YS1iN2RhLWFlNTQwNWZiZGJmYi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4TknuPYDPW4CwPMgYeIoHwS__IyZS1q7x_kTmAHswZg",
      alt: "Dragon Ball GT",
    },
    {
      uid: 89,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Dragon_Ball_Super.png/1024px-Dragon_Ball_Super.png",
      alt: "Dragon Ball Super",
    },
    {
      uid: 116,
      src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Dragon_Ball_Daima_Logo.png",
      alt: "Dragon Ball Daima",
    },
  ];

  return (
    <div className="episodes-container">
      <h1 className="episodes-title">Les Épisodes de Dragon Ball</h1>
      <p className="episodes-title">
        Découvrez l'intégralité de dragon ball en résumé ici !
      </p>
      <div className="logo-container">
        {logos.map((logo) => (
          <Link
            to={`/histoire/${logo.uid}`}
            key={logo.uid}
            className="logo-link"
          >
            <img src={logo.src} alt={logo.alt} className="logo-db-image" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
