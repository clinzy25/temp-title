import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMilddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import feed_reducer from './feed/feed_reducer';
import user_reducer from './user/user_reducer';
import feedSaga from './feed/feed_saga';
import userSaga from './user/user_saga';

const sagaMiddleware = createSagaMilddleware();

const middlewares = composeWithDevTools(
  compose(applyMiddleware(sagaMiddleware, logger))
);

const appReducer = combineReducers({
  feed_reducer,
  user_reducer,
});

const store = createStore(appReducer, middlewares);

function* rootSaga() {
  yield all([fork(feedSaga), fork(userSaga)]);
}

sagaMiddleware.run(rootSaga);

export default store;
