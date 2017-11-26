const searchFilter = (state = '', action) => {
   switch (action.type) {
      case 'CHANGE_SEARCH_FILTER':
         return action.filter;

      default:
         return state;
   }
};

export default searchFilter;