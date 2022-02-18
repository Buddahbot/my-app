import React from "react";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./awesome-apps-features.css";
import southwest from "../images/southwest.png";
import anubis from "../images/anubis.png";
import alonzo from "../images/alonzo.png";
import express from "../images/express.png";
import maniac from "../images/maniac.png";
import phone from "../images/phone2.png";
import fastPerformance from "../images/fast-performance.png";
import prototyping from "../images/prototyping.png";
import vectorEditing from "../images/vector-editing.png";
import FeatureAspect from "./feature-aspect";

const AwesomeAppsFeatures = () => {
  return (
    <div>
      <Typography align="center" mb={5}>
        Trusted by companies like
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={7} mb={20}>
        <img src={southwest} alt="Southwest" />
        <img src={anubis} alt="Anubis" />
        <img src={alonzo} alt="Alonzo" />
        <img src={express} alt="Express" />
        <img src={maniac} alt="Maniac" />
      </Stack>
      <Stack direction="row">
        <Stack width="50%">
          <Stack direction="row" justifyContent="center">
            <img src={phone} alt="Phone" style={{ width: "350px" }} />
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h4" mb={2} color={grey[800]} fontWeight="bold">
            Awesome apps features
          </Typography>
          <Typography mb={9} color={grey[700]}>
            Increase productivity with a single to-do-aoo. app for managing your
            personal budgets.
          </Typography>
          <Stack mb={4}>
            <FeatureAspect
              icon={fastPerformance}
              headColor="red"
              headline="Fast Performance"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="row"
            />
          </Stack>
          <Stack mb={4}>
            <FeatureAspect
              icon={prototyping}
              headColor="blue"
              headline="Prototyping"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="row"
            />
          </Stack>
          <Stack mb={4}>
            <FeatureAspect
              icon={vectorEditing}
              headColor="green"
              headline="Vector Editing"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="row"
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default AwesomeAppsFeatures;
