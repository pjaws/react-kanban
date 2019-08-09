import { combineReducers } from 'redux';
import { ADD_CARD, ADD_CARD_LIST, DELETE_CARD } from '../constants/ActionTypes';

const addCardList = (state, action) => {
  const { cardListId, name } = action.payload;

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
  const { cardId, cardListId } = action.payload;
  const cardList = state[cardListId];

  return {
    ...state,
    [cardListId]: {
      ...cardList,
      cards: cardList.cards.concat(cardId),
    },
  };
};

const deleteCard = (state, action) => {
  const { cardId, cardListId } = action.payload;
  const cardList = state[cardListId];

  return {
    ...state,
    [cardListId]: {
      ...cardList,
      cards: cardList.cards.filter(id => id !== cardId),
    },
  };
};

const cardListsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD_LIST:
      return addCardList(state, action);
    case ADD_CARD:
      return addCard(state, action);
    case DELETE_CARD:
      return deleteCard(state, action);
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
