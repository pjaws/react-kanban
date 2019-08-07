import { combineReducers } from 'redux';
import { ADD_BOARD, ADD_CARD_LIST } from '../actions';

const addCardList = (state, action) => {
  const { payload } = action;
  const { cardListId, boardId } = payload;
  const board = state[boardId];

  return {
    ...state,
    [boardId]: {
      ...board,
      cardLists: board.cardLists.concat(cardListId),
    },
  };
};

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
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
