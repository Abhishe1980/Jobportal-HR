import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Irapper = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  marginTop: "-40px",
  marginLeft: "1%",
}));

const Fin2 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "-40px",
  marginLeft: "-15%",
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
        marginLeft: "70%",
        marginTop: "4%",
      }}
    >
      <Fin2>
        <p>Rate/hr (INR)</p>
      </Fin2>
      <Irapper>
        <TextField
          id="demo-helper-text-misaligned"
          label="Enter your preference"
        />
      </Irapper>
    </Box>
  );
}
