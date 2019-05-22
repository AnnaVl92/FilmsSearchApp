import React from 'react';
import expect from 'expect';
import reducer from './index.js';

describe('reducer', () => {
	it('should return initialState', () => {
		expect(reducer(undefined, {})).toEqual(
			{
				movies: [],
				movie: {},
				similarMovies: []
			}
		);
	});

	it('should handle GET_MOVIES', () => {
		expect(reducer({}, {
			type: 'GET_MOVIES',
			params: {
				sortBy: 'release_date', sortOrder: 'asc', searchBy: 'title', name: 'trans'
			}
		})).toEqual(
			{
				loading: true
			}
		);
	});

	it('should handle MOVIES_RECEIVED', () => {
		expect(reducer({}, { type: 'MOVIES_RECEIVED' })).toEqual(
			{
				loading: false
			}
		);
	});

	it('should handle GET_MOVIE_ID', () => {
		expect(reducer({}, { type: 'GET_MOVIE_ID', payload: { id: 19 } })).toEqual(
			{
				loading: true
			}
		);
	});

	it('should handle MOVIE_ID_RECEIVED', () => {
		expect(reducer({}, { type: 'MOVIE_ID_RECEIVED', payload: { id: 19 } })).toEqual(
			{
				loading: false
			}
		);
	});

	it('should handle GET_MOVIES_BY_SIMILAR_GENRE', () => {
		expect(reducer({}, { type: 'GET_MOVIES_BY_SIMILAR_GENRE', params: { searchBy: 'genres', filter: 'Drama, Science Fiction' } })).toEqual(
			{
				loading: true
			}
		);
	});

	it('should handle MOVIES_BY_SIMILAR_GENRE_RECEIVED', () => {
		expect(reducer({}, { type: 'MOVIES_BY_SIMILAR_GENRE_RECEIVED', params: { searchBy: 'genres', filter: 'Drama, Science Fiction' } })).toEqual(
			{
				loading: false
			}
		);
	});
});
