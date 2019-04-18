import { createStore } from 'redux';

const rootReducer = function(){};
const initialState = {
	films: []
};

const store = createStore(rootReducer, initialState);

export default store;