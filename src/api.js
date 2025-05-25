import axios from 'axios';


const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/',
});

export const fetchTodos = () => API.get('/todos');
export const addTodo = (text) => API.post('/todos', { text });
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const summarizeTodos = (todos) => API.post('/summarize', { todos });
