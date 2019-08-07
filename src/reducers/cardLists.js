import { combineReducers } from 'redux';
import { ADD_CARD, ADD_CARD_LIST } from '../actions';

const addCardList = (state, action) => {
  const { payload } = action;
  const { cardListId, name } = payload;

  return {
    ...state,
    [cardListId]: {
      id: cardListId,
      name,
      cards: [],
    },
  };
};

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
    case ADD_CARD_LIST:
      return addCardList(state, action);
    case ADD_CARD:
      return addCard(state, action);
    default:
      return state;
  }
};

const allCardLists = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD_LIST:
      return state.concat(action.payload.cardListId);
    default:
      return state;
  }
};

export default combineReducers({
  byId: cardListsById,
  allIds: allCardLists,
});
