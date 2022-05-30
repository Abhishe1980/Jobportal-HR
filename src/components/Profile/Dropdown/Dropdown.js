import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "100",
    },
  },
};
const Pinl = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "-6px",
  marginLeft: "-123%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
}));

const Pin2 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "80px",
  marginLeft: "-123%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
}));
const Pin3 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "160px",
  marginLeft: "-123%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "25px",
}));
const Pin4 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "-6",
  marginLeft: "185%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
  whiteSpace: "nowrap",
}));
const Pin5 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "80px",
  marginLeft: "185%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
}));
const Pin6 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginTop: "80px",
  marginLeft: "350%",
  fontSize: "115%",
  fontFamily: "system-ui",
  lineHeight: "19px",
}));

const locations = [
  "Vellore",
  "Chennai",
  "Noida",
  "Delhi NCR",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
];

function getStyles(location, personLocation, theme) {
  return {
    fontWeight:
      personLocation.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personLocation, setPersonLocation] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: 225, marginLeft: "28%", marginTop: "15px" }}
      >
        <Pinl>
          <p>Current Location</p>
        </Pinl>
        <Pin2>
          <p>Resource type</p>
        </Pin2>
        <Pin3>
          <p>CTC (LPA)</p>
        </Pin3>
        <Pin4>
          <p>Work Experience(years)</p>
        </Pin4>
        <Pin5>
          <p>Status</p>
        </Pin5>
        <Pin6>
          <p>Available</p>
        </Pin6>
        <InputLabel id="demo-multiple-location-label">Location</InputLabel>
        <Select
          labelId="demo-multiple-location-label"
          id="demo-multiple-location"
          multiple
          value={personLocation}
          onChange={handleChange}
          input={<OutlinedInput label="Location" />}
          MenuProps={MenuProps}
        >
          {locations.map((location) => (
            <MenuItem
              key={location}
              value={location}
              style={getStyles(location, personLocation, theme)}
            >
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
