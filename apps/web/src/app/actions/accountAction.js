import errorHandler from '../utils/errorHandler';
export const getAccounts = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'account', data);
  if (res) {
    dispatch({ type: 'getAccounts', payload: res.data });
  }
};

export const getAccount = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'account/' + data.id, data);
  if (res) {
    dispatch({ type: 'getAccount', payload: res.data });
  }
};

export const searchAccounts = (data) => async (dispatch) => {
  dispatch({ type: 'searchAccounts', payload: data });
};

export const postAccounts = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'post', 'account', data);
  if (res) {
    dispatch({ type: 'postAccounts', payload: res.data });
  }
};

export const getActivities = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'activity', data);
  if (res) {
    dispatch({ type: 'getActivities', payload: res.data, filter: data.id });
  }
};

export const getCategories = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'get', 'activityCategory', data);
  if (res) {
    dispatch({ type: 'getCategories', payload: res.data });
  }
};

export const postActivities = (data) => async (dispatch) => {
  const res = await errorHandler(dispatch, 'post', 'activity', data);
  if (res) {
    dispatch({ type: 'postActivities', payload: res.data });
  }
};

export const toggleModal = () => async (dispatch) => {
  dispatch({ type: 'toggleModal' });
};
