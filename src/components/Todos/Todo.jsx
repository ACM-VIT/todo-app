import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";

export default function Todo({ todo }) {
  const { add, del } = useContext(TodoContext);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const labelId = `checkbox-list-label-${todo.text}`;
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={del} edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle(todo.text)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(todo.text) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`${todo.text}`} />
        <ListItemText id={labelId} primary={`${todo.text}`} />
      </ListItemButton>
    </ListItem>
  );
}
