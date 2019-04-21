import { takeLatest, all, put } from "redux-saga/effects";

function* fetchMovies() {
	const json = yield fetch('https://reactjs-cdp.herokuapp.com/movies')
		.then(response => response.json(), );
	yield put({ type: "MOVIES_RECEIVED", json: json.data, });
};

function* actionWatcher() {
	yield takeLatest('GET_MOVIES', fetchMovies)
};

export default function* rootSaga() {
	yield all([
		fetchMovies(),
		actionWatcher()
	]);
}