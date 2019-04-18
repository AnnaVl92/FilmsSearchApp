import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
	yield takeLatest("API_CALL_REQUEST", workerSaga);
};

function fetchMovies() {
	return axios({
		method: "get",
		url: "https://reactjs-cdp.herokuapp.com/movies"
	});
};

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
	try {
		const response = yield call(fetchMovies);
		const movies = response.data;

		// dispatch a success action to the store with the new movies
		yield put({ type: "API_CALL_SUCCESS", movies });
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: "API_CALL_FAILURE", error });
	}
};