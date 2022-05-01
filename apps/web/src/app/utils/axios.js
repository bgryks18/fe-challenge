import ax from 'axios';

export default ax.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  },
});
