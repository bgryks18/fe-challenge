import sendReq from '../utils/request';
import errorHandler from '../utils/errorHandler';
export const getAccounts = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'account', data);
  dispatch({ type: 'getAccounts', payload: res.data });
};
