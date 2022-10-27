import React, { useState } from 'react';
import InputTodo from '../components/InputTodo';
import ShowTodo from '../components/ShowTodo';

function Todo() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else if (e.target.name === 'time') {
      setTime(e.target.value);
    }
  };

  return (
    <>
      <h1>Aplikasi Todo List Sederhana</h1>
      <div className="todoForm">
        <InputTodo task={task} time={time} handleChange={handleChange} />
      </div>
      <ShowTodo task={task} time={time} setTask={setTask} setTime={setTime} />
    </>
  );
}

export default Todo;
