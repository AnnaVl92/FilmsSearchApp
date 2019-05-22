import React from 'react';
import { mount } from 'enzyme';
import FilmPage from './filmPage.jsx';
import data from '../../data.json';
import expect from 'expect';

// eslint-disable-next-line no-undef
describe('FilmPage', () => {
	// eslint-disable-next-line no-undef
	itx('check if FilmPage renders properly', () => {
		const wrapper = mount(<FilmPage />);
		expect(wrapper.state().film).toEqual(data.films[0]);
		expect(wrapper.state().similarFilms).toEqual(data.films);
		expect(wrapper).toMatchSnapshot();
	});
});
