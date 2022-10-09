import { Typography, List } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import Todo from "../Todo/Todo";

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
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}
				>
					{todos.map((todo) => {
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
