import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';




const RoundButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "24px",
    paddingRight: "24px",
    borderRadius: "32px",
    color: "white",
    backgroundColor:" #0000ff",
    '&:hover': {
    backgroundColor: "0000E0",
  },
}));

export default function CustomizedButtons() {
  return (
        <RoundButton>Learn more</RoundButton>
  );
}