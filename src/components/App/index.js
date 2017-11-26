import React, { Component } from 'react';
import './app.css';

import TodosList from '../../containers/TodosList';
import FilterLinks from '../../containers/FilterLinks';

class App extends Component {
   constructor() {
      super();

      this.state = { tasks: [], search: '' };
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
            <TodosList />
            <FilterLinks />
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

   addNewTask(title) {
      if (title.length >= 2) {
         fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               'title': title,
               'complete': false
            })
         }).then(() => {

            // Add item to state
            this.state.tasks.push({
               title,
               complete: false
            });

            // Refresh state
            this.setState({ tasks: this.state.tasks });
         });
      }
   }

   findTask(title) {
      // Always update state, even if it goes back to empty (default state)
      this.setState({ search: title })
   }
}

export default App;
