import { combineReducers } from 'redux';

const boards = (state = {}, action) => {
  return state;
};

const cardLists = (state = {}, action) => {
  return state;
};

const cards = (state = {}, action) => {
  return state;
};

export default combineReducers({ boards, cardLists, cards });
