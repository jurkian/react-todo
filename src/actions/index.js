// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

// Action creators
export const addTodo = (text) => {
   return {
      type: ADD_TODO,
      text
   }
}

export const toggleTodo = (id) => {
   return {
      type: TOGGLE_TODO,
      id
   }
}

export const removeTodo = (id) => {
   return {
      type: REMOVE_TODO,
      id
   }
}

export const changeVisibilityFilter = (filter) => {
   return {
      type: CHANGE_VISIBILITY_FILTER,
      filter
   }
}