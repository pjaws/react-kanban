import { combineReducers } from 'redux';
import { ADD_CARD, EDIT_CARD, DELETE_CARD } from '../constants/ActionTypes';

const addCard = (state, action) => {
  const { cardId, text } = action.payload;
  const card = { id: cardId, text };

  return {
    ...state,
    [cardId]: card,
  };
};

const editCard = (state, action) => {
  const { cardId, text } = action.payload;
  const card = state[cardId];

  return {
    ...state,
    [cardId]: {
      ...card,
      text,
    },
  };
};

const deleteCard = (state, action) => {
  const { cardId } = action.payload;

  const { [cardId]: omit, ...newState } = state;

  return newState;
};

const cardsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);
    case EDIT_CARD:
      return editCard(state, action);
    case DELETE_CARD:
      return deleteCard(state, action);
    default:
      return state;
  }
};

const allCards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload.cardId];
    case DELETE_CARD:
      return state.filter(id => id !== action.payload.cardId);
    default:
      return state;
  }
};

export default combineReducers({
  byId: cardsById,
  allIds: allCards,
});
