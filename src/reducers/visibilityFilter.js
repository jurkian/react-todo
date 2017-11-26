const visibilityFilter = (state = 'SHOW_ALL', action) => {
   switch (action.type) {
      case 'CHANGE_VISIBILITY_FILTER':
         return action.filter;

      default:
         return state;
   }
};

export default visibilityFilter;