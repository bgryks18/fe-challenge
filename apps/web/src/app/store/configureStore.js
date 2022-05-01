import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import accountReducer from '../reducers/accountReducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      accountState: accountReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
