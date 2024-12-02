import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Bienvenue sur Dragon Ball Wiki</h1>
      <p>
        Explorez l'univers incroyable de Dragon Ball ! Découvrez les
        personnages, les transformations, les combats épiques et bien plus
        encore.
      </p>
      <p style={styles.createurs}>OBED ET GAEL</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "0px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  createurs: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Home;
