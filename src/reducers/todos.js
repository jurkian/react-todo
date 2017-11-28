const todos = (state = [], action) => {
   switch (action.type) {
      // Initial fetch start
      case 'FETCH_TODOS_START':
         return state;

      // Initial fetch error
      case 'FETCH_TODOS_ERROR':
         return state;

      // Initial fetch - tasks received
      case 'RECEIVE_TASKS':
         return state = action.data;

      // Add todo
      case 'ADD_TODO_START':
         return state;

      case 'ADD_TODO_ERROR':
         return state;

      case 'ADD_TODO':
         return [
            ...state,
            {
               text: action.text,
               completed: false
            }
         ]

      // Toggle todo
      case 'TOGGLE_TODO_START':
         return state;

      case 'TOGGLE_TODO_ERROR':
         return state;

      case 'TOGGLE_TODO':
         return state.map((todo, currentIndex) => {
            // Modify current todo
            if (action.id === currentIndex) {
               return {
                  text: todo.text,
                  completed: !todo.completed
               }
            }

            return todo
         })

      // Remove todo
      case 'REMOVE_TODO_START':
         return state;

      case 'REMOVE_TODO_ERROR':
         return state;

      case 'REMOVE_TODO':
         return state.filter((el, index) => index !== action.id);

      default: 
         return state;
   }
};

export default todos;