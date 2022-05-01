import errorHandler from '../utils/errorHandler';
export const getAccounts = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'account', data);
  dispatch({ type: 'getAccounts', payload: res.data });
};
export const searchAccounts = (data) => async (dispatch) => {
  dispatch({ type: 'searchAccounts', payload: data });
};
