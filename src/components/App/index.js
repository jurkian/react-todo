import React from 'react';
import './app.css';

import AddTodo from '../AddTodo';
import TodosList from '../../containers/TodosList';
import FilterLinks from '../../containers/FilterLinks';
import SearchBox from '../SearchBox';

const App = () => (
   <div className="App">
      <AddTodo />
      <TodosList />
      <FilterLinks />
      <SearchBox />
   </div>

);

export default App;
