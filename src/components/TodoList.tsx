import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Container, CssBaseline, IconButton, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../redux/actions/actionTypes";
import { deleteTodo, setFilter } from "../redux/actions/todos";
import { SearchBox } from "./SearchBox";
import { TodoListName } from './TodoListName';

interface TodoListProps {

}
const getVisibleTodos = (todos: any, filter: string) => {
  switch (filter) {
    case ActionType.FILTER_ALL: {
      return todos;
    }
    case ActionType.FILTER_ACTIVE: {
      return todos.filter((c: any) => !c.complete);
    }
    case ActionType.FILTER_COMPLETE: {
      return todos.filter((c: any) => c.complete);
    }
    default:
      return todos;
  }
};

export const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector((state: any) => getVisibleTodos(state.todos.data, state.visibilityFilter));
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();



  return (<>
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      {todos.length > 0 && <Box sx={{ p: 2, border: '2px solid grey' }}>

        {todos?.map((todo: any) => {
          return (<>
            {todo?.name && (
              <Stack
                sx={{ pt: 4, ml: 2 }}
                direction="row"
                justifyContent="space-between"
              >
                <Box sx={{ display: "flex" }}>
                  <Button sx={{ mr: 1 }} onClick={() => dispatch(setFilter(ActionType.FILTER_ALL))} variant="contained">All</Button>
                  <Button sx={{ mr: 1 }} onClick={() => dispatch(setFilter(ActionType.FILTER_ACTIVE))} variant="contained">Active</Button>
                  <Button onClick={() => dispatch(setFilter(ActionType.FILTER_COMPLETE))} variant="contained">COMPLETE</Button>
                  <SearchBox todos={todos} />
                </Box>
                <IconButton>
                  <ClearIcon color="error" onClick={() => dispatch(deleteTodo(todo?.id, navigate))} />
                </IconButton>
              </Stack>
            )}
            <TodoListName
              key={todo.id}
              todo={todo}
            />
          </>
          )
        })}
      </Box>}
    </Container>
  </>
  );
};
