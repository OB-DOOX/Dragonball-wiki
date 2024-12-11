import React, { useEffect, useState } from "react";
import "./Header.css";

function Gallery() {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/author")
      .then((response) => response.json())
      .then((data) => setAuthorData(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);
  console.log(authorData);

  if (!authorData) {
    return <p className="loading">Chargement des données...</p>;
  }

  return (
    <div className="author-container">
      <h1 className="author-name">{authorData.name}</h1>
      <p className="author-description">{authorData.description}</p>

      {}
      <div className="author-images">
        {authorData.images.map((image, index) => (
          <div className="author-image-card" key={index}>
            <img
              src={image.static}
              alt={image.alt}
              className="author-static-image"
            />
            <img
              src={image.gif}
              alt={`${image.alt} GIF`}
              className="author-gif-image"
            />
          </div>
        ))}
      </div>

      {}
      <h2 className="works-title">Œuvres principales</h2>
      <div className="works-list">
        {authorData.works.map((work, index) => (
          <div className="work-card" key={index}>
            <img src={work.image} alt={work.alt} className="work-image" />
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>

      {}
      <div className="author-video">
        <iframe
          title={authorData.video.title}
          src={authorData.video.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <footer className="copyright">
        <p>
          &copy; 2024 Henri Tran Youtube {authorData.name}. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}

export default Gallery;
