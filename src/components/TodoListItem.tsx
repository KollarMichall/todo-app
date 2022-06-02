import React from "react";
import { DeleteForever } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleItem } from "../redux/actions/todos";
import { useNavigate } from "react-router-dom";

interface TodoListNameProps {
    item: any;

}

export const TodoListItem: React.FC<TodoListNameProps> = ({ item }) => {

    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const onDelete = () => {
        dispatch(deleteTodo(item?.id, navigate));
    };
    const onToggle = () => {
        dispatch(toggleItem(item?.id, { ...item, complete: !item?.complete }, navigate));

    };


    return (
        <ListItem
            secondaryAction={
                <IconButton >
                    <DeleteForever onClick={() => onDelete()} color="error" />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={() => onToggle()} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item?.complete}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText id={item?.id} primary={item?.title} secondary={item?.deadline} />
            </ListItemButton>
        </ListItem>


    )
}
