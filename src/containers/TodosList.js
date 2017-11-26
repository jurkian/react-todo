import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions';

import Todo from '../components/Todo';

const getTodosByFilter = (todos, filter) => {
   switch (filter) {
      case 'SHOW_ALL':
         return todos;

      case 'SHOW_ACTIVE':
         return todos.filter(todo => todo.completed === false)

      case 'SHOW_COMPLETED':
         return todos.filter(todo => todo.completed === true)
   }
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
      todos: getTodosByFilter(state.todos, state.visibilityFilter)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addTodo: (text) => {
         dispatch(addTodo(text));
      },
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