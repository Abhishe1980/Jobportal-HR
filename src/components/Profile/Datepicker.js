import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Kin = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  marginTop: "-55px",
  marginLeft: "85%",
  width: "10%",
}));

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <Kin>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          width="100"
          label="choose Date"
          marginLeft="45%"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Kin>
  );
}
