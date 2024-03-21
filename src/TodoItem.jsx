import React, { useState } from 'react';

export default function TodoItem({ task, onToggleCompletion, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(task.content);

  const handleToggleEdit = () => {
    setEditing(!editing);
    if (!editing) {
      setContent(task.content);
    }
  };

  const handleSaveEdit = () => {
    if (content.trim() !== '') {
      onEdit(task.id, content);
      setEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setContent(task.content);
    setEditing(false);
  };

  return (
    <li className="TodoItem">
      <input type="checkbox" checked={task.completed} onChange={() => onToggleCompletion(task.id)} />
      {editing ? (
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      ) : (
        <span>{task.content}</span>
      )}
      {editing ? (
        <>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleToggleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
