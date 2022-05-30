import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Trapper = styled("div")(({ theme }) => ({
  fontSize: "100%",
  width: "424px",
  height: "50px",
  marginTop: "20px",
  marginLeft: "72px",
}));

const Input = styled("input")({
  display: "none",
  backgroundColor: "blue",
});

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :(style)": { m: 1 } }}>
      <Trapper>
        <h4>Please enter candidate profile details</h4>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Fab
            color="primary"
            aria-label="add"
            variant="contained"
            component="span"
          >
            <AddIcon />
          </Fab>
        </label>
      </Trapper>
      <p style={{ color: "rgba(3, 134, 255, 1)", marginTop: "-0.1%" }}>
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Add Image
      </p>

      <p>
        &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;Please upload the
        candidate profile picture. Ensure file <br /> &emsp; &emsp; &emsp;
        &emsp; &emsp; &emsp; &emsp;is in .JPEG format. File size should not
        exceed 3MB
      </p>
    </Box>
  );
}
