import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating;
    const starColor = filled ? "#FF6060" : "#E3E3E3";
    return <Star fill={starColor} key={index} />;
  });
  return <div className="stars-rating">{stars}</div>;
};

export default Rating;
