import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import Graph from "../components/Graph";

function LandingPage() {
  return (
    <div className="content flex">
      <div className="leftContent">
        <div className="text">
          <h2 className="largeText">Find what works for you.</h2>
          <p>
            Drug Decider helps patients find the right medication by analyzing
            their symptoms and health conditions.
          </p>
        </div>
        <Link to="/form" className="startButton">
          Let's get started!
        </Link>
      </div>

      <div className="imageContent flex">
        <Graph/>
      </div>
      {/*
      <div className="imageContent flex">
        <img
          src="https://nathanbrixius.files.wordpress.com/2013/02/image3.png"
          id="landingImage"
          alt="Graph of results"
        />
      </div>
    */}
    </div>
  );
}

export default LandingPage;
