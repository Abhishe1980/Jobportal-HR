import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Profile", "Skills", "Resume"];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box
      sx={{
        backgroundColor: "lightgrey",
        width: "90%",
        height: "70%",
        marginTop: "1%",
        marginLeft: "5%",
      }}
    >
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
