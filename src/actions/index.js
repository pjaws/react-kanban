import shortid from 'shortid';
import * as types from '../constants/ActionTypes';

export const addBoard = name => {
  const id = shortid.generate();
  return {
    type: types.ADD_BOARD,
    payload: {
      id,
      name,
    },
  };
};

export const addCardList = (name, boardId) => {
  const cardListId = shortid.generate();

  return {
    type: types.ADD_CARD_LIST,
    payload: {
      cardListId,
      name,
      boardId,
    },
  };
};

export const addCard = (text, cardListId) => {
  const cardId = shortid.generate();

  return {
    type: types.ADD_CARD,
    payload: {
      cardId,
      text,
      cardListId,
    },
  };
};

export const editCard = (cardId, text) => {
  return {
    type: types.EDIT_CARD,
    payload: {
      cardId,
      text,
    },
  };
};
