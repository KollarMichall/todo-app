import React, { FormEvent, useEffect, useState } from "react";
import { DeleteForever, DeleteOutline, DeleteOutlined, EditNotifications } from "@mui/icons-material";
import { Box, Checkbox, Chip, Fab, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleItem } from "../redux/actions/todos";
import { ItemForm } from "./ItemForm";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "./TodoForm";
import { TodoListItem } from "./TodoListItem";
import { SearchBox } from "./SearchBox";

interface TodoListNameProps {
  todo: any;

}

export const TodoListName: React.FC<TodoListNameProps> = ({ todo }) => {


  return (<>
    <List 

      subheader={
        <ListSubheader component="div">
          {todo.name}
        </ListSubheader>
      }
    >

      {todo?.name && <ItemForm />}

      {todo?.title && <TodoListItem item={todo} />}



    </List>
  </>
  )
}
