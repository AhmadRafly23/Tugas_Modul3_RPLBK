import React, { useState } from 'react';
import { useEffect } from 'react';

function RemoveTodo({ todos, setTodos, task }) {
  const [remove, setRemove] = useState('');

  const handleRemove = (task) => {
    const temporary = todos.filter((todo) => todo.task !== task);
    setRemove(temporary);
  };

  useEffect(() => {
    if (remove !== '') setTodos(remove);
    if (Array.isArray(remove)) setRemove('');
  }, [remove]);

  return (
    <div>
      <button className="btnDelete" onClick={() => handleRemove(task)}>
        Hapus Todo
      </button>
    </div>
  );
}

export default RemoveTodo;
