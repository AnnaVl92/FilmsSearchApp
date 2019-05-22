export const getMovies = params => ({
	type: 'GET_MOVIES',
	params: ({
		sortBy: params.sortBy || 'release_date',
		sortOrder: params.sortOrder || 'asc',
		searchBy: params.searchBy || 'title',
		name: params.name || ''
	})
});

export const getMovieById = movieId => ({
	type: 'GET_MOVIE_BY_ID',
	payload: movieId
});

export const getMoviesBySimilarGenre = genres => ({
	type: 'GET_MOVIES_BY_SIMILAR_GENRE',
	params: ({ searchBy: 'genres', filter: genres || '' })
});
