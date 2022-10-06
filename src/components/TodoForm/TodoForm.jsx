import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import SelectTextFields from "./Category";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";

function TodoForm(props) {
  const { add } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      category: category,
    };
    add(newTodo);
  };
  return (
    <div>
      <Typography variant="h3" sx={{ m: 3 }}>
        Add a Todo
      </Typography>
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
              onChange={handleChange}
              sx={{ width: "100%" }}
            />
            <SelectTextFields category={category} setCategory={setCategory} />
            <Button variant="contained" onClick={handleSubmit}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
