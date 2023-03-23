import React, { useEffect, useState } from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import logementsData from "../assets/db.json";

import { useParams, useNavigate } from "react-router-dom";

import Rating from "../components/Rating";

const FicheLogement = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [logement, setLogement] = useState({});
  const [tags, setTags] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [hostName, setHostName] = useState("");
  const [hostPicture, setHostPicture] = useState("");

  useEffect(() => {
    const logement = logementsData.find((item) => item.id === id);
    if (logement) {
      setLogement(logement);
      setTags(logement.tags);
      setEquipments(logement.equipments);
      setHostName(logement.host.name);
      setHostPicture(logement.host.picture);
    } else {
      navigate("/404");
    }
  }, [id]);

  const slides = [
    {
      url: logement && logement.pictures ? logement.pictures[0] : "",
      title: logement ? logement.title : "",
    },
    {
      url: logement && logement.pictures ? logement.pictures[1] : "",
      title: logement ? logement.title : "",
    },
    {
      url: logement && logement.pictures ? logement.pictures[2] : "",
      title: logement ? logement.title : "",
    },
    {
      url: logement && logement.pictures ? logement.pictures[3] : "",
      title: logement ? logement.title : "",
    },
  ];

  return (
    <section className="logement">
      <div className="wrapper">
        <Header />

        <ImageSlider slides={slides} />

        <div className="header-logement">
          <div className="left">
            <h2>{logement ? logement.title : ""}</h2>
            <h4>{logement ? logement.location : ""}</h4>
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
              <h4>{hostName}</h4>
              <img src={hostPicture} alt={"Photo de " + hostName} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="collapses">
          <Collapse content={logement.description} title="Description" />
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
