import shortid from 'shortid';

export const ADD_BOARD = 'ADD_BOARD';
export const ADD_CARD = 'ADD_CARD';

export const addBoard = name => {
  const id = shortid.generate();
  return {
    type: ADD_BOARD,
    payload: {
      id,
      name,
      lists: [],
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
