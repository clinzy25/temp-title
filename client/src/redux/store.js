import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import logger from 'redux-logger';
import createSagaMilddleware from 'redux-saga';
import feed_reducer from './feeds/feed_reducer';
import user_reducer from './user/user_reducer';
import feedSaga from './sagas/feed_saga';

const sagaMiddleware = createSagaMilddleware();

const middlewares = compose(applyMiddleware(sagaMiddleware, logger));

const appReducer = combineReducers({
  feed_reducer,
  user_reducer,
});

const store = createStore(appReducer, middlewares);

sagaMiddleware.run(feedSaga);

export default store;
