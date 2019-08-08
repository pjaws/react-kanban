import reducer from './cards';
import { ADD_CARD, EDIT_CARD } from '../constants/ActionTypes';

describe('cardsReducer', () => {
  describe('default state', () => {
    it('should return the correct default state', () => {
      const action = { type: 'FAKE_ACTION' };
      const expected = {
        byId: {},
        allIds: [],
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
      const expected = {
        byId: {
          '1': { id: '1', text: 'Mow the lawn' },
        },
        allIds: ['1'],
      };

      expect(reducer(undefined, action)).toEqual(expected);
    });
  });

  describe('EDIT_CARD', () => {
    it('should return the correct state', () => {
      const action = {
        type: EDIT_CARD,
        payload: { cardId: '1', text: 'Mow nothing at all' },
      };
      const initialState = {
        byId: {
          '1': { id: '1', text: 'Mow the lawn' },
        },
        allIds: ['1'],
      };
      const expected = {
        byId: {
          '1': { id: '1', text: 'Mow nothing at all' },
        },
        allIds: ['1'],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});
