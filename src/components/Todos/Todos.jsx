import { Typography, List } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import Todo from "./Todo";

function Todos(props) {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <Typography variant="h6">Your Todos</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {/* {["Walk Dog", "Drink tea"].map((value) => (
            <Todo value={value} />
          ))} */}
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </List>
      </div>
    </div>
  );
}

export default Todos;
