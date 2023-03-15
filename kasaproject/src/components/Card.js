import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement, index }) => {
  return (
    <NavLink to="/fiche-logement" key={index}>
      <div className="card">
        <img src={logement.pictures[0]} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </NavLink>
  );
};

export default Card;
