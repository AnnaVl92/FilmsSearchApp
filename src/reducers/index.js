const initialState = {
	movies: [],
	movie: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIES':
			return { ...state, loading: true };
		case 'MOVIES_RECEIVED':
			return { ...state, movies: action.json, loading: false };
		case 'GET_MOVIE_ID':
			return { ...state, loading: true };
		case 'MOVIE_ID_RECEIVED':
			return { ...state, movie: action.json, loading: false };
		default:
			return state;
	}
};
export default reducer;