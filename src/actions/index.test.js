import configureStore from 'redux-mock-store';
import * as types from '../constants/ActionTypes';
import * as actions from './index';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('addBoard', () => {
    it('should dispatch the proper action and payload', () => {
      const name = 'Wedding Tasks';
      const expected = [
        {
          type: types.ADD_BOARD,
          payload: {
            id: '1',
            name,
          },
        },
      ];

      store.dispatch(actions.addBoard(name));
      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('addCardList', () => {
    it('should dispatch the proper action and payload', () => {
      const name = 'Grocery List';
      const boardId = '1';
      const expected = [
        {
          type: types.ADD_CARD_LIST,
          payload: {
            cardListId: '1',
            name,
            boardId,
          },
        },
      ];

      store.dispatch(actions.addCardList(name, boardId));
      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('editCardList', () => {
    it('should dispatch the proper action and payload', () => {
      const name = 'Chores List';
      const cardListId = '1';
      const expected = [
        {
          type: types.EDIT_CARD_LIST,
          payload: {
            cardListId,
            name,
          },
        },
      ];

      store.dispatch(actions.editCardList(cardListId, name));
      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('addCard', () => {
    it('should dispatch the proper action and payload', () => {
      const text = 'Join a pyramid scheme.';
      const cardListId = '1';
      const expected = [
        {
          type: types.ADD_CARD,
          payload: {
            cardId: '1',
            text,
            cardListId,
          },
        },
      ];

      store.dispatch(actions.addCard(text, cardListId));
      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('editCard', () => {
    it('should dispatch the proper action and payload', () => {
      const text = 'Join a cult.';
      const cardId = '1';
      const expected = [
        {
          type: types.EDIT_CARD,
          payload: {
            cardId,
            text,
          },
        },
      ];

      store.dispatch(actions.editCard(cardId, text));
      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('deleteCard', () => {
    it('should dispatch the proper action and payload', () => {
      const cardId = '1';
      const cardListId = '1';
      const expected = [
        {
          type: types.DELETE_CARD,
          payload: {
            cardId,
            cardListId,
          },
        },
      ];

      store.dispatch(actions.deleteCard(cardId, cardListId));
      expect(store.getActions()).toEqual(expected);
    });
  });
});
