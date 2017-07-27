import React, { Component } from 'react';

class TodoList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const tasks = this.props.tasks.map(el => <SingleTask key={el.id} status={el.completed} title={el.title} />);

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
         <button>{props.status === true ? 1 : 0 }</button>
      </span>
      <span className="Task-title">{props.title}</span>
   </li>
);

export default TodoList;