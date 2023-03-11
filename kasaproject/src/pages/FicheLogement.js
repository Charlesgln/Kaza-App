import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

const FicheLogement = () => {
  const [logements, setLogements] = useState([]);
  const slides = [
    { url: logements[0].pictures[0], title: logements[0].title },
    { url: logements[0].pictures[1], title: logements[0].title },
    { url: logements[0].pictures[2], title: logements[0].title },
    { url: logements[0].pictures[3], title: logements[0].title },
  ];
  const getData = () => {
    axios
      .get("http://localhost:3004/logements")
      .then((res) => setLogements(res.data));
  };
  console.log(logements);
  useEffect(() => getData(), []);

  return (
    <section className="logement">
      <div className="wrapper">
        <Header />

        <ImageSlider
          slides={slides}

          // {/* <div className="slider-logement">
          //   <img
          //     src={logements.length > 0 ? logements[0].pictures[0] : ""}
          //     alt=""
          //   />
          //   <div className="counter-pages">{actualPage + "/4"}</div>
          // </div> */}
        />

        <div className="header-logement">
          <div className="left">
            <h2></h2>
            <h4></h4>
            <div className="tags">
              <div className="tag"></div>
            </div>
          </div>

          <div className="right">
            <div className="host">
              <h4></h4>
              <img src="" alt="" />
            </div>
            <div className="stars-rating"></div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FicheLogement;
