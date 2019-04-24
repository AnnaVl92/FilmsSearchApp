import { takeLatest, all, put } from "redux-saga/effects";
import { getMovies } from '../actions';

function* fetchMovies(params) {
	params = params.params && params.params;
	const json = yield fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${params.sortBy}&sortOrder=${params.sortOrder}&search=${params.name}&searchBy=${params.searchBy}`)
		.then(response => response.json(), );
	yield put({ type: "MOVIES_RECEIVED", json: json.data, });
};

function* actionWatcher() {
	yield takeLatest('GET_MOVIES', fetchMovies)
};

export default function* rootSaga() {
	yield all([
		fetchMovies({params: { sort : 'desc', searchBy : 'title', name : '' }}),
		actionWatcher()
	]);
}