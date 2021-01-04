import { types } from '../actions/types';

const initialState = {
  msg: '',
  seat: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_SEAT:
      return {
        ...state,
        msg: action.payload.msg,
        seat: action.payload.seat,
      };
    default:
      return state;
  }
};
