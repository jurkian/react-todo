import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

import Todo from '../components/Todo';

const getTodosByFilter = (todos, visibilityFilter, searchFilter) => {
   let result = [];

   // Visibility filter is top priority, so do it first
   switch (visibilityFilter) {
      case 'SHOW_ALL':
         result = todos;
         break;

      case 'SHOW_ACTIVE':
         result = todos.filter(todo => todo.completed === false);
         break;

      case 'SHOW_COMPLETED':
         result = todos.filter(todo => todo.completed === true);
         break;

      default:
         result = todos;
   }

   // If there is also a search filter set, do additional filtering
   if (searchFilter !== '') {
      return result.filter(todo => todo.text.includes(searchFilter) === true);
   }

   return result;
}

const TodosList = ({ todos, toggleTodo, removeTodo }) => (
   <ul>
      {todos.map((todo, index) => (
         <Todo
            key={index}
            index={index}
            {...todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo} />
      ))}
   </ul>
);

const mapStateToProps = (state) => {
   return {
      todos: getTodosByFilter(state.todos, state.visibilityFilter, state.searchFilter)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      toggleTodo: (id) => {
         dispatch(toggleTodo(id));
      },
      removeTodo: (id) => {
         dispatch(removeTodo(id));
      }
   }
};

const TodosListContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(TodosList);

export default TodosListContainer;