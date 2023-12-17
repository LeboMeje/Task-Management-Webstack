// TaskItem.js
import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      {task.title} - {task.deadline}
      {/* Add more task details or actions as needed */}
    </li>
  );
}

export default TaskItem;
