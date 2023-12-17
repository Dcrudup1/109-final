import React from "react";
import "./home.css";
import image1 from "../myimages/organikastore.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="Home page">
        <h1>Fresh food, we got it!</h1>
        <div className="image-container">
          <img src={image1} alt="Fresh Food" className="full-width full-height" />
        </div>
      </div>
    </div>
  );
}

export default Home;
