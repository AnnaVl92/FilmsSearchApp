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
 
// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(
// 	persistedReducer,
// 	applyMiddleware(sagaMiddleware, logger)
// );
// export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

function configureStore(preloadedState) {
	console.log('configureStore')
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		persistedReducer,
		preloadedState,
		applyMiddleware(sagaMiddleware, logger)
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};


export const store = configureStore();

export const persistor = persistStore(store);

export const configureStore1 = configureStore;



