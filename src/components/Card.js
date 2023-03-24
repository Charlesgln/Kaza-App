import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <NavLink to={`/fiche-logement/${logement.id}`}>
      <div className="card" id={logement.id}>
        <img src={logement.pictures[0]} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </NavLink>
  );
};

export default Card;
