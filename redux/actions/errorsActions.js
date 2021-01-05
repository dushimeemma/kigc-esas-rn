import { types } from './types';

export const returnErrors = (status, msg) => {
  return {
    type: types.GET_ERRORS,
    payload: { status, msg },
  };
};

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS,
  };
};
