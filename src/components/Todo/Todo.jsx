import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";

export default function Todo({ todo }) {
	const { del, upd } = useContext(TodoContext);
	const [checked, setChecked] = React.useState([0]);
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		todo.complete = !todo.complete;
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const labelId = `checkbox-list-label-${todo.text}`;
	return (
		<ListItem>
			<ListItemButton
				role={undefined}
				onClick={handleToggle(todo.text)}
				dense
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={checked.indexOf(todo.text) !== -1}
						tabIndex={-1}
						disableRipple
						inputProps={{ "aria-labelledby": labelId }}
					/>
				</ListItemIcon>
				<ListItemText
					id={labelId}
					primary={`${todo.text}`}
					className={todo.complete ? "check" : ""}
				/>
				<ListItemText
					id={labelId}
					primary={`${todo.category}`}
					className={todo.complete ? "check" : ""}
				/>
			</ListItemButton>
			<ListItemSecondaryAction>
				<IconButton
					onClick={del.bind(null, todo.id)}
					aria-label="comments"
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					onClick={upd.bind(null, todo.id)}
					aria-label="comments"
				>
					<EditIcon />
				</IconButton>
              </ListItemSecondaryAction>
		</ListItem>
	);
}
