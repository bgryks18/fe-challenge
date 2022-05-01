import sendReq from '../utils/request';
const errorHandler = async (dispatch, method, url, data) => {
  const res = await sendReq(method, url, data);
  if (res instanceof Error) {
    if (!res.response.data) {
      dispatch({
        type: 'addError',
        payload: { message: res.message, code: res.code, title: res.name },
      });
    } else {
      dispatch({
        type: 'addError',
        payload: {
          message: res.response.data.message,
          code: res.response.data.statusCode,
          title: res.response.data.error,
        },
      });
    }
  }
  return res;
};

export default errorHandler;
