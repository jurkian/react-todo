import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
   todos,
   visibilityFilter
});

export default reducers;