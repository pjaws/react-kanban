import { combineReducers } from 'redux';
import { ADD_CARD } from '../actions';

const addCard = (state, action) => {
  const { payload } = action;
  const { cardId, text } = payload;

  const card = { id: cardId, text };

  return {
    ...state,
    [cardId]: card,
  };
};

const cardsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);
    default:
      return state;
  }
};

const allCards = (state = [], action) => {
  return state;
};

export default combineReducers({
  byId: cardsById,
  allIds: allCards,
});
