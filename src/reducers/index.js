const initialState = {
	movies: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIES':
			return { ...state, loading: true };
		case 'MOVIES_RECEIVED':
			return { ...state, movies: action.json, loading: false }
		default:
			return state;
	}
};
export default reducer;