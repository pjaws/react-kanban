import reducer from './boards';
import { ADD_BOARD, ADD_CARD_LIST } from '../constants/ActionTypes';

describe('boardsReducer', () => {
  describe('initial state', () => {
    it('should return the correct initial state', () => {
      const action = { type: 'FAKE_ACTION' };
      const expected = {
        byId: {},
        allIds: [],
      };

      expect(reducer(undefined, action)).toEqual(expected);
    });
  });

  describe('ADD_BOARD', () => {
    it('should return the correct state', () => {
      const action = {
        type: ADD_BOARD,
        payload: { name: 'New Board', id: '1', cardLists: [] },
      };
      const expected = {
        byId: {
          '1': { name: 'New Board', id: '1', cardLists: [] },
        },
        allIds: ['1'],
      };

      expect(reducer(undefined, action)).toEqual(expected);
    });
  });

  describe('ADD_CARD_LIST', () => {
    it('should return the correct state', () => {
      const action = {
        type: ADD_CARD_LIST,
        payload: { cardListId: '1', name: 'Groceries', boardId: '1' },
      };
      const initialState = {
        byId: {
          '1': { name: 'New Board', id: '1', cardLists: [] },
        },
        allIds: ['1'],
      };
      const expected = {
        byId: {
          '1': { name: 'New Board', id: '1', cardLists: ['1'] },
        },
        allIds: ['1'],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});
