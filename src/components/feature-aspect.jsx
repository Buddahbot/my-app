import React from "react";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./feature-aspect.css";

const FeatureAspect = ({ icon, headline, headColor, content, direction }) => {
  const getAlignItems = () => {
    return direction === "row" ? "center" : "flex-start";
  };

  return (
    <Stack direction={direction} alignItems={getAlignItems()}>
      <Stack mr={4}>
        <img src={icon} alt="Icon" />
      </Stack>
      <Stack direction="column">
        <Typography variant="h6" color={headColor}>
          {headline}
        </Typography>
        <Typography color={grey[700]}>{content}</Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureAspect;
