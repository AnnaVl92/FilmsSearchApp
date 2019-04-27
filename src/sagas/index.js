import { takeLatest, all, put } from "redux-saga/effects";
import { getMovies, getMovieId, getMoviesBySimilarGenre } from '../actions';

function* fetchMovies(params) {
	params = params.params && params.params;
	const json = yield fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${params.sortBy}&sortOrder=${params.sortOrder}&search=${params.name}&searchBy=${params.searchBy}`)
		.then(response => response.json(), );
	yield put({ type: "MOVIES_RECEIVED", json: json.data, });
};

function* actionWatcher() {
	yield takeLatest('GET_MOVIES', fetchMovies)
};

function* fetchMovieById(payload) {
	payload = payload.payload && payload.payload;
	const json = yield fetch(`https://reactjs-cdp.herokuapp.com/movies/${payload.id}`)
		.then(response => response.json(), );
	yield put({ type: "MOVIE_ID_RECEIVED", json: json });
};

function* actionIdWatcher() {
	yield takeLatest('GET_MOVIE_ID', fetchMovieById)
};

function* fetchMoviesBySimilarGenre(params) {
	params = params.params && params.params;
	const json = yield fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=${params.searchBy}&filter=${params.filter}`)
		.then(response => response.json(), );
	yield put({ type: "MOVIES_BY_SIMILAR_GENRE_RECEIVED", json: json.data, });
};

function* actionSimilarGenreWatcher() {
	yield takeLatest('GET_MOVIES_BY_SIMILAR_GENRE', fetchMoviesBySimilarGenre)
};

export default function* rootSaga() {
	yield all([
		fetchMovies({params: { sort : 'desc', searchBy : 'title', name : '' }}),
		actionWatcher(),
		fetchMovieById({payload: { id: 19 }}),
		actionIdWatcher(),
		fetchMoviesBySimilarGenre({params: { searchBy : 'genres', filter : 'Drama, Science Fiction' }}),
		actionSimilarGenreWatcher()
	]);
}