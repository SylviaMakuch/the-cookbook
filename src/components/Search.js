import React from "react";
// import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
// import IconButton from "@mui/icons-material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
import {
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function Search() {
//   const axios = require("axios").default;

//   const options = {
//     method: "GET",
//     url: "https://themealdb.p.rapidapi.com/filter.php",
//     params: { i: "chicken_breast" },
//     headers: {
//       "x-rapidapi-host": "themealdb.p.rapidapi.com",
//       "x-rapidapi-key": "e120e44aebmshc56159d5e1ff737p16b7dfjsn3d53a95184bd",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
  return (
    <TextField
      id="outlined-search"
      color="warning"
      label="Seatch"
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      type="search"
    ></TextField>
  );
  console.dir = TextField.element.query.value;
}
