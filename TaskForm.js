// TaskForm.js
import React, { useContext, useState } from 'react';
import TaskContext from './TaskContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ id: Date.now(), title: newTask });
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
