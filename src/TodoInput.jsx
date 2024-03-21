import React, { useState } from 'react';

export default function TodoInput({ addButtonLabel, onAdd }) {
  const [taskContent, setTaskContent] = useState('');

  const handleChange = (e) => {
    setTaskContent(e.target.value);
  };

  const handleAdd = () => {
    if (taskContent.trim() !== '') {
      onAdd(taskContent);
      setTaskContent('');
    }
  };

  return (
    <div className="TodoInput">
      <input
        type="text"
        value={taskContent}
        onChange={handleChange}
        placeholder="Add new task here.."
      />
      <button onClick={handleAdd}>{addButtonLabel}</button>
    </div>
  );
}
