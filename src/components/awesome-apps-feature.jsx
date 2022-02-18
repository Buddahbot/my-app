import React from "react";
import "./awesome-apps-features.css";
import FeatureAspect from "./feature-aspect";

const AwesomeAppsFeatures = () => {
  return (
    <div>
      <div>Trusted by companies like</div>
      <div>
        <img src="#" alt="Southmeat" />
        <img src="#" alt="Anubis" />
        <img src="#" alt="Alonzo" />
        <img src="#" alt="Express" />
        <img src="#" alt="Maniac" />
      </div>
      <div>Smart phone</div>
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
