import { createFormAction } from 'redux-form-saga';
 
// export const searchMovies = createFormAction('SEARCH_SUBMIT');

export const getMovies = () => createFormAction({
	type: 'GET_MOVIES',
});