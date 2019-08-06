import { combineReducers } from 'redux';
import { ADD_CARD, EDIT_CARD } from '../actions';

const addCard = (state, action) => {
  const { payload } = action;
  const { cardId, text } = payload;
  const card = { id: cardId, text };

  return {
    ...state,
    [cardId]: card,
  };
};

const editCard = (state, action) => {
  const { payload } = action;
  const { cardId, text } = payload;
  const card = state[cardId];

  return {
    ...state,
    [cardId]: {
      ...card,
      text,
    },
  };
};

const cardsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);
    case EDIT_CARD:
      return editCard(state, action);
    default:
      return state;
  }
};

const allCards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload.cardId];
    default:
      return state;
  }
};

export default combineReducers({
  byId: cardsById,
  allIds: allCards,
});
