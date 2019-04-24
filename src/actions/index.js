export const getMovies = (params) => ({
	type: 'GET_MOVIES',
	params: params || ({ sortBy: 'release_date', sortOrder : 'asc', searchBy : 'title', name : '' })
}); 