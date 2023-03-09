import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LongImage from "../components/LongImage";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [logements, setLogements] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3004/logements")
      .then((res) => setLogements(res.data));
  };

  useEffect(() => getData(), []);
  return (
    <section className="home">
      <div className="wrapper">
        <Header />
        <LongImage />
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
