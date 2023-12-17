// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './TaskContext';

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
