import { ADD_BOARD } from '../actions';

const boards = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        byId: { ...state.byId, [action.payload.id]: action.payload },
        allIds: [...state.allIds, action.payload.id],
      };
    default:
      return state;
  }
};

export default boards;
