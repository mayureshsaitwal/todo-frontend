import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo, deleteTodo, summarizeTodos } from './api';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const res = await fetchTodos();
    setTodos(res.data);
  };

  const handleAdd = async (text) => {
    await addTodo(text);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleSummarize = async () => {
    try {
      const response = await summarizeTodos(todos.map((t) => t.text));
      toast.success('Summary sent to Slack!');
      console.log('Summary:', response.data.summary);
    } catch (err) {
      console.error(err);
      toast.error('Failed to send summary.');
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo Summary Assistant</h1>
        <TodoForm onAdd={handleAdd} />
        <ul className="space-y-2 mt-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </ul>
        <button
          onClick={handleSummarize}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition duration-200"
        >
          Summarize & Send to Slack
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
