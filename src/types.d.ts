import { ActionType } from "./redux/actions/actionTypes";

type AddTodo = (newTodo: Todo) => void;
type EditTodo = (todoToEdit: Todo) => void;


type Todo = {
  id: string;
  name: string;
  items: Item;
}
type Item = {
  id: string;
  title: string;
  deadline: string;
  complete: boolean;
}
interface SetFilterAction {
  type: typeof ActionType.SET_FILTER;
  value: string;
}

export type TodoActionTypes = SetFilterAction;

type ToggleComplete = (selectedTodo: Todo) => void;


