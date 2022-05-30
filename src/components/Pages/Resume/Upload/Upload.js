import React from "react";
import { CustomDashedBorder } from "custom-dashed-border";
import vectorImg from "../../Assets2/vector.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const wrapperStyle = {
  position: "relative",
  height: 200,
  width: 315,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left:"5%",
  top:"25px"
 };

 const ImgWrpe = styled("div")(({ theme }) => ({
   width: "-800px",
   height:"-25px",
   marginTop:"-25%",
   marginLeft:"5px"
    }));

   const Heading = styled("div")(({ theme }) => ({
       marginLeft:"-100px",
       marginTop:"20px"
   }));

const Input = styled("input")({
  display: "none",
//   marginLeft: "5%",
//   marginTop: "-100%",
});


export default function Upload() {
  return (
    // Require to wrap this component in `position: relative` block.
    <div style={{ position: "relative", ...wrapperStyle }}>
      <CustomDashedBorder
        upper={{
          color: "#ADD8E6",
          stripe: 20,
          spacing: 15,
          height: 20,
        }}
        bottomright={{ stripe: 12, spacing: 2 }}
        right
        bottom={{ stripe: 12, spacing: 2 }}
        left
        bottom1={{ stripe: 12, spacing: 2 }}
        top
      >
        <ImgWrpe>
          <img alt="Remy Sharp" src={vectorImg} />
        </ImgWrpe>
        <Heading>
          <h6>Drag & Drop files here </h6>
        </Heading>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span" sx={{
              marginTop:"110px",
              marginLeft:"-100px"
          }}>
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file"></label>
      </CustomDashedBorder>
    </div>
  );
}
