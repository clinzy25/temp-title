import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import feedReducer from './feed_reducer';

const appReducer = combineReducers({
  feedReducer,
});

const store = createStore(appReducer, applyMiddleware(logger));

export default store;
