import { combineReducers } from 'redux';
import seats from './seatReducer';
import errors from './errorsReducers';

export default combineReducers({
  seats,
  errors,
});
