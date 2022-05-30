import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ctc = [
  { label: "<5" },
  { label: "6" },
  { label: "" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
  { label: "11" },
  { label: "12" },
  { label: "13" },
  { label: "14" },
  { label: ">15" },
];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ctc}
      sx={{ width: 227, height: 50, marginLeft: "28%", marginTop: "25px" }}
      renderInput={(params) => <TextField {...params} label="CTC" />}
    />
  );
}
