import React, { Component } from 'react';
import './app.css';

import TodoList from '../TodoList/index';

class App extends Component {
   constructor() {
      super();

      this.state = { tasks: [] };
   }

   componentWillMount() {
      fetch('http://localhost:3001/tasks').then(res => {
         return res.json();
      }).then(tasks => {
         this.setState({ tasks });
      });
   }

   render() {
      return (
         <div className="App">
            <TodoList
               tasks={this.state.tasks}
               toggleTaskComplete={this.toggleTaskComplete.bind(this)}
               removeTask={this.removeTask.bind(this)}
            />
         </div>
      )
   }

   toggleTaskComplete(task) {
      fetch(`http://localhost:3001/tasks/${task.id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            'title': task.title,
            'complete': !task.complete
         })
      }).then(() => {

         const currentTask = this.state.tasks.find(el => el.title === task.title);
         currentTask.complete = !currentTask.complete;

         // Refresh state
         this.setState({ tasks: this.state.tasks });
      });
   }

   removeTask(id) {
      fetch(`http://localhost:3001/tasks/${id}`, {
         method: 'DELETE'
      }).then(() => {

         // Refresh state
         this.setState(prevState => ({ tasks: prevState.tasks.filter(task => task.id !== id) }));
      });
   }
}

export default App;
