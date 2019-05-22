import React from 'react';
import expect from 'expect';
import { put } from 'redux-saga/effects';
import fetchMovieById from './index.js';
import movie from './mockMovie.json';

describe('saga', () => {
	it('test fetchMovieById', () => {
		const params = { payload: { id: 19 } };
		const gen = fetchMovieById(params);
		expect(gen.next().value).toEqual(put({ type: 'MOVIE_ID_RECEIVED', json: movie }));
	});
});
