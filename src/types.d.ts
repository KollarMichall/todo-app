import { ActionType } from "./redux/actions/actionTypes";

type Todo = {
  id: string;
  name: string;
  items: Item[];
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

type TodoActionTypes = SetFilterAction;



