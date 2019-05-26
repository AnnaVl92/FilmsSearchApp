import { createSelector } from 'reselect';

const getMoviesData = createSelector(
	state => state.movies,
	movies => ({
		movies
	})
);

export default getMoviesData;
