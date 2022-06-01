import { ActionType } from "../actions/actionTypes";


export default (state = { data: [] }, action: any) => {
    switch (action.type) {
        case ActionType.CREATE:
            return { data: [...state.data, action.payload] };
        case ActionType.FETCH_ALL:
            return { data: action.payload };
        case ActionType.TOGGLE:
            return { data: state.data.map((item: any) => item.id === action.payload.id ? action.payload : item) };
        case ActionType.DELETE:
            return { data: state.data.filter((item: any) => item.id !== action.payload) };
        default:
            return state;
    }
}