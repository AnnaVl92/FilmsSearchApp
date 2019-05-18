export default function reducer(state = { movies: [], movie: {}, similarMovies: [] }, action){
	console.log('reducer')
	switch (action.type) {
		case 'GET_MOVIES':
			return { ...state, loading: true };
		case 'MOVIES_RECEIVED':
			return { ...state, movies: action.json, loading: false };
		case 'GET_MOVIE_BY_ID':
			return { ...state, loading: true };
		case 'MOVIE_BY_ID_RECEIVED':
			return { ...state, movie: action.json, loading: false };
		case 'GET_MOVIES_BY_SIMILAR_GENRE':
			return { ...state, loading: true };
		case 'MOVIES_BY_SIMILAR_GENRE_RECEIVED':
			return { ...state, similarMovies: action.json, loading: false };
		case 'persist/REHYDRATE':
    		return action.payload || {}
		default:
			return state;
	}
};