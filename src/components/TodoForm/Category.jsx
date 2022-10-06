import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export const currencies = [
  {
    value: "learning",
    label: "Learning",
  },
  {
    value: "chores",
    label: "Chores",
  },
  {
    value: "body-care",
    label: "Body Care",
  },
  {
    value: "social",
    label: "Social",
  },
];

export default function SelectTextFields({ category, setCategory }) {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your category"
        >
          {currencies.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                setCategory(option.value);
              }}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
