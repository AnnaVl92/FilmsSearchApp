import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { logger } from 'redux-logger';
import rootSaga from '../sagas';

const rootReducer = function(){};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;