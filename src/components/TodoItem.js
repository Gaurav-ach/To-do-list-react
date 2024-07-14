import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, setEditTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        <span className="todo-date-time">Created on: {todo.dateTime}</span>
        {todo.description && <p className="todo-description">{todo.description}</p>}
      </div>
      <div className="todo-buttons">
        <button className="edit-button" onClick={() => setEditTodo(todo)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
