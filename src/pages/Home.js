import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LongImage from "../components/LongImage";
import logementsData from "../assets/db.json";
import Card from "../components/Card";

const Home = () => {
  const [logements, setLogements] = useState([]);
  console.log(logements);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <section className="home">
      <div className="wrapper">
        <Header />
        <LongImage
          className="long-image-1"
          content="Chez vous, partout et ailleurs"
        />
        <div className="cards">
          {logements.map((logement, index) => (
            <Card key={index} logement={logement} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
