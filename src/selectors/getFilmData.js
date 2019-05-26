import { createSelector } from 'reselect';

const getFilmData = createSelector(
	state => state.similarMovies,
	state => state.movie,
	(similarMovies, movie) => ({
		similarMovies,
		movie
	})
);

export default getFilmData;
