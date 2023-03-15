import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <section className="error404">
      <div className="wrapper">
        <Header />
        <div className="errortext">
          <h5>404</h5>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner sur la page d’accueil</a>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Error404;
