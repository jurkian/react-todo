import React, { Component } from 'react';

class TodoList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const tasks = this.props.tasks.map(task => {
         return <SingleTask
            key={task.id}
            id={task.id}
            complete={task.complete}
            title={task.title}
            toggleTaskComplete={this.props.toggleTaskComplete} />;
      });

      return (
         <section>
            <ul className="Tasks-list">
               {tasks}
            </ul>

            <footer>
               <a href="#" className="Add-new-task">Add new task</a>
               <button className="Search-task"><i className="ion-ios-search-strong"></i></button>
            </footer>
         </section>
      )
   }
}

const SingleTask = props => (
   <li>
      <span className="Task-status">
         <button onClick={props.toggleTaskComplete.bind(this, props)}>
            <i className={props.complete === true ? 'ion-ios-checkmark-outline' : 'ion-ios-close-outline'}></i>
         </button>
      </span>
      <span className="Task-title">{props.title}</span>
   </li>
);

export default TodoList;