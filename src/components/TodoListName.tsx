import React from "react";
import { List, ListSubheader } from "@mui/material";
import { ItemForm } from "./ItemForm";
import { TodoListItem } from "./TodoListItem";

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
