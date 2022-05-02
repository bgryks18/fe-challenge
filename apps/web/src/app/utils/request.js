import ax from './axios';

export default async (method, url, { data, params }) => {
  let response = {};
  let error;
  await ax({ method, url, data, params })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      error = err;
    });
  if (error) return error;
  return response;
};
