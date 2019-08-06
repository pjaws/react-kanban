import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  boards: {
    byId: {
      '1': { id: '1', name: 'Welcome Board', cardLists: ['1', '2', '3'] },
    },
    allIds: ['1'],
  },
  cardLists: {
    byId: {
      '1': { id: '1', name: 'Todo', cards: ['1', '2'] },
      '2': { id: '2', name: 'Doing', cards: ['3', '4'] },
      '3': { id: '3', name: 'Done', cards: ['5', '6'] },
    },
    allIds: ['1', '2', '3'],
  },
  cards: {
    byId: {
      '1': { id: '1', text: 'Buy milk and eggs' },
      '2': { id: '2', text: 'Set up dentist appointment' },
      '3': { id: '3', text: 'Fix the sink' },
      '4': { id: '4', text: 'Research smart lightbulbs' },
      '5': { id: '5', text: 'Install dishwasher' },
      '6': { id: '6', text: 'Buy coffee' },
    },
    allIds: ['1', '2', '3', '4', '5', '6'],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(logger, thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
