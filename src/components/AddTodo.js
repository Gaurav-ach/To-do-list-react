import React, { useState, useEffect } from 'react';
import './AddTodo.css';

function AddTodo({ addTodo, editTodo, updateTodo }) {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
      setDescription(editTodo.description || '');
    } else {
      setInput('');
      setDescription('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    if (editTodo) {
      updateTodo({ ...editTodo, text: input, description });
    } else {
      addTodo({
        id: Date.now(),
        text: input,
        description,
        dateTime: dateTimeString,
        completed: false,
      });
    }
    setInput('');
    setDescription('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add your task list..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
    
      <button type="submit" className="submit-button">
        {editTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default AddTodo;
