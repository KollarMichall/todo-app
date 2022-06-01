import axios from 'axios'

const url = 'https://628c9b99a3fd714fd0357b91.mockapi.io/api/v1/todos'

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo: any) => axios.post(url, newTodo);
export const updateItem = (id: number, updateItem: any) => axios.put(`${url}/${id}`, updateItem);
export const deleteTodo = (id: number) => axios.delete(`${url}/${id}`);



