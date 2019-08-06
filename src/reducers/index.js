import { combineReducers } from 'redux';
import boards from './boards';
import cardLists from './cardLists';
import cards from './cards';

export default combineReducers({ boards, cardLists, cards });
