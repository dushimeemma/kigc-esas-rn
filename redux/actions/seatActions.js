import { types } from './types';
import axios from '../utils/axios';
import { returnErrors } from './errorsActions';

export const getSeat = (regNo) => async (dispatch) => {
  try {
    const res = await axios.post('/api/seat/view', regNo);
    dispatch({
      type: types.VIEW_SEAT,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.status, error.response.data));
  }
};
