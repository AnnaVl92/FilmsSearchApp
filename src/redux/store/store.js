import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { logger } from 'redux-logger';
import rootSaga from '../sagas';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
 
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
	persistedReducer,
	applyMiddleware(sagaMiddleware, logger)
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
