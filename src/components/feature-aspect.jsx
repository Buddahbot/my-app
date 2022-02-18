import React from "react";
import "./feature-aspect.css";

const FeatureAspect = ({ iconPath, headline, content, orientation }) => {
  return (
    <div>
      <div>
        <img src={iconPath} alt="Icon" />
      </div>
      <div>
        <div>{headline}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default FeatureAspect;
