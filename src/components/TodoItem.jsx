import React from 'react';

const TodoItem = ({ todo, onDelete }) => (
  <li className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:shadow-md transition duration-150">
    <span className="truncate">{todo.text}</span>
    <button
      onClick={() => onDelete(todo.id)}
      className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      aria-label={`Delete todo: ${todo.text}`}
    >
      Delete
    </button>
  </li>
);

export default TodoItem;
