import React from "react";
import { Paper, Typography, TextField } from "@mui/material";
import SelectTextFields from "./Category";

function TodoForm(props) {
  return (
    <div>
      <Typography variant="h3" sx={{m:3}}>Add a Todo</Typography>
      <form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div className="form-div" style={{ width: "500px" }}>
            <div className="form">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <SelectTextFields />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
