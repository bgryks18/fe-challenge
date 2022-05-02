import sendReq from '../utils/request';
const errorHandler = async (dispatch, method, url, dataObj) => {
  let data = {};
  let params = {};
  if (dataObj) {
    if (dataObj.data) {
      data = dataObj.data;
    }
    if (dataObj.params) {
      params = dataObj.params;
    }
  }
  const res = await sendReq(method, url, { data, params });
  if (res instanceof Error) {
    let errorTitle;
    if (res.response) {
      if (res.response.data) {
        errorTitle = res.response.data.error;
      } else {
        errorTitle = res.name;
      }
    }
    if (!res.response.data) {
      dispatch({
        type: 'addError',
        payload: { message: res.message, code: res.code, title: errorTitle },
      });
    } else {
      dispatch({
        type: 'addError',
        payload: {
          message: res.response.data.message,
          code: res.response.data.statusCode,
          title: errorTitle,
        },
      });
    }
    console.log(res);
    return null;
  }
  return res;
};

export default errorHandler;
