export const getMovies = (params) => ({
	type: 'GET_MOVIES',
	params: params || ({ sortBy: 'release_date', sortOrder : 'asc', searchBy : 'title', name : '' })
});

export const getMovieId = (payload) => ({
	type: 'GET_MOVIE_ID',
	payload: ({ id: 19 })
})