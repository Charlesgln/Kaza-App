import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [actualPage, setActualPage] = useState(0);

  const nextSlide = () => {
    setActualPage(actualPage + 1);
    if (actualPage === 3) {
      setActualPage(0);
    }
  };

  const previousSlide = () => {
    setActualPage(actualPage - 1);
    if (actualPage === 0) {
      setActualPage(3);
    }
  };
  return (
    <div className="slider-logement">
      <div className="arrow-left" onClick={previousSlide}></div>
      <div className="arrow-right" onClick={nextSlide}></div>
      <img src={slides[actualPage].url} alt={slides[actualPage].title} />
      <div className="counter-pages">{actualPage + 1 + "/4"}</div>
    </div>
  );
};

export default ImageSlider;
