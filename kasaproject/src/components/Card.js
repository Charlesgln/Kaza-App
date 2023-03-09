import React from "react";

const Card = ({ logement }) => {
  console.log(logement);
  return (
    <div className="card">
      <img src={logement.pictures[0]} alt={logement.title} />
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Card;
