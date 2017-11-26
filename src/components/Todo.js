import React from 'react';

const Todo = ({ index, text, completed, toggleTodo, removeTodo }) => (
   <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>

      <span>{text}</span>
      <button onClick={() => toggleTodo(index)}>
         <i className="ion-checkmark"></i>
      </button>
      <button onClick={() => removeTodo(index)}>
         <i className="ion-close-round"></i>
      </button>

   </li>
);

export default Todo;