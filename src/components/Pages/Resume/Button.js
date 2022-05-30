import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const NextButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "8px 12px",
  border: "1px solid",
  height: "48px",
  width: "130px",

  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[100]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
    height: "48px",
    width: "130px",
    borderradius: "4px",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  marginLeft: "65%",
  marginTop: "50px",
}));
const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  height: "48px",
  width: "130px",
  marginLeft: "72px",
  top: "97px",
}));

export default function CustomizedButtons() {
  return (
    <div>
      <Link to="/">
        <BlackButton variant="contained" Color="Black">
          Back
        </BlackButton>
      </Link>
      <Wrapper>
        <Stack spacing={4} direction="row">
          <ColorButton variant="contained">cancel</ColorButton>

          <NextButton variant="contained" disablesRipple>
            Done
          </NextButton>
        </Stack>
      </Wrapper>
    </div>
  );
}
