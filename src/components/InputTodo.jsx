import React from 'react';

function InputTodo({ task, time, handleChange }) {
  return (
    <>
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
    </>
  );
}

export default InputTodo;
