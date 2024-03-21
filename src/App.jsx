import React, { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import Filter from './Filter';
import './App.css';

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" }
  ];

  const generateTaskId = () => {
    setTaskIdCounter(prevId => prevId + 1);
    return taskIdCounter;
  };

  const handleAddTask = (taskContent) => {
    const newTask = { id: generateTaskId(), content: taskContent, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newContent) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, content: newContent } : task
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = filter === 'all' ? tasks :
    filter === 'active' ? tasks.filter(task => !task.completed) :
    tasks.filter(task => task.completed);

  return (
    <div className='App'>
      <Header title="Todo List" />
      <Filter label="Filter" options={filterOptions} onFilterChange={handleFilterChange} />
      <TodoInput addButtonLabel="Add" onAdd={handleAddTask} />
      <ul>
        {filteredTasks.map(task =>
          <TodoItem
            key={task.id}
            task={task}
            onToggleCompletion={handleToggleCompletion}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        )}
      </ul>
    </div>
  );
}
