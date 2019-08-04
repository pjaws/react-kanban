import { combineReducers } from 'redux';
import { ADD_BOARD } from '../actions';

const boards = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        byId: { ...state.byId, [action.payload.id]: action.payload },
        allIds: [...state.allIds, action.payload.id],
      };
    default:
      return state;
  }
};

const cardLists = (state = { byId: [], allIds: [] }, action) => {
  return state;
};

const cards = (state = { byId: [], allIds: [] }, action) => {
  return state;
};

export default combineReducers({ boards, cardLists, cards });
