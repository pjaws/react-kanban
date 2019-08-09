import reducer from './cardLists';
import { ADD_CARD, ADD_CARD_LIST, DELETE_CARD } from '../constants/ActionTypes';

describe('cardListsReducer', () => {
  describe('initial state', () => {
    it('should return the correct default state', () => {
      const action = { type: 'FAKE_ACTION' };
      const expected = {
        byId: {},
        allIds: [],
      };

      expect(reducer(undefined, action)).toEqual(expected);
    });
  });

  describe('ADD_CARD_LIST', () => {
    it('should return the correct state', () => {
      const action = {
        type: ADD_CARD_LIST,
        payload: { cardListId: '1', name: 'Chores', boardId: '1' },
      };
      const expected = {
        byId: {
          '1': { id: '1', name: 'Chores', cards: [] },
        },
        allIds: ['1'],
      };

      expect(reducer(undefined, action)).toEqual(expected);
    });
  });

  describe('ADD_CARD', () => {
    it('should return the correct state', () => {
      const action = {
        type: ADD_CARD,
        payload: { cardId: '1', text: 'Mow the lawn', cardListId: '1' },
      };
      const initialState = {
        byId: {
          '1': { id: '1', name: 'Chores', cards: [] },
        },
        allIds: ['1'],
      };
      const expected = {
        byId: {
          '1': { id: '1', name: 'Chores', cards: ['1'] },
        },
        allIds: ['1'],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('DELETE_CARD', () => {
    it('should return the correct state', () => {
      const action = {
        type: DELETE_CARD,
        payload: {
          cardId: '1',
          cardListId: '1',
        },
      };
      const initialState = {
        byId: {
          '1': { id: '1', name: 'Chores', cards: ['1'] },
        },
        allIds: ['1'],
      };
      const expected = {
        byId: {
          '1': { id: '1', name: 'Chores', cards: [] },
        },
        allIds: ['1'],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});
