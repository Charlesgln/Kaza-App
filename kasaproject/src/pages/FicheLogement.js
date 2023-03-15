import axios from "axios";
import React, { useEffect, useState } from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "../components/Rating";

const FicheLogement = ({ key }) => {
  console.log(key);
  const [logements, setLogements] = useState([]);
  const [tags, setTags] = useState([]);
  const [equipments, setEquipments] = useState([]);

  const slides = [
    {
      url: logements.length > 0 ? logements[0].pictures[0] : "",
      title: logements.length > 0 ? logements[0].title[0] : "",
    },
    {
      url: logements.length > 0 ? logements[0].pictures[1] : "",
      title: logements.length > 0 ? logements[0].title[1] : "",
    },
    {
      url: logements.length > 0 ? logements[0].pictures[2] : "",
      title: logements.length > 0 ? logements[0].title[2] : "",
    },
    {
      url: logements.length > 0 ? logements[0].pictures[3] : "",
      title: logements.length > 0 ? logements[0].title[3] : "",
    },
  ];

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3004/logements");
      setLogements(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (logements.length > 0) {
      setTags(logements[0].tags);
      setEquipments(logements[0].equipments);
    }
  }, [logements]);
  return (
    <section className="logement">
      <div className="wrapper">
        <Header />

        <ImageSlider slides={slides} />

        <div className="header-logement">
          <div className="left">
            <h2>{logements.length > 0 ? logements[0].title : ""}</h2>
            <h4>{logements.length > 0 ? logements[0].location : ""}</h4>
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="right">
            <div className="host">
              <h4>{logements.length > 0 ? logements[0].host.name : ""}</h4>
              <img
                src={logements.length > 0 ? logements[0].host.picture : ""}
                alt={
                  logements.length > 0
                    ? "Photo de " + logements[0].host.name
                    : ""
                }
              />
            </div>
            <Rating rating={logements.length > 0 ? logements[0].rating : ""} />
          </div>
        </div>
        <div className="collapses">
          <Collapse
            content={logements.length > 0 ? logements[0].description : ""}
            title="Description"
          />
          <Collapse
            content={equipments.map((equipment, index) => {
              return (
                <div key={index} className="equipment">
                  {equipment}
                </div>
              );
            })}
            title="Équipements"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FicheLogement;
