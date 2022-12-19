import { Typography, List } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import Todo from "../Todo/Todo";
import "C:/Users/jakub/IdeaProjects/todo-app/src/styles/App.css";
//import { ThemeContext } from "@emotion/react";
import { ThemeContext } from "C:/Users/jakub/IdeaProjects/todo-app/src/App";

function Todos(props) {
	const { state } = useContext(TodoContext);
	const { theme } = useContext(ThemeContext);
	return (
		<div> 
			<Typography variant="h6" sx={{ m: 3, color: theme }}>Your Todos</Typography>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
						/*bgcolor: "green",*/
					}}
				>
					{state.todos.map((todo) => {
						return (
							<Todo todo={todo} key={todo.id} complete={false} />
						);
					})}
				</List>
			</div>
		</div>
	);
}

export default Todos;
