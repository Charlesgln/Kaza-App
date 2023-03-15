import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating;
    const starColor = filled ? "#FF6060" : "#E3E3E3";
    return <FontAwesomeIcon key={index} icon={faStar} color={starColor} />;
  });
  return <div className="stars-rating">{stars}</div>;
};

export default Rating;
