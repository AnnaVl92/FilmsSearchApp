export const getMovies = (params) => ({
	type: 'GET_MOVIES',
	params: params || ({ sortBy: 'release_date', sortOrder : 'asc', searchBy : 'title', name : '' })
});

export const getMovieById = (movieId) => ({
	type: 'GET_MOVIE_BY_ID',
	payload: movieId
});

export const getMoviesBySimilarGenre = (genres) => ({
	type: 'GET_MOVIES_BY_SIMILAR_GENRE',
	params: ({ searchBy : 'genres', filter : genres || '' })
});