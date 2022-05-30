import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'
import { styled } from '@mui/material/styles';;

const steps = [
  'Profile',
  'Skills',
  'Resume',
];

const Wrapper = styled("div")(({ theme }) => ({
  marginLeft: '5%',
  marginTop: '2%',
  backgroundColor: '#dfdedf',
  heighttop: '20px',
  width: '1415px',
  height: '',
  top: '72px'

}))
const Heading = styled("div")(({ theme }) => ({
  marginLeft: '5%',
}))



export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div>
      <Wrapper>
        <Box sx={{ width: '97%' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Wrapper>
      <Heading>
        <h4> Please  enter candidate skills</h4>
      </Heading>

    </div>

  );
}
