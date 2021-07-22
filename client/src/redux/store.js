import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import logger from 'redux-logger';
import createSagaMilddleware from 'redux-saga';
import feedReducer from './feed_reducer';
import feedSaga from './sagas/feed_saga';

const sagaMiddleware = createSagaMilddleware();

const middlewares = compose(applyMiddleware(sagaMiddleware, logger));

const appReducer = combineReducers({
  feedReducer
});

const store = createStore(appReducer, middlewares);

sagaMiddleware.run(feedSaga);

export default store;
