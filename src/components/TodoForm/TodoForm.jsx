import React, { useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import SelectTextFields from "../Category/Category";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";

function TodoForm(props) {
  const { add, state } = useContext(TodoContext);
  console.log(state.updatingTodo, state.todos);

  const initialId = (task) =>
    task ? task.id : Math.floor(Math.random() * 100000000);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter the todo text");

  useEffect(() => {
    if (state.updatingTodo[0]) {
      setText(state.updatingTodo[0].text);
      setCategory(state.updatingTodo[0].category);
    }
  }, [state.updatingTodo]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    if (text !== "") {
      const newTodo = {
        id: initialId(state.updatingTodo[0]),
        text: text,
        category: category,
      };
      add(newTodo);
      setText('')
    } else {
      setPlaceholder("Enter the todo Text ");
    }
  };

  return (
    <div>
      <Typography variant="h3" sx={{ m: 3 }}>
        {state.updatingTodo[0] ? "Update" : "Add"} a Todo
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div className="form-div" style={{ width: "500px" }}>
          <div className="form">
            <TextField
              id="outlined-basic"
              label={placeholder}
              value={text}
              variant="outlined"
              onChange={handleChange}
              value={text}
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <SelectTextFields category={category} setCategory={setCategory} />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
