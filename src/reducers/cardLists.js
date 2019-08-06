import { combineReducers } from 'redux';
import { ADD_CARD } from '../actions';

const addCard = (state, action) => {
  const { payload } = action;
  const { cardId, cardListId } = payload;

  const cardList = state[cardListId];

  return {
    ...state,
    [cardListId]: {
      ...cardList,
      cards: cardList.cards.concat(cardId),
    },
  };
};

const cardListsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);
    default:
      return state;
  }
};

const allCardLists = (state = [], action) => {
  return state;
};

export default combineReducers({
  byId: cardListsById,
  allIds: allCardLists,
});
