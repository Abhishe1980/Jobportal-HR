import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'
import { styled } from '@mui/material/styles';

const steps = [
  'Profile',
  'Skills',
  'Resume',
];

const Wrapper = styled("div")(({ theme }) => ({
  marginLeft: '5%',
  marginTop:'4%',
  backgroundColor:'#dfdedf',
  heighttop:'24px',
  width:'1415px',
  height:'',
  top:'72px'
  
}))

const Heading = styled("div")(({ theme }) => ({
 marginLeft:'72px',
 marginTop:'70px',
 fontSize:'15px'
}));

export default function Stepper2() {
  return (
    <div>
      <Wrapper>
        <Box sx={{ width: "97%" }}>
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Wrapper>
      <Heading>
        <h3>
          Please upload the candidate resume. Ensure the file is in .PDF format.File size should not exceed 3MB
        </h3>
      </Heading>
    </div>
  );
}
