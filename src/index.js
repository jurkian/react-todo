import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import './polyfills.js';
import 'normalize.css';
import './index.css';

import App from './components/App/index';

const store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(ReduxThunk)
);

store.dispatch((dispatch) => {
   dispatch({ type: 'FETCH_TODOS_START' });

   fetch('http://localhost:3001/tasks')
   .then(res => res.json())
   .then(data => {
      dispatch({ type: 'RECEIVE_TASKS', data });
   })
   .catch(error => {
      dispatch({ type: 'FETCH_TODOS_ERROR', error });
   })
});

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);