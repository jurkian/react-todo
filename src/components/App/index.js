import React, { Component } from 'react';
import './app.css';

import TodoList from '../TodoList/index';

const tasks = [
   {
      id: 0,
      title: 'lorem ipsum dolor',
      completed: true
   }, {
      id: 1,
      title: 'sit amet',
      completed: false
   }, {
      id: 3,
      title: 'dolor ipsum lorem',
      completed: true
   }
];

class App extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div className="App">
            <TodoList tasks={tasks} />
         </div>
      )
   }
}

export default App;
