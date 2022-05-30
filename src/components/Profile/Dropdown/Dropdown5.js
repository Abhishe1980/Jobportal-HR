import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const status = [
  { label: "On a project" },
  { label: "notice period" },
  { label: "ready to join" },
];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={status}
      sx={{ width: 200, marginLeft: "65%", marginTop: "1%" }}
      renderInput={(params) => <TextField {...params} label="Current status" />}
    />
  );
}
