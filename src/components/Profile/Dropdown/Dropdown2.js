import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const resource = [{ label: "Internal" }, { label: "External" }];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={resource}
      sx={{ width: 225, marginLeft: "28%", marginTop: "15px" }}
      renderInput={(params) => (
        <TextField {...params} label="Select Resource" />
      )}
    />
  );
}
