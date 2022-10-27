import React, { useState } from 'react';
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
        <input
          className="inputTask"
          type="text"
          name="task"
          value={task}
          placeholder="Example: Sarapan"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="inputTime"
          type="text"
          name="time"
          value={time}
          placeholder="Example: 07.00"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <ShowTodo task={task} time={time} setTask={setTask} setTime={setTime} />
    </>
  );
}

export default Todo;
