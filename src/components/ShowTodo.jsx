import React from 'react';
import { useState } from 'react';
import RemoveTodo from './RemoveTodo';

function ShowTodo({ task, time, setTask, setTime }) {
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (task === '' || time === '') {
      alert('Task dan Time tidak boleh kosong');
      return;
    }
    setTodos([...todos, { task, time }]);
    setTask('');
    setTime('');
  };


