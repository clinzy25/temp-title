import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

const appReducer = combineReducers({
  reducer,
});

const store = createStore(appReducer, applyMiddleware(logger));

export default store;
