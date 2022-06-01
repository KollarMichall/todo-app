import { TodoActionTypes } from "../../types";
import { ActionType } from "../actions/actionTypes";

const visibilityFilter = (
  state: string = ActionType.FILTER_ALL,
  action: TodoActionTypes
): string => {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      return action.value;
    }
  }
  return state;
};
export default visibilityFilter;
