import { combineReducers } from 'redux';
import { ADD_BOARD, ADD_CARD_LIST } from '../constants/ActionTypes';

const addCardList = (state, action) => {
  const { cardListId, boardId } = action.payload;
  const board = state[boardId];

  return {
    ...state,
    [boardId]: {
      ...board,
      cardLists: board.cardLists.concat(cardListId),
    },
  };
};

const addBoard = (state, action) => {
  const { id, name } = action.payload;

  return {
    ...state,
    [id]: {
      id,
      name,
      cardLists: [],
    },
  };
};

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return addBoard(state, action);
    case ADD_CARD_LIST:
      return addCardList(state, action);
    default:
      return state;
  }
};

const allBoards = (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      return state.concat(action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId: boardsById,
  allIds: allBoards,
});
