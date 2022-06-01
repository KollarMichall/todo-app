import React, { FormEvent, useEffect, useState } from "react";
import { DeleteForever, EditNotifications } from "@mui/icons-material";
import { Box, Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleItem } from "../redux/actions/todos";
import { ItemForm } from "./ItemForm";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "./TodoForm";

interface TodoListNameProps {
    item: any;

}

export const TodoListItem: React.FC<TodoListNameProps> = ({ item }) => {

    const dispatch = useDispatch<any>();
    const [isEditOn, setIsEditOn] = useState<boolean>(false);
    const navigate = useNavigate();

    const onDelete = () => {
        dispatch(deleteTodo(item?.id, navigate));
    };
    const onToggle = () => {
        dispatch(toggleItem(item?.id, {...item, complete: !item?.complete}, navigate));

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
