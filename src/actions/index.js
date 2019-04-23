export const getMovies = (params) => ({
	type: 'GET_MOVIES',
	params: params || ({ sort : 'desc', searchBy : 'title', name : '' })
});