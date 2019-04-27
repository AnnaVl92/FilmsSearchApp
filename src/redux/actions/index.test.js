import React from 'react';
import expect from 'expect';
import { getMovies, getMovieId, getMoviesBySimilarGenre } from './index.js';

describe('actions', () => {
	it('should create an action to get movies', () => {
		const payload = { sortBy: 'release_date', sortOrder : 'asc', searchBy : 'title', name : '' };
		const expectedAction = {
			type: 'GET_MOVIES',
			params: payload
		};
		expect(getMovies(payload)).toEqual(expectedAction);
	});

	it('should create an action to get movie by id', () => {
		const payload = { id: 19 };
		const expectedAction = {
			type: 'GET_MOVIE_ID',
			payload: payload
		};
		expect(getMovieId(payload)).toEqual(expectedAction);
	});

	it('should create an action to get movies by similar genre', () => {
		const payload = { searchBy : 'genres', filter : 'Drama, Science Fiction' };
		const expectedAction = {
			type: 'GET_MOVIES_BY_SIMILAR_GENRE',
			params: payload
		};
		expect(getMoviesBySimilarGenre(payload)).toEqual(expectedAction);
	});
})