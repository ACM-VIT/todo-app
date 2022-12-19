import React, { useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import SelectTextFields from "../Category/Category";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import "C:/Users/jakub/IdeaProjects/todo-app/src/styles/App.css";
//import { ThemeContext } from "@emotion/react";
import { ThemeContext } from "C:/Users/jakub/IdeaProjects/todo-app/src/App";
import { ClassNames } from "@emotion/react";
import { InputLabelClasses } from "@mui/material";
import { withStyles } from "@mui/material";



function TodoForm(props) {
  const { add, state } = useContext(TodoContext);
  console.log(state.updatingTodo, state.todos);

  const initialId = task => task ? task.id : Math.floor(Math.random() * 100000000);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter the todo text");

  useEffect(() => {
    if (state.updatingTodo[0]) {
      setText(state.updatingTodo[0].text);
      setCategory(state.updatingTodo[0].category);
    }
  }, [state.updatingTodo])
  

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
    } else {
      setPlaceholder("Enter the todo Text ");
    }
  };

  const { theme }  = useContext(ThemeContext);

  const styles = {
    labelStyle: {
      color: "white"
    }
  }
  return (
    <div> {JSON.stringify(theme)}
      <Typography variant="h3" sx={{ m: 3, color: theme }}>
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
              InputLabelProps={{
                sx: {
                  color: theme,
                }
              }}
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <SelectTextFields 
              category={category} 
              setCategory={setCategory}
              InputLabelProps={{
                sx: {
                  color: "white",
                }
              }}
            />
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
