export const ADD_BOARD = 'ADD_BOARD';

export const addBoard = name => ({
  type: ADD_BOARD,
  payload: {
    name,
  },
});
