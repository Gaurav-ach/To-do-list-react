import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, setEditTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setEditTodo={setEditTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
