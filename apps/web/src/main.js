import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import configureStore from './app/store/configureStore';
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.createRoot(document.getElementById('root'), {
  identifierPrefix: 'id',
}).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
