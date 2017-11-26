const initialState = [
   {
      'title': 'lorem ipsum dolor',
      'completed': true
   },
   {
      'title': 'dolor ipsum lorem',
      'completed': false
   },
   {
      'title': 'random text',
      'completed': false
   }
];

const todos = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [
            ...state,
            {
               title: action.title,
               completed: false
            }
         ]

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

      case 'REMOVE_TODO':
         return state.filter((el, index) => index !== action.id);

      default: 
         return state;
   }
};

export default todos;