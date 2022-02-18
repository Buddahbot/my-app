import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import fastPerformance from "../images/fast-performance.png";
import prototyping from "../images/prototyping.png";
import vectorEditing from "../images/vector-editing.png";
import FeatureAspect from "./feature-aspect";

const SmartJackpots = () => {
  return (
    <div>
      <Stack mb={10}>
        <Stack direction="row">
          <Typography variant="h4" color={grey[800]} fontWeight="bold" m={5}>
            Smart jackpots that you may love this anytime & anywhere
          </Typography>
          <Divider orientation="vertical" variant="middle" />
          <Typography color={grey[700]} m={5}>
            The rise of mobile devices transform the way we consume information
            entrirely and the world's most relevant channels such as Facebook.
          </Typography>
        </Stack>
        <Stack direction="row">
          <Stack m={5}>
            <FeatureAspect
              icon={fastPerformance}
              headColor="red"
              headline="Automatic Payouts"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="column"
            />
          </Stack>
          <Stack m={5}>
            <FeatureAspect
              icon={prototyping}
              headColor="blue"
              headline="Network Effect"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="column"
            />
          </Stack>
          <Stack m={5}>
            <FeatureAspect
              icon={vectorEditing}
              headColor="green"
              headline="Bigger Rewards Method"
              content="Get your blood tests delivered at home collect as sample from the news your blood test."
              direction="column"
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default SmartJackpots;
