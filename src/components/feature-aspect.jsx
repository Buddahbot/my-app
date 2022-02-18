import React from "react";
import { Stack, Typography } from "@mui/material";
import "./feature-aspect.css";

const FeatureAspect = ({
  iconPath,
  headline,
  headColor,
  content,
  orientation,
}) => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={iconPath} alt="Icon" />
      <Stack direction="column">
        <Typography variant="h6" color={headColor}>
          {headline}
        </Typography>
        <Typography>{content}</Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureAspect;
