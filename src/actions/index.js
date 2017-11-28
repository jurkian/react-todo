// Action types

// Async related
export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

export const TOGGLE_TODO_START = 'TOGGLE_TODO_START';
export const TOGGLE_TODO_ERROR = 'TOGGLE_TODO_ERROR';

export const REMOVE_TODO_START = 'REMOVE_TODO_START';
export const REMOVE_TODO_ERROR = 'REMOVE_TODO_ERROR';

// Actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';
export const CHANGE_SEARCH_FILTER = 'CHANGE_SEARCH_FILTER';

// Action creators
export const addTodo = (text) => {
   return function (dispatch) {
      dispatch({ type: ADD_TODO_START });

      // Temporary API
      fetch(`http://localhost:3001/tasks`, {
         // method: 'POST'
      })
      .then(res => res.json())
      .then(data => {
         dispatch({ type: ADD_TODO, text });
      })
      .catch(error => {
         dispatch({ type: ADD_TODO_ERROR, error });
      })
   }
}

export const toggleTodo = (id) => {
   return function (dispatch) {
      dispatch({ type: TOGGLE_TODO_START });

      // Temporary API
      fetch(`http://localhost:3001/tasks/${id}`, {
         method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
         dispatch({ type: TOGGLE_TODO, id });
      })
      .catch(error => {
         dispatch({ type: TOGGLE_TODO_ERROR, error });
      })
   }
}

export const removeTodo = (id) => {
   return function (dispatch) {
      dispatch({ type: REMOVE_TODO_START });

      // Temporary API
      fetch(`http://localhost:3001/tasks/${id}`, {
         method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
         dispatch({ type: REMOVE_TODO, id });
      })
      .catch(error => {
         dispatch({ type: REMOVE_TODO_ERROR, error });
      })
   }
}

export const changeVisibilityFilter = (filter) => {
   return {
      type: CHANGE_VISIBILITY_FILTER,
      filter
   }
}

export const changeSearchFilter = (filter) => {
   return {
      type: CHANGE_SEARCH_FILTER,
      filter
   }
}