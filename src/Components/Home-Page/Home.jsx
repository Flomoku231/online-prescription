import React from "react";
import About from "./AboutUs/About";
import "./Home.css";
import Intro from "./Intro/Intro";
import Partnership from "./Partnership/Partnership";

const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <About />
      <Partnership />
    </div>
  );
};

export default Home;
