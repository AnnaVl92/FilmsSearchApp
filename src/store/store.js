import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { logger } from 'redux-logger';
import rootSaga from '../sagas';
import formActionSaga from 'redux-form-saga';

const rootReducer = function(){};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, logger)
);
const sagas = [
	rootSaga,
	formActionSaga
];
sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;