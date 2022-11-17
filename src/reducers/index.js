import { combineReducers } from 'redux';
import { coinsReducer } from './coins';

export default combineReducers({
  coins: coinsReducer
});
