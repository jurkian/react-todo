import todos from './todos';
import visibilityFilter from './visibilityFilter';
import searchFilter from './searchFilter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
   todos,
   visibilityFilter,
   searchFilter
});

export default reducers;