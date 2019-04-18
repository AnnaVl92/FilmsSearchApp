import React from 'react';
import Search from './search.jsx';
import SearchInput from './searchInput.jsx';
import { shallow, mount } from "enzyme";
import data from '../../data.json';

describe('Search', function() {
	itx('check list of films in search state',() => {
		const wrapper = mount(<Search />);
		expect(wrapper.state().films).toEqual(data.films);
		expect(wrapper.state().filteredFilms).toEqual(data.films);
		expect(wrapper.state().filteredFilms.length).toEqual(data.films.length);
		expect(wrapper.state().sortedFilms).toEqual(data.films);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('Search submit', () => {
	const mockSubmit = jest.fn(),
		props = {
			handleSubmit: mockSubmit
		},
		fakeEvent = { preventDefault: () => console.log('preventDefault') },
		component = shallow(<Search {...props} />);

	itx('find form', () => {
		expect(component.find("form").length).toBe(1);
	});

	itx('check submit', done => {
		component.find('form').simulate('submit', fakeEvent);
		setTimeout(() => {
			expect(component.state("submitHandled")).toBe(true)
			done();
		},100);
	},1000);
});