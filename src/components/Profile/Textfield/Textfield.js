import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Irapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  marginTop: "-6px",
  marginLeft: "28%",
}));

const Fin = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "-6px",
  marginLeft: "10%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
}));

export default function HelperTextMisaligned() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > (style)": { m: 1 },
      }}
    >
      <Fin>
        <p>First Name</p>
      </Fin>
      <Irapper>
        <TextField
          id="demo-helper-text-misaligned"
          label="Enter your First Name"
        />
      </Irapper>
    </Box>
  );
}
