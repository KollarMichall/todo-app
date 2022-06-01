import * as api from '../api/index'
import { ActionType } from './actionTypes';

export const getTodos = () => async (dispatch: any) => {
    try {
        const {data} = await api.fetchTodos();

        dispatch({type: ActionType.FETCH_ALL, payload: data});

    } catch (error: any) {
        console.log(error.message);
    }
};

export const createTodo = (todo: any, navigate: any) => async (dispatch: any) => {
try {
    const {data} = await api.createTodo(todo);

    dispatch({type: ActionType.CREATE, payload: data});
    navigate('/');
} catch (error: any) {
    console.log(error.message);
}

};


export const toggleItem = (id: any, item: any, navigate: any) => async (dispatch: any) => {
    try {
        const {data} = await api.updateItem(id, item);
        dispatch({type: ActionType.TOGGLE, payload: data});
        navigate('/')
    } catch (error: any) {
        console.log(error.message);
    }
    
    };

export const deleteTodo = (id: any, navigate: any) => async (dispatch: any) => {
try {
    await api.deleteTodo(id);
    navigate('/')
    dispatch({type: ActionType.DELETE, payload: id});
} catch (error: any) {
    console.log(error.message);
}

};

export const setFilter = (filter: string) => ({
    type: ActionType.SET_FILTER,
    value: filter,
  });
