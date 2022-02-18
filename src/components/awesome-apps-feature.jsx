import React from "react";
import "./awesome-apps-features.css";
import southwest from "../images/southwest.png";
import anubis from "../images/anubis.png";
import alonzo from "../images/alonzo.png";
import express from "../images/express.png";
import maniac from "../images/maniac.png";
import phone from "../images/phone2.png";
import FeatureAspect from "./feature-aspect";

const AwesomeAppsFeatures = () => {
  return (
    <div>
      <div>Trusted by companies like</div>
      <div>
        <img src={southwest} alt="Southwest" />
        <img src={anubis} alt="Anubis" />
        <img src={alonzo} alt="Alonzo" />
        <img src={express} alt="Express" />
        <img src={maniac} alt="Maniac" />
      </div>
      <div>
        <img src={phone} alt="Phone" />
      </div>
      <div>Awesome apps features</div>
      <div>
        Increase productivity with a single to-do-aoo. app for managing your
        personal budgets.
      </div>
      <div>
        <FeatureAspect
          iconPath=""
          headline="Fast performance"
          content="Get your blood tests delivered at home collect as sample from the news your blood test."
          orientation=""
        />
        <FeatureAspect
          iconPath=""
          headline="Prototyping"
          content="Get your blood tests delivered at home collect as sample from the news your blood test."
          orientation=""
        />
        <FeatureAspect
          iconPath=""
          headline="Vector Editing"
          content="Get your blood tests delivered at home collect as sample from the news your blood test."
          orientation=""
        />
      </div>
      Awesome apps features
    </div>
  );
};

export default AwesomeAppsFeatures;
