import shortid from 'shortid';

export const ADD_BOARD = 'ADD_BOARD';
export const ADD_CARD_LIST = 'ADD_CARD_LIST';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const addBoard = name => {
  const id = shortid.generate();
  return {
    type: ADD_BOARD,
    payload: {
      id,
      name,
    },
  };
};

export const addCardList = (name, boardId) => {
  const cardListId = shortid.generate();

  return {
    type: ADD_CARD_LIST,
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
    type: ADD_CARD,
    payload: {
      cardId,
      text,
      cardListId,
    },
  };
};

export const editCard = (cardId, text) => {
  return {
    type: EDIT_CARD,
    payload: {
      cardId,
      text,
    },
  };
};
