import shortid from 'shortid';

export const ADD_BOARD = 'ADD_BOARD';

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
