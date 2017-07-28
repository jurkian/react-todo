import React, { Component } from 'react';
import './app.css';

import TodoList from '../TodoList/index';

const tasks = [
   {
      id: 0,
      title: 'lorem ipsum dolor',
      complete: true
   }, {
      id: 1,
      title: 'sit amet',
      complete: false
   }, {
      id: 2,
      title: 'dolor ipsum lorem',
      complete: true
   }
];

class App extends Component {
   constructor() {
      super();

      this.state = { tasks };
   }

   render() {
      return (
         <div className="App">
            <TodoList
               tasks={this.state.tasks}
               toggleTaskComplete={this.toggleTaskComplete.bind(this)}
            />
         </div>
      )
   }

   toggleTaskComplete(task) {
      let newTasks = this.state.tasks;
      newTasks[task.id].complete = !task.complete;

      this.setState({ tasks: newTasks });
   }
}

export default App;
